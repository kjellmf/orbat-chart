<template>
  <div class="">
    <component
      v-for="(field, index) in items"
      :key="index"
      :is="field.component"
      v-bind="field"
      :value="opts[field.name]"
      @[field.event]="updateValue(field, $event)"
      @click:clear="clearField(field)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { LevelLayout, PartialOrbChartOptions, UnitLevelDistance } from "orbatchart";
import { VTextField, VCheckbox, VSelect } from "vuetify/lib";
import { getEnumMap } from "@/utils";

const SCHEMA = [
  { label: "Symbol size", type: "number", name: "symbolSize", min: 0 },
  { label: "Level padding", type: "number", name: "levelPadding", min: 0 },
  { label: "Connector offset", type: "number", name: "connectorOffset", min: 0 },
  { label: "Tree offset", type: "number", name: "treeOffset", min: 0 },
  { label: "Layout", type: "select", name: "layout", items: getEnumMap(LevelLayout) },
  { label: "Unit spacing", type: "select", name: "unitLevelDistance", items: getEnumMap(UnitLevelDistance) },
  { label: "Debug mode", type: "boolean", name: "debug" }
];


/*
<v-select
          label="Unit spacing"
          :items="unitLevelDistance"
          :value="settings.unitLevelDistance"
          @input="updateVal('unitLevelDistance', $event)"
        />
 */
const COMPONENT_MAPPING = {
  'number': 'VTextField',
  'boolean': 'VCheckbox',
  'select': 'VSelect'
};

const EVENT_MAPPING = {
  'number': 'input',
  'boolean': 'change',
  'select': 'input'
};

const DEFAULT_EVENT = 'input';
const DEFAULT_COMPONENT = 'VTextField';
@Component({ components: { VTextField, VCheckbox, VSelect } })
export default class SettingsSpecific extends Vue {
  @Prop({
    required: true, default: () => {
    }
  })
  options!: PartialOrbChartOptions;

  get items() {
    //let it = SCHEMA.filter(item => !(this.opts[item.name] == null));
    let filteredItems = SCHEMA;
    return filteredItems.map((item) => {
      return {
        ...item,
        component: COMPONENT_MAPPING[item.type] || DEFAULT_COMPONENT,
        event: EVENT_MAPPING[item.type] || DEFAULT_EVENT,
        filled: !(this.opts[item.name] == null),
        clearable: true
      }
    });
  }

  get opts() {
    return this.options ? this.options : {};
  }

  updateValue(item, value) {
    let val = value;
    if (item.type && item.type == "number") val = +value;
    this.$emit('update', { ...this.options, [item.name]: val });
  }

  clearField(field) {
    this.$nextTick(() => this.$emit('clear', field.name));
  }
};

</script>
