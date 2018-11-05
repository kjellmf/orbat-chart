<template>
  <v-layout fill-height>
    <v-flex class="panel" style="z-index:3">
      <SlidePanel v-model="orbatPanel" header-title='ORBAT' @onSlide="onSlide">
        <OrbatTree :rootUnits="orbat" @selectunit="onSelectUnit"/>
      </SlidePanel>
    </v-flex>
    <v-flex class="panel" style="z-index:2">
      <SlidePanel v-model="settingsPanel" header-title='Settings'>
        <v-container fluid>
          <v-text-field
            v-model.number="settings.maxLevels"
            type="number"
            label="Levels"
          />
          <v-text-field

        label="Symbol size"
        type="number" min="5"
        v-model.number="settings.symbolSize"
      />
          <v-checkbox
            label="Debug"
            v-model="settings.debug"
          />
        </v-container>
      </SlidePanel>
    </v-flex>
    <v-flex>
      <OrbatChart
        :unit="currentUnit"
        class="px-0 py-0 home"
        @unitclick="onUnitClick"
        :levels="settings.maxLevels"
        :debug="settings.debug"
         :symbolSize="settings.symbolSize"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';

import OrbatChart from "../components/OrbatChart.vue";
import SlidePanel from "../components/SlidePanel.vue";
import MilSymbol from "../components/MilSymbol.vue";
import { OrbChartOptions, Unit } from "orbatchart";

import OrbatTree from "../components/OrbatTree.vue";
import { PanelMixins } from "../components/mixins";

@Component({
  components: {
    OrbatTree,
    OrbatChart,
    SlidePanel,
    MilSymbol,
  },
  mixins: [PanelMixins],
})
export default class MainView extends mixins(PanelMixins) {
  created() {
    this.currentUnit = this.orbat[0]
  }

  get orbat(): Unit[] {
    return this.$store.state.orbat;
  }

  get currentUnit(): Unit {
    return this.$store.state.currentUnit;
  }

  get settings(): OrbChartOptions {
    return this.$store.state.chartOptions;
  }

  set currentUnit(unit: Unit) {
    this.$store.commit("setCurrentUnit", unit)
  }

  onSlide() {
    //console.log("Slick'n slide")
  };


  onUnitClick(unit) {
    console.log("Clicked", unit.node.name);
  }

  onSelectUnit(unit: Unit) {
    this.currentUnit = unit;
  }
}

</script>

<style scoped>
  .home {
    overflow-y: auto;
  }
</style>
