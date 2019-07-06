import Vue from 'vue';
import Component from 'vue-class-component'
import { OrbChartOptions } from "orbatchart";

@Component
export class PanelMixins extends Vue {

  get orbatPanel() {
    return this.$store.state.ui.orbatPanel;
  }

  set orbatPanel(v) {
    this.$store.commit("setOrbatPanel", v);
  }

  get settingsPanel() {
    return this.$store.state.ui.settingsPanel;
  }

  set settingsPanel(v) {
    this.$store.commit("setSettingsPanel", v);
  }

  get settings(): OrbChartOptions {
    return this.$store.state.chart.chartOptions;
  }
}
