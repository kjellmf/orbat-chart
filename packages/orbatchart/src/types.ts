import { Symbol, SymbolOptions } from "milsymbol";
import { Selection } from "d3-selection";

export type SVGElementSelection = Selection<SVGElement, any, any, any>;
export type GElementSelection = Selection<SVGGElement, any, any, any>;
export type RectElementSelection = Selection<SVGRectElement, any, any, any>;

export enum ChartOrientation {
  Top = "TOP",
  Bottom = "BOTTOM",
  // Left = "LEFT",
  // Right = "RIGHT"
}

export enum UnitLevelDistance {
  Fixed = "FIXED",
  EqualPadding = "EQUAL_PADDING"
}

export interface Size {
  width: number;
  height: number
}

export interface Point {
  x: number;
  y: number;
}

export interface UnitNodeInfo {
  symbolBoxSize: Size;
  anchor: Point;
  octagonAnchor: Point;
  symb: Symbol;
  x: number;
  y: number;
  parent?: UnitNodeInfo;
  unit: Unit;
  ly: number;
}

export type OnClickCallback = (unit: Unit) => void;
export type SymbolGenerator = (sidc: string, options: SymbolOptions) => Symbol;

export interface OrbChartOptions {
  symbolSize: number;
  maxLevels: number;
  debug: boolean;
  onClick: OnClickCallback;
  connectorOffset: number;
  symbolGenerator: SymbolGenerator;
  orientation: ChartOrientation;
  unitLevelDistance: UnitLevelDistance;
}

export type UnitNodeVisitorCallback = (unit: Unit, level: number, parent: Unit | null) => void

export interface Unit {
  name: string;
  sidc: string;
  shortName?: string;
  subUnits?: Unit[];
  id: string;
}

export interface RenderedElement {
  groupElement: GElementSelection;
}

export interface RenderedChart extends RenderedElement {
  levels: RenderedLevel[];
}

export interface RenderedLevel extends RenderedElement {
  unitGroups: RenderedLevelGroup[]
}

export interface RenderedLevelGroup extends RenderedElement {
  units: RenderedUnitNode[]
}

export interface RenderedUnitNode extends RenderedElement, UnitNodeInfo {
  boundingBox: DOMRect;
  parent?: RenderedUnitNode;
}
