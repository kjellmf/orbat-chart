<template>
  <v-tabs v-model="activeSettingsPanel">
    <v-tab href="#">Chart</v-tab>
    <v-tab href="#">Level</v-tab>
    <v-tab href="#">Group</v-tab>
    <v-tab href="#">Unit</v-tab>
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
        <v-text-field
          label="Line width"
          type="number" min="0"
          :value="settings.lineWidth"
          @input="updateNum('lineWidth', $event)"
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

        <v-checkbox
          label="Select mode"
          v-model="interactiveChart"
        />
      </div>
    </v-tab-item>
    <v-tab-item eager>
      <div class="pa-3">
        <SettingsLevel/>
      </div>
    </v-tab-item>
    <v-tab-item eager>
      <div class="pa-3">
        <SettingsLevelGroup/>
      </div>
    </v-tab-item>
    <v-tab-item eager>
      <div class="pa-3">
        <SettingsUnit/>
      </div>
    </v-tab-item>
  </v-tabs>
</template>
<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { ChartOrientation, isStackedTreeLayout, isTreeLayout, LevelLayout, UnitLevelDistance } from "orbatchart";
import { PanelMixins, SettingsPanelMixins } from "@/components/mixins";
import { getEnumMap } from "@/utils";
import SettingsUnit from "@/components/SettingsUnit.vue";
import SettingsLevel from "@/components/SettingsLevel.vue";
import SettingsLevelGroup from "@/components/SettingsLevelGroup.vue";


@Component({
  components: { SettingsLevelGroup, SettingsLevel, SettingsUnit }
})
export default class SettingsPanel extends mixins(PanelMixins, SettingsPanelMixins) {
  get orientation() {
    return getEnumMap(ChartOrientation);
  }

  get unitLevelDistance() {
    return getEnumMap(UnitLevelDistance);
  }

  get lastLevelLayout() {
    return getEnumMap(LevelLayout);
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
