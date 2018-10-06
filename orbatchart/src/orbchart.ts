import { Symbol } from "milsymbol";
import { select } from "d3-selection";
import { walkTree } from "./utils";
import { OrbChartOptions, Size, Unit } from "./types";

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
  symbolSize: 32, // symbol symbolSize
  maxLevels: 0,
  debug: false,
  connectorOffset: 5,
} as OrbChartOptions;

function getNodeInfo(node: Unit, options: Partial<OrbChartOptions>) {
  const symb = new Symbol(
    node.sidc,
    { size: options.symbolSize },
    // {uniqueDesignation: node.shortName || node.name},
  );
  const size = symb.getSize();
  const anchor = symb.getAnchor();
  const octagonAnchor = symb.getOctagonAnchor();
  return {
    size, anchor, octagonAnchor, symb, x: null, y: null, parent: null, node,
  };
}

function putGroupAt(g: any, node: any, x: number, y: number) {
  const dx = x - node.octagonAnchor.x;
  const dy = y - node.octagonAnchor.y;
  return g.attr("transform", `translate(${dx}, ${dy})`);

}

function createUnitGroup(parent, node, options) {
  const g = parent.append("g")
    .attr("class", "o-unit");
  let rect = g.append("rect")
    .classed("o-rect", true);
  const g2 = g.append("g")
    .html(node.symb.asSVG());
  g.append("text")
    .attr("x", node.octagonAnchor.x)
    .attr("dy", "1.1em")
    .attr("y", node.size.height)
    .attr("class", "o-label")
    .text(node.node.name);
  const bbox = g.node().getBBox();
  if (options.debug) {
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
  levels: Array<any>[] = [];
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

  toSVG(size: Partial<Size>, parent: Element): Element  {
    this.width = size.width || 600;
    this.height = size.height || 600;
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

    // for debugging only
    const rect = svg.append("rect")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("y", "0")
      .attr("x", "0")
      .attr("width", this.width)
      .attr("height", this.height);

    const nLevels = this.levels.length;
    this.levels.forEach((level, yIdx) => {
      if (options.maxLevels && yIdx >= options.maxLevels) {
        return;
      }
      let flattenLevel = level.reduce((acc, val) => acc.concat(val), []);
      const nUnitsOnLevel = flattenLevel.length;
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
          putGroupAt(unitGroup, unit, x, y);

          if (unit.parent) {
            const dx = x - unit.parent.x;
            const dy = y - ((y - unit.parent.y) / 2);
            const d = `M ${x}, ${y - unit.octagonAnchor.y - options.connectorOffset} V ${dy}`;
            svg.append("path")
              .attr("d", d)
              .classed("o-line", true);
          }

          /*if (unit.parent) {
            const dx = x - unit.parent.x;
            const dy = y - ((y - unit.parent.y) / 2);
            const d = `M ${x}, ${y - unit.octagonAnchor.y - options.connectorOffset} V ${dy} H ${unit.parent.x} V ${unit.parent.ly + options.connectorOffset}`;
            svg.append("path")
              .attr("d", d)
              .classed("o-line", true);
          }*/
          xIdx += 1;


        });
        let first = unitLevelGroup[0];
        if (!first.parent) return;
        let parent = first.parent;
        let last = unitLevelGroup[unitLevelGroup.length - 1];

        // const dx = x - unit.parent.x;
        const dy = first.y - ((first.y - parent.y) / 2);
        const d1 = `M ${parent.x}, ${parent.ly + options.connectorOffset} V ${dy}`;
        svg.append("path")
          .attr("d", d1)
          .classed("o-line", true);
        const d = `M ${first.x}, ${dy} H ${last.x}`;
        svg.append("path")
          .attr("d", d)
          .classed("o-line", true);


      });
    });

    return svg.node() as Element;
  }

  private _computeOrbatInfo(rootNode: Unit) {
    let levels: Array<any>[] = [];
    const nodeMap = {};

    walkTree(rootNode, (unit, level, parent) => {
      const nodeInfo = getNodeInfo(unit, this.options);
      const ld = levels[level] || [];
      if (parent) {
        nodeInfo.parent = nodeMap[parent.id];
      }
      nodeMap[unit.id] = nodeInfo;
      ld.push(nodeInfo);
      levels[level] = ld;
    });

    // group each level by parent
    levels.forEach((level, yIdx) => {
      let nlevel = level.reduce((accumulator, currentValue, currentIndex, array) => {
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

      levels[yIdx] = nlevel
    });
    this.levels = levels;
  }
}

export { OrbatChart };

