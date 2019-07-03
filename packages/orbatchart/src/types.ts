import { Symbol, SymbolOptions } from "milsymbol";
import { Selection } from "d3-selection";

export type SVGElementSelection = Selection<SVGElement, any, any, any>;
export type GElementSelection = Selection<SVGGElement, any, any, any>;
export type RectElementSelection = Selection<SVGRectElement, any, any, any>;

export interface DataMap<T> {
  [key: string]: T;

  [key: number]: T;
}

interface LevelMap {
  [key: number]: PartialOptions;
}


export enum ChartOrientation {
  Top = "TOP",
  Bottom = "BOTTOM",
  // Left = "LEFT",
  // Right = "RIGHT"
}

/**
 * Different ways to place units
 */
export enum LevelLayout {
  Horizontal = "HORIZONTAL",
  Stacked = "STACKED",
  Tree = "TREE",
  TreeLeft = "TREE_LEFT",
  TreeRight = "TREE_RIGHT",
}

export enum UnitLevelDistance {
  Fixed = "FIXED",
  EqualPadding = "EQUAL_PADDING"
}

export enum VerticalAlignment {
  Top = "TOP",
  Middle = "MIDDLE",
  Bottom = "BOTTOM"
}

export interface Size {
  width: number;
  height: number
}

export interface Point {
  x: number;
  y: number;
}

export interface BasicUnitNode {
  unit: Unit;
  parent?: BasicUnitNode;
}

export interface UnitNodeInfo extends BasicUnitNode {
  symbolBoxSize: Size;
  anchor: Point;
  octagonAnchor: Point;
  symb: Symbol;
  x: number;
  y: number;
  parent?: UnitNodeInfo;
  unit: Unit;
  ly: number;
  lx: number;
  rx: number;
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
  lastLevelLayout: LevelLayout;
  verticalAlignment: VerticalAlignment;
  levelPadding: number;
  treeOffset: number;
  stackedOffset: number;
}

export type PartialOptions = Partial<OrbChartOptions>;

export interface SpecificOptions {
  level?: LevelMap;
  levelGroup?: DataMap<PartialOptions>;
  unit?: DataMap<PartialOptions>;
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
  unitGroups: RenderedLevelGroup[];
  options: Partial<OrbChartOptions>;
}

export interface RenderedLevelGroup extends RenderedElement {
  units: RenderedUnitNode[];
  options: Partial<OrbChartOptions>;
}

export interface RenderedUnitNode extends RenderedElement, UnitNodeInfo {
  boundingBox: DOMRect;
  parent?: RenderedUnitNode;
  options: Partial<OrbChartOptions>;
}
