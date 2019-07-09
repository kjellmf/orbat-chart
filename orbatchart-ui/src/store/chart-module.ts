import { GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import {
  DEFAULT_OPTIONS, LevelGroupSpecificOptions,
  LevelLayout, LevelSpecificOptions,
  OrbChartOptions, PartialOrbChartOptions,
  SpecificOptions, UnitSpcificOptions
} from "orbatchart";

export interface ChartState {
  chartOptions: PartialOrbChartOptions;
  levelOptions: LevelSpecificOptions;
  levelGroupOptions: LevelGroupSpecificOptions;
  unitOptions: UnitSpcificOptions;
}

const state: ChartState = {
  chartOptions: {
    ...DEFAULT_OPTIONS,
    maxLevels: 4,
    lastLevelLayout: LevelLayout.TreeRight
  },
  levelGroupOptions: {},
  levelOptions: {},
  unitOptions: {}
  /*
  levelOptions: { 1: { symbolSize: 50, debug: true, connectorOffset: 33 } },
  levelGroupOptions: { "u0xGEGuOLzIcIirsioK0h": { symbolSize: 20, treeOffset: 120, connectorOffset: 20, debug: true } },
  unitOptions: {
    "u0xGEGuOLzIcIirsioK0h": { symbolSize: 40 },
    "bJewqRWgkcxt3Lt53sz_c": { treeOffset: 60, symbolSize: 30, connectorOffset: 40 }
  }

   */
};

const mutations: MutationTree<ChartState> = {
  setChartOptions(state, value) {
    state.chartOptions = value;
  },

};

const getters: GetterTree<ChartState, RootState> = {
  specificOptions: (state): SpecificOptions => {
    return { level: state.levelOptions, levelGroup: state.levelGroupOptions, unit: state.unitOptions }
  }
};

export default {
  state,
  mutations,
  getters
} as Module<ChartState, RootState>;


