import Vue from 'vue';
import Component from 'vue-class-component'

@Component
export class PanelMixins extends Vue {

  get orbatPanel() {
    return this.$store.state.orbatPanel;
  }

  set orbatPanel(v) {
    this.$store.commit("setOrbatPanel", v);
  }
}
