<template>
  <div>
    <v-tabs>
      <v-tab href="#tab-chart">Chart</v-tab>
      <v-tab href="#tab-level">Level</v-tab>
      <v-tab href="#tab-levelgroup">Level group</v-tab>
      <v-tab href="#tab-unit">Unit</v-tab>
      <v-tab-item>
        <div class="pa-3">
          <v-text-field
            :value="settings.maxLevels"
            @input="updateNum('maxLevels', $event)"
            type="number"
            label="Visible levels"
          />
          <v-text-field
            label="Symbol size"
            type="number" min="5"
            :value="settings.symbolSize"
            @input="updateNum('symbolSize', $event)"
          />
          <v-text-field
            label="Connector offset"
            type="number" min="0"
            :value="settings.connectorOffset"
            @input="updateNum('connectorOffset', $event)"
          />
          <v-text-field
            label="Level padding"
            type="number" min="0"
            :value="settings.levelPadding"
            @input="updateNum('levelPadding', $event)"
          />
          <v-text-field
            :disabled="noTreeOffset"
            label="Tree offset"
            type="number" min="0"
            :value="settings.treeOffset"
            @input="updateNum('treeOffset', $event)"
          />
          <v-text-field
            :disabled="noStackedTreeOffset"
            label="Stacked offset"
            type="number" min="0"
            :value="settings.stackedOffset"
            @input="updateNum('stackedOffset', $event)"
          />
          <v-select
            label="Unit spacing"
            :items="unitLevelDistance"
            :value="settings.unitLevelDistance"
            @input="updateVal('unitLevelDistance', $event)"
          />
          <!--<v-select
            disabled
            label="Chart orientation"
            :items="orientation"
            v-model="settings.orientation"
          />-->
          <v-select
            label="Last level layout"
            :items="lastLevelLayout"
            :value="settings.lastLevelLayout"
            @input="updateVal('lastLevelLayout', $event)"
          />

          <v-checkbox
            label="Debug mode"
            :value="settings.debug"
            @change="updateVal('debug', $event)"
          />
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-3"></div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-3"></div>
      </v-tab-item>
      <v-tab-item>
        <div class="pa-3">
          <SettingsUnit/>
        </div>
      </v-tab-item>
    </v-tabs>
  </div>
</template>
<script lang="ts">
import { ChartOrientation, LevelLayout, UnitLevelDistance, isTreeLayout, isStackedTreeLayout } from "orbatchart";
import { PanelMixins } from "@/components/mixins";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import SettingsUnit from "@/components/SettingsUnit.vue";

function getMap(myEnum) {
  return Object.entries(myEnum).map(([key, value]) => {
    return { text: key, value }
  });
}

@Component({
  components: { SettingsUnit }
})
export default class SettingsPanel extends mixins(PanelMixins) {
  get orientation() {
    return getMap(ChartOrientation);
  }

  get unitLevelDistance() {
    return getMap(UnitLevelDistance);
  }

  get lastLevelLayout() {
    return getMap(LevelLayout);
  }

  get noTreeOffset() {
    return !isTreeLayout(this.settings.lastLevelLayout);
  }

  get noStackedTreeOffset() {
    return !isStackedTreeLayout(this.settings.lastLevelLayout);
  }

  updateNum(prop, value) {
    this.$store.commit("updateChartOptions", { [prop]: +value });
  }

  updateVal(prop, value) {
    this.$store.commit("updateChartOptions", { [prop]: value });
  }
};

</script>
