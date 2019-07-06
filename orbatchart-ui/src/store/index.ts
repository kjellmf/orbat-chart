import Vue from 'vue';
import Vuex from 'vuex';
import ui, { UIState } from './ui-module';
import orbat, { OrbatState } from "@/store/orbat-module";
import chart, { ChartState } from "@/store/chart-module";

Vue.use(Vuex);

export interface RootState {
  ui: UIState;
  orbat: OrbatState;
  chart: ChartState;
}

export default new Vuex.Store<RootState>({
  modules: { ui, orbat, chart },
});
