<template>
  <v-container fluid>
    <v-text-field
      v-model.number="settings.maxLevels"
      type="number"
      label="Visible levels"
    />
    <v-text-field
      label="Symbol size"
      type="number" min="5"
      v-model.number="settings.symbolSize"
    />
    <v-text-field
      label="Connector offset"
      type="number" min="0"
      v-model.number="settings.connectorOffset"
    />
    <v-text-field
      label="Level padding"
      type="number" min="0"
      v-model.number="settings.levelPadding"
    />
    <v-text-field
      :disabled="noTreeOffset"
      label="Tree offset"
      type="number" min="0"
      v-model.number="settings.treeOffset"
    />
    <v-select
      label="Unit spacing"
      :items="unitLevelDistance"
      v-model="settings.unitLevelDistance"
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
      v-model="settings.lastLevelLayout"
    />

    <v-checkbox
      label="Debug mode"
      v-model="settings.debug"
    />
  </v-container>
</template>
<script lang="ts">
import { ChartOrientation, LevelLayout, UnitLevelDistance, isTreeLayout } from "orbatchart";
import { PanelMixins } from "@/components/mixins";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";

function getMap(myEnum) {
  return Object.entries(myEnum).map(([key, value]) => {
    return { text: key, value }
  });
}

@Component
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
};

</script>
