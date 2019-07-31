<template>
  <div class="">
    <v-list dense>
      <v-subheader>Levels</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          class="ma-n1"
          v-for="item in items"
          :key="item.id"
          @click="selectLevel(item)"
          ripple
          :active="item.id == currentLevelIndex"
          href="#"
        >
          <v-list-item-action>
            <v-icon v-if="item.id == currentLevelIndex" color="pink">mdi-star</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn
              icon ripple small
              title="Clear level settings"
            >
              <v-icon @click.stop="clearLevelSettings(item)" color="grey lighten-1">mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <SettingsSpecific v-if="currentLevelIndex != null" :options="currentOptions" @update="onUpdate"
                      @clear="clearSpecific"/>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVEL_CLICK } from "@/eventbus";
import { mixins } from "vue-class-component";
import { SettingsPanelMixins } from "@/components/mixins";
import { ChartItemType, LevelSpecificOptions, PartialOrbChartOptions } from "orbatchart";
import SettingsSpecific from "@/components/SettingsSpecific.vue";

@Component({
  components: { SettingsSpecific }
})
export default class SettingsLevel extends mixins(SettingsPanelMixins) {
  mounted() {
    EventBus.$on(LEVEL_CLICK, (levelIndex: number) => {
      this.activeSettingsPanel = 1;
      this.$store.dispatch("selectChartItem", { itemType: ChartItemType.Level, id: levelIndex });
    });
  }

  get item() {
    return this.currentLevelIndex - 1;
  }

  set item(value) {
  }

  destroyed() {
    EventBus.$off(LEVEL_CLICK);
  }

  get currentLevelIndex() {
    return this.$store.state.ui.selectedLevelIndex;
  }

  get levelOptions(): LevelSpecificOptions {
    return this.$store.state.chart.levelOptions;
  };

  get currentOptions() {
    return this.currentLevelIndex ? this.levelOptions[this.currentLevelIndex] : null;
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
    this.$store.dispatch("selectChartItem", { itemType: ChartItemType.Level, id: item.id });
    this.highlightedLevels = [item.id];
  }

  clearLevelSettings(item) {
    this.$store.commit('clearLevelOptions', item.id);
  }

  clearSpecific(name) {
    this.$store.dispatch('clearSpecificLevelOption', { id: this.currentLevelIndex, name });
  }

  onUpdate(value: PartialOrbChartOptions) {
    this.$store.commit('updateLevelOptions', { id: this.currentLevelIndex, value });
  }
};

</script>
