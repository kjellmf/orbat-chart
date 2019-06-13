import { Symbol } from "milsymbol";
import { select } from "d3-selection";
import { walkTree } from "./utils";
import { ChartOrientation, UnitNodeInfo, OrbChartOptions, Point, Size, Unit } from "./types";

const CHART_STYLE = `
.o-line {
  stroke: black;
  stroke-width: 1pt;
  fill:none;
}

.o-label {
  text-anchor: middle;
}

.o-unit:hover {
  font-weight: bold;
}
`;

export const DEFAULT_OPTIONS = {
  symbolSize: 32,
  maxLevels: 0,
  debug: false,
  connectorOffset: 5,
  orientation: ChartOrientation.Top,
} as OrbChartOptions;

export const DEFAULT_CHART_WIDTH = 600;
export const DEFAULT_CHART_HEIGHT = 600;

function createNodeInfo(unit: Unit, options: Partial<OrbChartOptions>): UnitNodeInfo {
  let symb: Symbol;
  const symbolOptions = { size: options.symbolSize };
  if (options.symbolGenerator) {
    symb = options.symbolGenerator(unit.sidc, symbolOptions);
  } else {
    symb = new Symbol(
      unit.sidc,
      symbolOptions,
      // {uniqueDesignation: node.shortName || node.name},
    );
  }
  const size: Size = symb.getSize();
  const anchor: Point = symb.getAnchor();
  const octagonAnchor: Point = symb.getOctagonAnchor();
  return {
    size, anchor, octagonAnchor, symb, unit: unit, x: 0, y: 0, ly: 0
  };
}

function putGroupAt(g: any, node: UnitNodeInfo, x: number, y: number) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return g.attr("transform", `translate(${dx}, ${dy})`);
}

function createUnitGroup(parent, unitNode: UnitNodeInfo, options: OrbChartOptions) {
  let rect;
  const g = parent.append("g")
    .attr("class", "o-unit");
  if (options.debug) {
    // put debug rect here so that it is drawn behind the unit symbol
    rect = g.append("rect")
      .classed("o-rect", true);
  }
  const g2 = g.append("g")
    .html(unitNode.symb.asSVG());
  g.append("text")
    .attr("x", unitNode.octagonAnchor.x)
    .attr("dy", "1.1em")
    .attr("y", unitNode.size.height)
    .attr("class", "o-label")
    .text(unitNode.unit.name);

  if (options.debug) {
    const bbox = g.node().getBBox();
    rect = rect
      .attr("x", bbox.x)
      .attr("y", bbox.y)
      .attr("width", bbox.width)
      .attr("height", bbox.height)
      .style("fill", "#ccc")
      .style("fill-opacity", ".3")
      .style("stroke", "#666")
      .style("stroke-width", "1.5px");
  }
  return g;
}

class OrbatChart {
  width!: number;
  height!: number;
  options: OrbChartOptions;
  levels: Array<UnitNodeInfo>[][] = [];
  svg;

  constructor(private rootNode: Unit, options: Partial<OrbChartOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    if (rootNode) this._computeOrbatInfo(rootNode);
  }

  cleanup() {
    // Remove event listeners
    if (this.svg) {
      let unitGroups = this.svg.selectAll("g.o-unit");
      unitGroups.on("click", null);
    }
  }

  toSVG(size: Partial<Size>, parent: Element): Element {
    this.width = size.width || DEFAULT_CHART_WIDTH;
    this.height = size.height || DEFAULT_CHART_HEIGHT;
    parent.innerHTML = "";
    const p = select(parent);
    const svg = p.append("svg");
    this.svg = svg;
    let options = this.options;
    // setup svg attributes
    svg.attr("viewBox", `0 0 ${this.width} ${this.height}`);
    svg.append("style").text(CHART_STYLE);
    svg.attr("width", "100%");
    svg.attr("height", "100%");

    if (options.debug) {
      const rect = svg.append("rect")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("y", "0")
        .attr("x", "0")
        .attr("width", this.width)
        .attr("height", this.height);
    }

    const nLevels = this.levels.length;
    this.levels.forEach((level, yIdx) => {
      if (options.maxLevels && yIdx >= options.maxLevels) {
        return;
      }
      const unitsOnLevel = level.reduce((acc, val) => acc.concat(val), []);
      const nUnitsOnLevel = unitsOnLevel.length;
      let xIdx = 0;
      level.forEach((unitLevelGroup, groupIdx) => {
        unitLevelGroup.forEach((unit) => {
          const x = ((xIdx + 1) * this.width) / (nUnitsOnLevel + 1);
          const y = this.height * ((yIdx + 1) / (nLevels + 1));
          unit.x = x;
          unit.y = y;
          const unitGroup = createUnitGroup(svg, unit, this.options);
          if (options.onClick) {
            unitGroup.on("click", (e) => {
              // @ts-ignore
              options.onClick(unit);
            });
          }
          const unitGroupBbox = unitGroup.node().getBBox();
          unit.ly = y + (unitGroupBbox.height - unit.octagonAnchor.y);
          if (this.options.orientation === ChartOrientation.Bottom) {
            putGroupAt(unitGroup, unit, x, this.height - y);
          } else {
            putGroupAt(unitGroup, unit, x, y);
          }

          if (unit.parent) {
            const dy = y - ((y - unit.parent.y) / 2);
            const d = `M ${x}, ${y - unit.octagonAnchor.y - options.connectorOffset} V ${dy}`;
            svg.append("path")
              .attr("d", d)
              .classed("o-line", true);
          }
          xIdx += 1;
        });
        let firstUnitInGroup = unitLevelGroup[0];
        let parentUnit = firstUnitInGroup.parent;
        if (!parentUnit) return;
        let lastUnitInGroup = unitLevelGroup[unitLevelGroup.length - 1];

        const dy = firstUnitInGroup.y - ((firstUnitInGroup.y - parentUnit.y) / 2);
        const d1 = `M ${parentUnit.x}, ${parentUnit.ly + options.connectorOffset} V ${dy}`;
        svg.append("path")
          .attr("d", d1)
          .classed("o-line", true);
        const d = `M ${firstUnitInGroup.x}, ${dy} H ${lastUnitInGroup.x}`;
        svg.append("path")
          .attr("d", d)
          .classed("o-line", true);
      });
    });

    return svg.node() as Element;
  }

  private _computeOrbatInfo(rootNode: Unit) {
    let levels: UnitNodeInfo[][] = [];
    const nodeMap = {};

    walkTree(rootNode, (unit, levelIdx, parent) => {
      const nodeInfo = createNodeInfo(unit, this.options);
      const level = levels[levelIdx] || [];
      if (parent) {
        nodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = nodeInfo;
      level.push(nodeInfo);
      levels[levelIdx] = level;
    });

    this.levels = _groupLevelsByParent();

    function _groupLevelsByParent(): UnitNodeInfo[][][] {
      let groupedLevels: UnitNodeInfo[][][] = [];
      levels.forEach((level, yIdx) => {
        let nlevel = level.reduce((accumulator: UnitNodeInfo[][], currentValue, currentIndex, array) => {
          if (currentIndex === 0) {
            accumulator.push([currentValue]);
            return accumulator;
          }
          if (array[currentIndex - 1].parent === currentValue.parent) {
            accumulator[accumulator.length - 1].push(currentValue);
            return accumulator
          }
          accumulator.push([currentValue]);
          return accumulator;
        }, []);
        groupedLevels[yIdx] = nlevel;
      });
      return groupedLevels;
    }
  }
}

export { OrbatChart };
