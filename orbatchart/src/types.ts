export interface Size {
  width: number;
  height: number
}

export type OnClickCallback = (unit: Unit) => void;

export interface OrbChartOptions {
  symbolSize: number;
  maxLevels: number;
  debug: boolean;
  onClick: OnClickCallback;
  connectorOffset: number;
}

export type UnitNodeVisitorCallback = (unit: Unit, level: number, parent: Unit | null) => void

export interface Unit {
  name: string;
  sidc: string;
  shortName?: string;
  subUnits?: Unit[];
  id:string;
}
