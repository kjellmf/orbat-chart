import { GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "@/store/index";
import { Unit } from "orbatchart";
import { walkTree } from "@/orbatchart/utils";

export interface OrbatState {
  rootUnits: Unit[];
  currentUnit: Unit | null;
}

const state: OrbatState = {
  rootUnits: [],
  currentUnit: null,
};

function createUnitMap(state: OrbatState) {
  let unitMap = {};
  state.rootUnits.forEach(rootUnit => {
    walkTree(rootUnit, unit => {
      unitMap[unit.id] = {id:unit.id, name: unit.name, sidc: unit.sidc};
    })
  });
  return unitMap;
}

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
  },

  unitMap: state => {
    // Todo: Normalize the ORBAT data
    return createUnitMap(state);
  }
};

export default {
  state,
  mutations,
  getters
} as Module<OrbatState, RootState>;


