<template>
  <div class="spanel" :class="{large:large}">
    <transition name="slide" @after-leave="afterLeave">
      <div class="slide" v-show="isActive">
        <v-toolbar dense flat>
          <slot name="header">
            <v-toolbar-title>{{headerTitle}}</v-toolbar-title>
          </slot>
          <v-spacer/>
          <v-btn text icon @click="isActive=false">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-toolbar>
        <div class="slide-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "slide-panel",
  data: () => ({
    isActive: false,


  }),
  beforeMount() {
    this.isActive = this.value;
  },

  props: {
    value: {required: false},
    headerTitle: String,
    large: Boolean
  },

  watch: {
    isActive(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.isActive = val
    }
  },

  methods: {
    afterLeave() {
      this.$emit('onSlide');
    }
  }

}
</script>

<style scoped>

  .spanel {
    height: 100%;
    background: #fafafa;
  }

  .slide {
    width: 400px;
    height: 100%;
    border-right: 1px solid #d3d3d3;
  }

  .large > .slide {
    width: 600px;
  }

  .slide-content {
    max-height: calc(100vh - 48px);
    overflow: auto;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
  }

  .slide-enter, .slide-leave-to {
    margin-left: -400px;
  }

  .large > .slide-enter,
  .large > .slide-leave-to {
    margin-left: -600px;
  }

</style>
