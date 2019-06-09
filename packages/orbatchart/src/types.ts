import { Symbol, SymbolOptions } from "milsymbol";

export enum ChartOrientation {
  Top = "TOP",
  Bottom = "BOTTOM",
  // Left = "LEFT",
  // Right = "RIGHT"
}

export interface Size {
  width: number;
  height: number
}

export interface Point {
  x: number;
  y: number;
}

export interface NodeInfo {
  size: Size;
  anchor: Point;
  octagonAnchor: Point;
  symb: Symbol;
  x: number;
  y: number;
  parent?: NodeInfo;
  node: Unit;
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
}

export type UnitNodeVisitorCallback = (unit: Unit, level: number, parent: Unit | null) => void

export interface Unit {
  name: string;
  sidc: string;
  shortName?: string;
  subUnits?: Unit[];
  id: string;
}
