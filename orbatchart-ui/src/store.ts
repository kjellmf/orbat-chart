import Vue from 'vue';
import Vuex from 'vuex';
import { OrbChartOptions, Unit } from "orbatchart";
import { DEFAULT_OPTIONS } from "orbatchart";

Vue.use(Vuex);

export interface State {
  orbat: Unit[];
  orbatPanel: boolean;
  settingsPanel: boolean;
  currentUnit: Unit;
  chartOptions: Partial<OrbChartOptions>;
}

const state = <State>{
  orbat: [],
  orbatPanel: true,
  settingsPanel: true,
  currentUnit: null,
  chartOptions: { ...DEFAULT_OPTIONS, maxLevels:3 }
};

export default new Vuex.Store({
  state,
  mutations: {
    setOrbatPanel(state, value) {
      state.orbatPanel = value;
    },

    setSettingsPanel(state, value) {
      state.settingsPanel = value;
    },

    setCurrentUnit(state, value) {
      state.currentUnit = value;
    },

    setOrbat(state, value: Unit[]) {
      state.orbat = value;
    },

    setChartOptions(state, value) {
      state.chartOptions = value;
    }

  },
  actions: {},
});
