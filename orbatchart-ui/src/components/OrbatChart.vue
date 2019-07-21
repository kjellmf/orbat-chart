<script>

import Vue from "vue";
import OrbatChart from "orbatchart";
import { DEFAULT_OPTIONS } from "orbatchart";
import { LevelLayout } from "orbatchart";

export default Vue.extend({
  name: "OrbatChart",
  props: {
    unit: { type: Object, required: true },
    maxLevels: { type: Number, default: 3 },
    debug: { type: Boolean, default: false },
    symbolSize: { type: Number, default: 32 },
    connectorOffset: { type: Number, default: DEFAULT_OPTIONS.connectorOffset },
    orientation: { type: String, default: DEFAULT_OPTIONS.orientation },
    unitLevelDistance: { type: String, default: DEFAULT_OPTIONS.unitLevelDistance },
    lastLevelLayout: { type: String, default: LevelLayout.Stacked },
    levelPadding: { type: Number, default: DEFAULT_OPTIONS.levelPadding },
    treeOffset: { type: Number, default: DEFAULT_OPTIONS.treeOffset },
    stackedOffset: { type: Number, default: DEFAULT_OPTIONS.stackedOffset },
    lineWidth: { type: Number, default: DEFAULT_OPTIONS.lineWidth },
    specificOptions: { type: Object },
    interactive: { type: Boolean, default: true },
    highlightedLevels: { type: Array, default: () => [] },
  },

  data: () => ({
    resizeTimeout: null,
    width: 600,
    height: 600,
    isMounted: false,
  }),

  created() {
  },

  mounted() {
    this.isMounted = true;
    this.width = this.$el.clientWidth;
    this.height = this.$el.clientHeight;
  },

  destroyed() {
    if (this.orbchart) {
      this.orbchart.cleanup();
    }
  },

  watch: {
    highlightedLevels(value) {
      this.handleLevelHighlight(value);
    },
  },

  methods: {
    onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        //this.drawChart();
      }, 200);
    },

    onClick(unit) {
      this.$emit("unitclick", unit);
    },

    onLevelClick(levelNumber) {
      this.$emit("levelclick", levelNumber);
    },

    onLevelGroupClick(parentId) {
      this.$emit("levelgroupclick", parentId);
    },

    handleLevelHighlight(value) {
      this.orbchart.highlightLevels([... value]);
    }

  },

  render(h) {
    if (this.orbchart) {
      this.orbchart.cleanup();
    }
    let orbchart = new OrbatChart(this.unit, {
      maxLevels: this.maxLevels,
      debug: this.debug,
      symbolSize: this.symbolSize,
      onClick: this.onClick,
      onLevelClick: this.onLevelClick,
      onLevelGroupClick: this.onLevelGroupClick,
      connectorOffset: this.connectorOffset,
      orientation: this.orientation,
      unitLevelDistance: this.unitLevelDistance,
      lastLevelLayout: this.lastLevelLayout,
      levelPadding: this.levelPadding,
      treeOffset: this.treeOffset,
      stackedOffset: this.stackedOffset,
      lineWidth: this.lineWidth,
    }, this.specificOptions || {});
    this.orbchart = orbchart;
    if (this.isMounted) {
      let svg = orbchart.toSVG({ width: 1920, height: 1080 }, this.$el);
      if (this.interactive) orbchart.makeInteractive();
    }

    return h("div", {
        attrs: {
          class: "orbat-chart"
        },
      }
    );
  }
});

</script>

<style>
.orbat-chart {
  width: 100%;
  height: 80%;
  padding: 0;
  margin: 0;
}


</style>
