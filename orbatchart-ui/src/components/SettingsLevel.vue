<template>
  <div class="">
    <v-list dense>
      <v-list-tile
        v-for="item in items"
        :key="item.id"
        @click="selectLevel(item)"
        ripple
        :active="item.id == currentLevelIndex"
        href="#"
      >
        <v-list-tile-action>
          <v-icon v-if="item.id == currentLevelIndex" color="pink">star</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn
            icon ripple
            title="Clear level settings"
            @click.stop="clearLevelSettings(item)"
          >
            <v-icon color="grey lighten-1">clear</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <SettingsSpecific :options="currentOptions" @update="onUpdate"/>

  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVEL_CLICK } from "@/eventbus";
import { mixins } from "vue-class-component";
import { SettingsPanelMixins } from "@/components/mixins";
import { LevelSpecificOptions, PartialOrbChartOptions } from "orbatchart";
import SettingsSpecific from "@/components/SettingsSpecific.vue";
@Component({
  components: { SettingsSpecific }
})
export default class SettingsLevel extends mixins(SettingsPanelMixins) {
  currentLevelIndex: number | null = null;

  mounted() {
    EventBus.$on(LEVEL_CLICK, (levelIndex: number) => {
      this.activeSettingsPanel = 1;
      this.currentLevelIndex = levelIndex;
      this.highlightedLevels = [levelIndex];
    })
  }

  destroyed() {
    EventBus.$off(LEVEL_CLICK);
  }

  get levelOptions(): LevelSpecificOptions {
    return this.$store.state.chart.levelOptions;
  };

  get currentOptions() {
    return this.currentLevelIndex? this.levelOptions[this.currentLevelIndex]: null;
  }

  get items() {
    let items = Object.entries(this.levelOptions).map(([key, value]) => {
      return { title: `Level ${key}`, id: key }
    });

   /* items.sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 0;
      return 0;
    });*/
    return items;
  }

  selectLevel(item) {
    this.currentLevelIndex = item.id;
    this.highlightedLevels = [item.id];
  }

  clearLevelSettings(item) {
    this.$store.commit('clearLevelOptions', item.id);
  }

  onUpdate(value: PartialOrbChartOptions) {
    this.$store.commit('updateLevelOptions', {id: this.currentLevelIndex, value})
    //console.log(value);
  }
};

</script>
