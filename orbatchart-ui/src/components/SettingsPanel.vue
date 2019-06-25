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
    <v-select
      label="Unit spacing"
      :items="unitLevelDistance"
      v-model="settings.unitLevelDistance"
    />
    <v-select
      disabled
      label="Chart orientation"
      :items="orientation"
      v-model="settings.orientation"
    />
    <v-checkbox
      label="Stack last level"
      v-model="settings.stackLastLevel"
    />
    <v-checkbox
      label="Debug mode"
      v-model="settings.debug"
    />
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import { ChartOrientation, UnitLevelDistance } from "orbatchart";
import { PanelMixins } from "@/components/mixins";

function getMap(myEnum) {
  return Object.entries(myEnum).map(([key, value]) => {
    return { text: key, value }
  });
}

export default Vue.extend({
  mixins: [PanelMixins],
  name: 'SettingsPanel',
  computed: {
    orientation() {
      return getMap(ChartOrientation);
    },

    unitLevelDistance() {
      return getMap(UnitLevelDistance);
    }
  }
});
</script>
