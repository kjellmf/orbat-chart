import { Symbol } from "milsymbol";
import { select, Selection } from "d3-selection";
import { walkTree } from "./utils";
import { ChartOrientation, UnitNodeInfo, OrbChartOptions, Point, Size, Unit, BBoxUnitNodeInfo } from "./types";

type SVGElementSelection = Selection<SVGElement, any, any, any>;

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

function createUnitNodeInfo(unit: Unit, options: Partial<OrbChartOptions>): UnitNodeInfo {
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
    symbolBoxSize: size, anchor, octagonAnchor, symb, unit: unit, x: 0, y: 0, ly: 0
  };
}

function putGroupAt(g: any, node: UnitNodeInfo, x: number, y: number) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return g.attr("transform", `translate(${dx}, ${dy})`);
}

function createUnitGroup(parentElement, unitNode: UnitNodeInfo, options: OrbChartOptions) {
  let rect;
  const g = parentElement.append("g")
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
    .attr("y", unitNode.symbolBoxSize.height)
    .attr("class", "o-label")
    .text(unitNode.unit.name);
  let bbUnitNode = <BBoxUnitNodeInfo>unitNode;
  bbUnitNode.bbox = g.node().getBBox();
  if (options.debug) {
    let bbox = bbUnitNode.bbox;
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
  return { unitGroup: g, bbUnitNode };
}

class OrbatChart {
  width!: number;
  height!: number;
  options: OrbChartOptions;
  groupedLevels: UnitNodeInfo[][][] = [];
  svg!: SVGElementSelection;

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

  toSVG(size: Partial<Size>, parent: HTMLElement): Element {
    this.width = size.width || DEFAULT_CHART_WIDTH;
    this.height = size.height || DEFAULT_CHART_HEIGHT;
    parent.innerHTML = "";
    const p = select(parent);
    const svg = p.append<SVGElement>("svg");
    this.svg = svg;
    let options = this.options;

    this._setupSvgElement(svg);
    const numberOfLevels = this.groupedLevels.length;
    this.groupedLevels.forEach((currentLevel, yIdx) => {
      if (options.maxLevels && yIdx >= options.maxLevels) {
        return;
      }
      const unitsOnLevel = currentLevel.reduce((acc, val) => acc.concat(val), []);
      const numberOfUnitsOnLevel = unitsOnLevel.length;
      let xIdx = 0;
      currentLevel.forEach((unitLevelGroup, groupIdx) => {
        unitLevelGroup.forEach((unit) => {
          const x = ((xIdx + 1) * this.width) / (numberOfUnitsOnLevel + 1);
          const y = this.height * ((yIdx + 1) / (numberOfLevels + 1));
          unit.x = x;
          unit.y = y;
          const { unitGroup, bbUnitNode } = createUnitGroup(svg, unit, this.options);
          if (options.onClick) {
            unitGroup.on("click", (e) => {
              // @ts-ignore
              options.onClick(unit);
            });
          }
          const unitGroupBbox = bbUnitNode.bbox;
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

  private _setupSvgElement(svg: SVGElementSelection) {
    svg.attr("viewBox", `0 0 ${this.width} ${this.height}`);
    svg.append("style").text(CHART_STYLE);
    svg.attr("width", "100%");
    svg.attr("height", "100%");
    if (this.options.debug) {
      const rect = svg.append("rect")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("y", "0")
        .attr("x", "0")
        .attr("width", this.width)
        .attr("height", this.height);
    }
  }

  private _computeOrbatInfo(rootNode: Unit) {
    let levels: UnitNodeInfo[][] = [];
    const nodeMap = {};

    walkTree(rootNode, (unit, levelIdx, parent) => {
      const unitNodeInfo = createUnitNodeInfo(unit, this.options);
      const currentLevel = levels[levelIdx] || [];
      if (parent) {
        unitNodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = unitNodeInfo;
      currentLevel.push(unitNodeInfo);
      levels[levelIdx] = currentLevel;
    });

    this.groupedLevels = _groupLevelsByParent();

    function _groupLevelsByParent(): UnitNodeInfo[][][] {
      let groupedLevels: UnitNodeInfo[][][] = [];
      levels.forEach((level, yIdx) => {
        let groupedLevel = level.reduce((accumulator: UnitNodeInfo[][], currentValue, currentIndex, array) => {
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
        groupedLevels[yIdx] = groupedLevel;
      });
      return groupedLevels;
    }
  }
}

export { OrbatChart };
