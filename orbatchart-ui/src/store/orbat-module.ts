import { GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import { Unit } from "orbatchart";

export interface OrbatState {
  rootUnits: Unit[];
  currentUnit: Unit | null;
}

const state: OrbatState = {
  rootUnits: [],
  currentUnit: null,
};

const mutations: MutationTree<OrbatState> = {
  setCurrentUnit(state, value) {
    state.currentUnit = value;
  },

  setOrbat(state, value: Unit[]) {
    state.rootUnits = value;
  },
};

const getters: GetterTree<OrbatState, RootState> = {
  currentUnit: state => {
    return state.currentUnit;
  }
};

export default {
  state,
  mutations,
  getters
} as Module<OrbatState, RootState>;


