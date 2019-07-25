<template>
  <div>
    <v-btn
      text icon dark small
      @click="downloadAsSVG"
      title="Download as SVG"
    >
      <v-icon>mdi-download</v-icon>
    </v-btn>
  </div>

</template>

<script lang="ts">

import * as FileSaver from "file-saver";

export default {
  name: "MainViewToolbar",
  methods: {
    downloadAsSVG() {
      let svgElement = document.getElementsByClassName("orbat-chart")[0];
      FileSaver.saveAs(
        new Blob(
          [(new XMLSerializer).serializeToString(svgElement)]
          , { type: "image/svg+xml" }
        )
        , "orbat-chart.svg"
      );
    }
  }
}
</script>

<style scoped>

</style>
