<template>
  <div>
    <v-list dense>
      <v-subheader>Units with settings</v-subheader>
      <v-list-item-group v-model="itemIndex" color="primary">
        <v-list-item
          class="ma-n1"
          v-for="item in items"
          :key="item.id"
          @click="selectUnit(item)"
          ripple
          href="#"
        >
          <v-list-item-action>
            <MilSymbol :sidc="item.sidc"/>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-btn
              icon ripple small
              title="Clear unit settings"
            >
              <v-icon @click.stop="clearUnitSettings(item)" color="grey lighten-1">mdi-close</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider/>
    <div v-if="currentUnit"><span class="subtitle-2">Current unit
      <MilSymbol class="inline-symbol"
                 :sidc="currentUnit.sidc"/> {{currentUnit.name}} </span>
    </div>
    <v-divider/>
    <SettingsSpecific :options="currentOptions" @update="onUpdate" @clear="clearSpecific"/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MilSymbol from "@/components/MilSymbol.vue";
import SettingsSpecific from "@/components/SettingsSpecific.vue";
import { SettingsPanelMixins } from "@/components/mixins";
import { mixins } from "vue-class-component";
import { EventBus, UNIT_CLICK } from "@/eventbus";
import { ChartItemType, PartialOrbChartOptions, UnitSpecificOptions } from "orbatchart";

@Component({
  components: { MilSymbol, SettingsSpecific }
})

export default class SettingsUnit extends mixins(SettingsPanelMixins) {
  mounted() {
    EventBus.$on(UNIT_CLICK, (id) => {
      this.activeSettingsPanel = 3;
      this.$store.dispatch("selectChartItem", { itemType: ChartItemType.Unit, id });
    });
  }

  get currentUnitId() {
    return this.$store.state.ui.selectedUnitId;
  }

  get itemIndex() {
    return this.items.findIndex(value => value.id === this.currentUnitId);
  }

  set itemIndex(value) {

  }

  get currentOptions() {
    if (this.currentUnitId === null) return null;
    return this.unitOptions[this.currentUnitId];
  }

  get unitOptions(): UnitSpecificOptions {
    return this.$store.state.chart.unitOptions;
  }

  get unitMap() {
    return this.$store.getters.unitMap;
  }

  get currentUnit() {
    return this.currentUnitId ? this.unitMap[this.currentUnitId] : null;
  }

  get items() {
    return Object.entries(this.unitOptions)
      .map(([key, value]) => {
          let unit = this.unitMap[key];
          return { name: unit.name, id: key, sidc: unit.sidc }
        }
      );
  }

  destroyed() {
    EventBus.$off(UNIT_CLICK);
  }

  clearSpecific(name) {
    this.$store.dispatch('clearSpecificUnitOption', { id: this.currentUnitId, name });
  }

  selectUnit(item) {
    this.$store.dispatch("selectChartItem", {itemType: ChartItemType.Unit, id:item.id});
  }

  onUpdate(value: PartialOrbChartOptions) {
    this.$store.commit('updateUnitOptions', { id: this.currentUnitId, value });
  }

  clearUnitSettings(item) {
    this.$store.commit('clearUnitOptions', item.id);
  }

};

</script>
