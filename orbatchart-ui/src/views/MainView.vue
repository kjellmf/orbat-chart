<template>
  <v-layout fill-height>
    <v-flex class="panel" style="z-index:3">
      <slide-panel v-model="orbatPanel" header-title='ORBAT' @onSlide="onSlide">
      </slide-panel>
    </v-flex>
    <v-flex>
      <orbat-chart :unit="orbat" class="px-0 py-0 home" @unitclick="onUnitClick"/>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import OrbatChart from "../components/OrbatChart.vue";
import SlidePanel from "../components/SlidePanel.vue";
import {Unit} from "orbatchart";

const ORBAT1: Unit = {
  name: "A Bde",
  sidc: "10031000181211004600",
  id: "sdsdfsdfsdf",
  subUnits: [
    {
      name: "Btn",
      sidc: "10031000161211004600",
      id: "u0xGEGuOLzIcIirsioK0h",
      subUnits: [
        {
          name: "A",
          sidc: "10031000151211004600",
          id: "IZI2tUkYvhmVxShmC8~n~",
        },
        {
          name: "B",
          sidc: "10031000151211004600",
          id: "bJewqRWgkcxt3Lt53sz_c",
        },
        {
          name: "C",
          sidc: "10031000151211004600",
          id: "1ytAWaNFpcrYFLuGetut1",
        }
      ]
    }
  ]
};


@Component({
  components: {
    OrbatChart,
    SlidePanel
  },
})
export default class Home extends Vue {
  orbat = ORBAT1;
  orbatPanel = true;
  onSlide() {
    //console.log("Slick'n slide")
  };

  onUnitClick(unit) {
    console.log("Clikked", unit)
  }



}
</script>

<style scoped>
.home {
  overflow-y: auto;
}
</style>
