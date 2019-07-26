<template>
  <div class="">
    <component
      v-for="(field, index) in items"
      :key="index"
      :is="field.component"
      v-bind="field"
      :value="opts[field.name]"
      @input="updateValue(field, $event)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { PartialOrbChartOptions } from "orbatchart";
import { VTextField } from "vuetify/lib";

const SCHEMA = [
  { label: "Symbol size", type: "number", name: "symbolSize", min: 0 },
  { label: "Level padding", type: "number", name: "levelPadding", min: 0 },
  { label: "Connector offset", type: "number", name: "connectorOffset", min: 0 },
];

@Component({ components: { VTextField } })
export default class SettingsSpecific extends Vue {
  @Prop({
    required: true, default: () => {
    }
  })
  options!: PartialOrbChartOptions;

  mounted() {
    console.log(this.$options);
  }

  get items() {
    //let it = SCHEMA.filter(item => !(this.opts[item.name] == null));
    let filteredItems = SCHEMA;
    return filteredItems.map((item) => {
      return { ...item, component: 'VTextField' }
    });
  }

  get opts() {
    return this.options ? this.options : {};
  }

  updateNum(prop, value) {
    this.$emit('update', { ...this.options, [prop]: +value });
  }

  updateVal(prop, value) {
    this.$emit('update', { ...this.options, [prop]: value });
  }

  updateValue(item, value) {
    let val: number | string;
    val = value;
    if (item.type && item.type == "number") val = +value;
    this.$emit('update', { ...this.options, [item.name]: val });
  }

};

</script>
