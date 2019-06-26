<template>
  <v-app id="app">
    <v-navigation-drawer
      width="400"
      v-model="drawer"
      temporary
      app
      class="mdrawer">

      <v-container>
        <h6 class="title">ORBAT Chart Builder
          <v-chip color="warning">alpha</v-chip>
        </h6>

        <p class="subheading">Work in progress ...</p>
      </v-container>

    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height class="py-0 px-0 mx-0 my-0">
        <v-layout>
          <v-flex class="sidebar" style="z-index: 4">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
            <v-btn
              flat icon dark
              @click="orbatPanel = !orbatPanel"
              :class="{'v-btn--active': orbatPanel}"
              title="Toggle ORBAT panel"
            >
              ORB
            </v-btn>
            <v-btn
              flat icon dark
              @click="settingsPanel = !settingsPanel"
              :class="{'v-btn--active': settingsPanel}"
              title="Toggle settings panel"
            >
              <v-icon>settings</v-icon>
            </v-btn>
            <router-view name="toolbar"></router-view>
          </v-flex>
          <v-flex>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">

import { PanelMixins } from "./components/mixins";
import Vue from 'vue';
import { Unit } from "orbatchart";


import testOrbat from "./testorbat.json";

const ORBAT1: Unit = testOrbat;

export default Vue.extend({
  mixins: [PanelMixins],
  components: {},
  data: () => ({
    drawer: null,
  }),
  created() {
    this.$store.commit("setOrbat", [ORBAT1]);
  },
});
</script>
<style>
</style>
