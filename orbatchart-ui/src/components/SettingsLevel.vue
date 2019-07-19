<template>
  <div>Level specific settings</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVEL_CLICK } from "@/eventbus";
import { mixins } from "vue-class-component";
import { SettingsPanelMixins } from "@/components/mixins";

@Component
export default class SettingsLevel extends mixins(SettingsPanelMixins) {
  mounted() {
    EventBus.$on(LEVEL_CLICK, levelIndex => {
      console.log("On another Level", levelIndex);
      this.activeSettingsPanel = 1;
    })
  }

  destroyed() {
    EventBus.$off(LEVEL_CLICK);
  }


};

</script>
