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
  rootUnits: Unit[];

  unitMap: Map<string | number, Unit>;

  created() {
    this.unitMap = new Map();
    this.buildUnitMap(this.rootUnits);
  }

  onUnitClick(unitKey: (string | number)[]) {
    if (!unitKey.length) return;
    this.$emit("selectUnit", this.unitMap.get(unitKey[0]));
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
