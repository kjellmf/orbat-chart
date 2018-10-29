<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      class="mdrawer">
      <v-list dense>
        <v-toolbar
          prominent
          flat
          class="transparent">
          <v-toolbar-title>ORBAT Chart Builder</v-toolbar-title>
        </v-toolbar>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height class="py-0 px-0 mx-0 my-0">
        <v-layout>
          <v-flex class="sidebar" style="z-index: 4">
            <v-toolbar-side-icon @click.stop="drawer = !drawer" dark></v-toolbar-side-icon>
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
export default {
  components: {},
  data: () => ({
    drawer: null,
  }),
};
</script>
<style>
</style>
