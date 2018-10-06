export interface Size {
  width: number;
  height: number
}

export type OnClickCallback = (unit: any) => void;

export interface OrbChartOptions {
  symbolSize: number;
  maxLevels: number;
  debug: boolean;
  onClick: OnClickCallback;
  connectorOffset: number;
}

export type UnitNodeVisitorCallback = (unit: any, level: number, parent: any | null) => void
