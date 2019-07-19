<template>
  <div>Group specific settings</div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus, LEVELGROUP_CLICK } from "@/eventbus";

@Component
export default class SettingsLevelGroup extends Vue {
  mounted() {
    EventBus.$on(LEVELGROUP_CLICK, parentId => console.log("On another Level group", parentId))
  }

  destroyed() {
    EventBus.$off(LEVELGROUP_CLICK);
  }

};

</script>
