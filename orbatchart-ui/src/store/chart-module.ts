import { GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import { DEFAULT_OPTIONS, LevelLayout, OrbChartOptions } from "orbatchart";

export interface ChartState {
  chartOptions: Partial<OrbChartOptions>;
}

const state: ChartState = {
  chartOptions: {
    ...DEFAULT_OPTIONS,
    maxLevels: 4,
    lastLevelLayout: LevelLayout.TreeRight
  }
};

const mutations: MutationTree<ChartState> = {
  setChartOptions(state, value) {
    state.chartOptions = value;
  }
};

const getters: GetterTree<ChartState, RootState> = {};

export default {
  state,
  mutations,
  getters
} as Module<ChartState, RootState>;


