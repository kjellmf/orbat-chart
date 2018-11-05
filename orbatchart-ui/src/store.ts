import Vue from 'vue';
import Vuex from 'vuex';
import { Unit } from "orbatchart";

Vue.use(Vuex);

export interface State{
  orbat: Unit[];
  orbatPanel: boolean;
  currentUnit: Unit;
}

const state = <State>{
  orbat: [],
  orbatPanel: true,
  currentUnit: null,
};

export default new Vuex.Store({
  state,
  mutations: {
    setOrbatPanel(state, value) {
      state.orbatPanel = value;
    },

    setCurrentUnit(state, value) {
      state.currentUnit = value;
    },

    setOrbat(state, value:Unit[]) {
      state.orbat = value;
    }
  },
  actions: {},
});
