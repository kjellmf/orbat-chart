<template>
  <v-layout fill-height>
    <v-flex class="panel" style="z-index:3">
      <slide-panel v-model="orbatPanel" header-title='ORBAT' @onSlide="onSlide">
      </slide-panel>
    </v-flex>
    <v-flex>
      <orbat-chart :unit="orbat" class="px-0 py-0 home" @unitclick="onUnitClick"/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import OrbatChart from "../components/OrbatChart.vue";
import SlidePanel from "../components/SlidePanel.vue";
import {Unit} from "orbatchart";
import testOrbat from "../testorbat.json";

const ORBAT1: Unit = testOrbat;

@Component({
  components: {
    OrbatChart,
    SlidePanel
  },
})
export default class MainView extends Vue {
  orbat:Unit = ORBAT1;
  orbatPanel = true;
  onSlide() {
    //console.log("Slick'n slide")
  };

  onUnitClick(unit) {
    console.log("Clikked", unit)
  }



}
</script>

<style scoped>
.home {
  overflow-y: auto;
}
</style>
