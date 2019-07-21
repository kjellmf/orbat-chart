import { Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";

export interface UIState {
  orbatPanel: boolean;
  settingsPanel: boolean;
  interactiveChart: boolean;
  activeSettingsPanel: number;
  highlightedLevels: number[];
  highlightedLevelGroups: string[] | number[];
}

const state: UIState = {
  orbatPanel: true,
  settingsPanel: true,
  interactiveChart: true,
  activeSettingsPanel: 0,
  highlightedLevels: [],
  highlightedLevelGroups: [],
};

const mutations: MutationTree<UIState> = {
  setOrbatPanel(state, value) {
    state.orbatPanel = value;
  },

  setSettingsPanel(state, value) {
    state.settingsPanel = value;
  },

  setInteractiveChart(state, value) {
    state.interactiveChart = value;
  },

  setActiveSettingsPanel(state, value) {
    state.activeSettingsPanel = value;
  },

  setHighlightedLevels(state, value) {
    state.highlightedLevels = value;
  },

  setHighligtedLevelGroups(state, value) {
    state.highlightedLevelGroups = value;
  }
};

export default {
  state,
  mutations
} as Module<UIState, RootState>;


