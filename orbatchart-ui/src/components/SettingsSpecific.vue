<template>
  <div class="">
    <v-text-field
      v-if="opts.symbolSize"
      label="Symbol size"
      type="number" min="5"
      :value="opts.symbolSize"
      @input="updateNum('symbolSize', $event)"
    />
    <v-text-field
      v-if="opts.levelPadding"
      label="Level padding"
      type="number" min="0"
      :value="opts.levelPadding"
      @input="updateNum('levelPadding', $event)"
    />
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { PartialOrbChartOptions } from "orbatchart";

@Component
export default class SettingsSpecific extends Vue {

  @Prop({
    required: true, default: () => {
    }
  })
  options!: PartialOrbChartOptions;

  get opts() {
    return this.options? this.options : {};
  }
  updateNum(prop, value) {
    this.$emit('update', { ...this.options, [prop]: +value });
  }

  updateVal(prop, value) {
    this.$emit('update', { ...this.options, [prop]: value });
  }

};

</script>
