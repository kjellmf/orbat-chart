<template>
  <div>Group specific settings</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVELGROUP_CLICK } from "@/eventbus";
import { SettingsPanelMixins } from "@/components/mixins";
import { mixins } from "vue-class-component";

@Component
export default class SettingsLevelGroup extends mixins(SettingsPanelMixins) {
  mounted() {
    EventBus.$on(LEVELGROUP_CLICK, parentId => {
      console.log("On another Level group", parentId);
      this.activeSettingsPanel = 2;
    })
  }

  destroyed() {
    EventBus.$off(LEVELGROUP_CLICK);
  }

};

</script>
