<template>
  <div>
    <v-list dense>
      <v-subheader>Groups with settings</v-subheader>
      <v-list-item-group v-model="itemIndex" color="primary">
        <v-list-item
          class="ma-n1"
          v-for="item in items"
          :key="item.id"
          @click="selectLevelGroup(item)"
          ripple
          href="#"
        >
          <v-list-item-action>
            <MilSymbol :sidc="item.sidc"/>
            <!--<v-icon v-if="item.id == currentLevelIndex" color="pink">mdi-star</v-icon>-->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.name}} ...</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn
              icon ripple small
              title="Clear level settings"
            >
              <v-icon @click.stop="clearLevelGroupSettings(item)" color="grey lighten-1">mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider/>
    <div v-if="currentParentUnit"><span class="subtitle-2">Current group
      <MilSymbol class="inline-symbol"
                 :sidc="currentParentUnit.sidc"/> {{currentParentUnit.name}} ... </span>
    </div>
    <v-divider/>
    <SettingsSpecific :options="currentOptions" @update="onUpdate" @clear="clearSpecific"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVELGROUP_CLICK } from "@/eventbus";
import { SettingsPanelMixins } from "@/components/mixins";
import MilSymbol from "@/components/MilSymbol.vue";
import { mixins } from "vue-class-component";
import SettingsSpecific from "@/components/SettingsSpecific.vue";
import { ChartItemType, LevelGroupSpecificOptions, PartialOrbChartOptions } from "orbatchart";

@Component({
  components: { SettingsSpecific, MilSymbol }
})
export default class SettingsLevelGroup extends mixins(SettingsPanelMixins) {
  mounted() {
    EventBus.$on(LEVELGROUP_CLICK, parentId => {
      this.activeSettingsPanel = 2;
      this.$store.dispatch("selectChartItem", {itemType: ChartItemType.LevelGroup, id:parentId});
    })
  }

  get currentLevelGroupId() {
    return this.$store.state.ui.selectedLevelGroupId;
  }

  get itemIndex() {
    return this.items.findIndex(value => value.id === this.currentLevelGroupId);
  }

  set itemIndex(value) {

  }

  get currentOptions() {
    if (this.currentLevelGroupId === null) return null;
    return this.$store.state.chart.levelGroupOptions[this.currentLevelGroupId];
  }

  get levelGroupOptions(): LevelGroupSpecificOptions {
    return this.$store.state.chart.levelGroupOptions;
  }

  get unitMap() {
    return this.$store.getters.unitMap;
  }

  get currentParentUnit() {
    return this.currentLevelGroupId ? this.unitMap[this.currentLevelGroupId] : null;
  }

  get items() {
    return Object.entries(this.levelGroupOptions)
      .map(([key, value]) => {
          let unit = this.unitMap[key];
          return { name: unit.name, id: key, sidc: unit.sidc }
        }
      );
  }

  destroyed() {
    EventBus.$off(LEVELGROUP_CLICK);
  }

  clearSpecific(name) {
    this.$store.dispatch('clearSpecificLevelGroupOption', { id: this.currentLevelGroupId, name });
  }

  selectLevelGroup(item) {
    this.$store.dispatch("selectChartItem", {itemType: ChartItemType.LevelGroup, id:item.id});
  }

  onUpdate(value: PartialOrbChartOptions) {
    this.$store.commit('updateLevelGroupOptions', { id: this.currentLevelGroupId, value });
  }

  clearLevelGroupSettings(item) {
    this.$store.commit('clearLevelGroupOptions', item.id);
  }

};

</script>
