<template>
  <v-treeview
    :items="rootUnits"
    activatable
    @update:active="onUnitClick"
    item-children="subUnits"
  >
    <template slot="prepend" slot-scope="{ item, open, leaf }">
      <MilSymbol :sidc="item.sidc"/>
    </template>
    <template slot="append" slot-scope="{ item, active }">
      <v-icon
        v-if="active"
        class="pr-3"
        @click="setRootUnit(item)"
        title="Set as root unit"
      >
        mdi-image-filter-center-focus-strong
      </v-icon>
      <v-icon v-if="item.id == currentUnitKey" class="pr-3">
        mdi-crosshairs-gps
      </v-icon>
    </template>
  </v-treeview>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MilSymbol from "./MilSymbol.vue";
import { Unit } from "orbatchart";

@Component({
  components: { MilSymbol }
})
export default class OrbatTree extends Vue {
  @Prop()
  rootUnits!: Unit[];
  currentUnitKey: string | number | null = null;

  unitMap!: Map<string | number, Unit>;

  created() {
    this.unitMap = new Map();
    this.buildUnitMap(this.rootUnits);
    this.currentUnitKey = this.rootUnits[0].id;
  }

  onUnitClick(unitKey: (string | number)[]) {
    if (!unitKey.length) return;
  }

  setRootUnit(item: Unit) {
    this.currentUnitKey = item.id;
    this.$emit("selectunit", this.unitMap.get(item.id));
  }

  private buildUnitMap(units: Unit[]) {
    for (const unit of units) {
      this.unitMap.set(unit.id, unit);
      if (unit.subUnits && unit.subUnits.length) {
        this.buildUnitMap(unit.subUnits)
      }
    }
  }
}
</script>

<style scoped>

</style>
