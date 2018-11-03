<template>
  <v-treeview
    :items="rootUnits"
    activatable
    @update:active="onUnitClick"
    item-children="subUnits"
  >
    <template slot="prepend" slot-scope="{ item, open, leaf }">
      <mil-symbol :sidc="item.sidc"/>
    </template>
  </v-treeview>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import MilSymbol from "./MilSymbol.vue";
import {Unit} from "orbatchart";

@Component({
  components: {MilSymbol}
})
export default class OrbatTree extends Vue {
  @Prop()
  rootUnits: Unit[];

  onUnitClick(unit: string[]) {
    if (!unit.length) return;
    console.log("Clicked", unit);
  }

}
</script>

<style scoped>

</style>
