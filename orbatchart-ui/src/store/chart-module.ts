import { GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import {
  DEFAULT_OPTIONS, LevelGroupSpecificOptions,
  LevelLayout, LevelSpecificOptions,
  OrbChartOptions, PartialOrbChartOptions,
  SpecificOptions, UnitSpecificOptions
} from "orbatchart";
import Vue from "vue";

export interface ChartState {
  chartOptions: PartialOrbChartOptions;
  levelOptions: LevelSpecificOptions;
  levelGroupOptions: LevelGroupSpecificOptions;
  unitOptions: UnitSpecificOptions;
}

const state: ChartState = {
  chartOptions: {
    ...DEFAULT_OPTIONS,
    maxLevels: 4,
    lastLevelLayout: LevelLayout.TreeRight
  },
  levelGroupOptions: {},
  levelOptions: {
    3: { levelPadding: 10, symbolSize: 25 },
    2: { symbolSize: 40 },
    1: { symbolSize: 40 }
  },
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

function mapHelper(entity: any, id, data: any) {
  const oldObj = entity[id] || {};
  const newObj = Object.assign({}, oldObj, data);
  Vue.set(entity, id, newObj);
}


const mutations: MutationTree<ChartState> = {
  setChartOptions(state, value) {
    state.chartOptions = value;
  },

  updateChartOptions(state, value: PartialOrbChartOptions) {
    state.chartOptions = Object.assign({}, state.chartOptions, value);
  },

  setLevelOptions(state, value: LevelSpecificOptions) {
    state.levelOptions = value;
  },

  setLevelGroupOptions(state, value: LevelGroupSpecificOptions) {
    state.levelGroupOptions = value;
  },

  setUnitOptions(state, value: UnitSpecificOptions) {
    state.unitOptions = value;
  },

  updateLevelOptions(state, { id, value }) {
    Vue.set(state.levelOptions, id, value);
    //mapHelper(state.levelOptions, id, value)
  },

  updateLevelGroupOptions(state, { id, value }) {
    mapHelper(state.levelGroupOptions, id, value)
  },

  updateUnitOptions(state, { id, value }) {
    mapHelper(state.unitOptions, id, value)
  },

  clearLevelOptions(state, id) {
    Vue.delete(state.levelOptions, id);
  }

};

const getters: GetterTree<ChartState, RootState> = {
  specificOptions: (state): SpecificOptions => {
    return { level: state.levelOptions, levelGroup: state.levelGroupOptions, unit: state.unitOptions }
  },

  levels: (state) => Object.keys(state.levelOptions)
};

export default {
  state,
  mutations,
  getters
} as Module<ChartState, RootState>;


