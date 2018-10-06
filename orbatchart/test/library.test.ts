import { DEFAULT_OPTIONS, OrbatChart } from "../src/orbchart";

describe("OrbatChart class", () => {
  it("is defined", () => {
    expect(OrbatChart).toBeDefined();
  });
});

describe("OrbatChart options", () => {
  it("has default values", () => {
    let ob = new OrbatChart(null);
    expect(ob.options).toBeDefined();
    expect(ob.options.symbolSize).toBe(DEFAULT_OPTIONS.symbolSize);
    expect(ob.options.connectorOffset).toBe(DEFAULT_OPTIONS.connectorOffset);
    expect(ob.options.maxLevels).toBe(DEFAULT_OPTIONS.maxLevels);
    expect(ob.options.onClick).toBeUndefined();
  });

  it("override default values", () => {
    let ob = new OrbatChart(null,{symbolSize:13, maxLevels:4});
    expect(ob.options.symbolSize).toBe(13);
    expect(ob.options.connectorOffset).toBe(DEFAULT_OPTIONS.connectorOffset);
    expect(ob.options.maxLevels).toBe(4);
  });

});
