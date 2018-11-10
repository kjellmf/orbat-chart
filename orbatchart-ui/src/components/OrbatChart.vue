<script>

import Vue from "vue";
import OrbatChart from "orbatchart";
import {DEFAULT_OPTIONS} from "orbatchart";

export default Vue.extend({
  name: "OrbatChart",
  props: {
    unit: {type: Object, required: true},
    levels: {type: Number, default: 3},
    debug: {type: Boolean, default: false},
    symbolSize: {type: Number, default: 32},
    connectorOffset: {type: Number, default: DEFAULT_OPTIONS.connectorOffset}
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

  methods: {
    onResize() {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => {
        //this.drawChart();
      }, 200);
    },

    onClick(unit) {
      this.$emit("unitclick", unit);
    }
  },

  render(h) {
    if (this.orbchart) {
      this.orbchart.cleanup();
    }
    let orbchart = new OrbatChart(this.unit, {
      maxLevels: this.levels,
      debug: this.debug,
      symbolSize: this.symbolSize,
      onClick: this.onClick,
      connectorOffset: this.connectorOffset,
    });
    this.orbchart = orbchart;
    if (this.isMounted) {
      let svg = orbchart.toSVG({width: 1920, height: 1080}, this.$el);
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
