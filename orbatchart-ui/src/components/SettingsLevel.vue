<template>
  <div>Level specific settings</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVEL_CLICK } from "@/eventbus";

@Component
export default class SettingsLevel extends Vue {
  mounted() {
    EventBus.$on(LEVEL_CLICK, levelIndex => console.log("On another Level", levelIndex))
  }

  destroyed() {
    EventBus.$off(LEVEL_CLICK);
  }


};

</script>
