import {Symbol} from 'milsymbol';
import { DEFAULT_OPTIONS, OrbatChart } from "../src/orbchart";
import { Unit } from "../src/types";

describe("OrbatChart class", () => {
  it("is defined", () => {
    expect(OrbatChart).toBeDefined();
  });
});

const DUMMY_UNIT: Unit = {
  name: "Unit A",
  id: "1",
  sidc: "10031000151211000000",
  subUnits: []
};

describe("OrbatChart options", () => {
  it("has default values", () => {
    let ob = new OrbatChart(DUMMY_UNIT);
    expect(ob.options).toBeDefined();
    expect(ob.options.symbolSize).toBe(DEFAULT_OPTIONS.symbolSize);
    expect(ob.options.connectorOffset).toBe(DEFAULT_OPTIONS.connectorOffset);
    expect(ob.options.maxLevels).toBe(DEFAULT_OPTIONS.maxLevels);
    expect(ob.options.onClick).toBeUndefined();
  });

  it("override default values", () => {
    let ob = new OrbatChart(DUMMY_UNIT,{symbolSize:13, maxLevels:4});
    expect(ob.options.symbolSize).toBe(13);
    expect(ob.options.connectorOffset).toBe(DEFAULT_OPTIONS.connectorOffset);
    expect(ob.options.maxLevels).toBe(4);
  });

});
