import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import { ChartItemType } from "orbatchart";

export interface UIState {
  orbatPanel: boolean;
  settingsPanel: boolean;
  interactiveChart: boolean;
  activeSettingsPanel: number;
  highlightedLevels: number[];
  highlightedLevelGroups: string[] | number[];
  selectedUnitId: string | number | null;
  selectedLevelIndex: number;
  selectedLevelGroupId: string | number | null;
}

const state: UIState = {
  orbatPanel: true,
  settingsPanel: true,
  interactiveChart: true,
  activeSettingsPanel: 0,
  highlightedLevels: [],
  highlightedLevelGroups: [],
  selectedUnitId: null,
  selectedLevelIndex: -1,
  selectedLevelGroupId: null
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
  },

  clearSelectedChartItem(state) {
    state.selectedLevelGroupId = null;
    state.selectedLevelGroupId = null;
    state.selectedLevelIndex = -1;
  },

  setSelectedUnitId(state, value) {
    state.selectedUnitId = value;
  },

  setSelectedLevelGroupId(state, value) {
    state.selectedLevelGroupId = value;
  },

  setSelectedLevelIndex(state, value) {
    state.selectedLevelIndex = value;
  }
};

const actions: ActionTree<UIState, RootState> = {
  selectChartItem({ state, commit }, { itemType, id }: { itemType: ChartItemType, id: string | number }) {
    commit("clearSelectedChartItem");
    switch (itemType) {
      case ChartItemType.Level:
        commit("setSelectedLevelIndex", id);
        break;
      case ChartItemType.LevelGroup:
        commit("setSelectedLevelGroupId", id);
        break;
      case ChartItemType.Unit:
        commit("setSelectedUnitId", id);
        break;
    }
  }
};

const getters: GetterTree<UIState, RootState> = {};

export default {
  state,
  mutations,
  getters,
  actions
} as Module<UIState, RootState>;


