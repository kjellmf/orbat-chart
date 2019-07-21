<template>
  <v-layout fill-height>
    <v-flex class="panel" style="z-index:3">
      <SlidePanel v-model="orbatPanel" header-title='ORBAT' @onSlide="onSlide">
        <OrbatTree :rootUnits="orbat" @selectunit="onSelectUnit"/>
      </SlidePanel>
    </v-flex>
    <v-flex class="panel" style="z-index:2">
      <SlidePanel v-model="settingsPanel" header-title='Settings'>
        <SettingsPanel/>
      </SlidePanel>
    </v-flex>
    <v-flex class="chart-panel">
      <OrbatChart
        :unit="currentUnit"
        class="px-0 py-0 home"
        @unitclick="onUnitClick"
        @levelclick="onLevelClick"
        @levelgroupclick="onLevelGroupClick"
        v-bind="settings"
        :specificOptions="specificOptions"
        :interactive="interactiveChart"
        :highlightedLevels="highlightedLevels"
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
import { ChartOrientation, OrbChartOptions, SpecificOptions, Unit } from "orbatchart";

import OrbatTree from "@/components/OrbatTree.vue";
import { PanelMixins, SettingsPanelMixins } from "@/components/mixins";
import SettingsPanel from "@/components/SettingsPanel.vue";
import { EventBus, LEVEL_CLICK, LEVELGROUP_CLICK, UNIT_CLICK } from "@/eventbus";

@Component({
  components: {
    SettingsPanel,
    OrbatTree,
    OrbatChart,
    SlidePanel,
    MilSymbol,
  },
})
export default class MainView extends mixins(PanelMixins, SettingsPanelMixins) {
  created() {
    this.currentUnit = this.orbat[0];
  }

  get orbat(): Unit[] {
    return this.$store.state.orbat.rootUnits;
  }

  get currentUnit(): Unit {
    return this.$store.getters.currentUnit;
  }

  set currentUnit(unit: Unit) {
    this.$store.commit("setCurrentUnit", unit)
  }

  get specificOptions(): SpecificOptions {
    return this.$store.getters.specificOptions;
  }

  onSlide() {
    //console.log("Slick'n slide")
  };


  onUnitClick(unit) {
    console.log("Clicked", unit.unit.name);
  };

  onLevelClick(levelNumber) {
    EventBus.$emit(LEVEL_CLICK, levelNumber);
  };

  onLevelGroupClick(id) {
    EventBus.$emit(LEVELGROUP_CLICK, id);
  }

  onSelectUnit(unit: Unit) {
    EventBus.$emit(UNIT_CLICK, unit);
    this.currentUnit = unit;
  }
}

</script>

<style scoped>
.home {
  overflow-y: auto;
}

.chart-panel {
  max-height: 100vh;
  overflow: auto;
}
</style>
