<template>
  <div :class="modelClass" v-show="visible" @click="onWrapClick">
    <div :class="modelMaskClass" v-show="visible" :style="zIndex"></div>
    <div :class="modelWrapClass" v-show="visible" :style="zIndex">
      <transition :name="transitionNames">
        <div ref="content" class="model-content" v-show="visible" :style="contentStyle">
          asdahjdhajhdakhdjklajhdklasjkldjal
        </div>
      </transition>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
const MODEL_CLASS = 'model'
export default {
  name: 'Model',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    transitionNames: {
      type: String,
      default: 'fade'
    },
    width: Boolean,
    height: Boolean
  },
  data () {
    return {
      visible: this.value,
      zIndex: 1050
    }
  },
  computed: {
    modelClass () {
      return MODEL_CLASS
    },
    modelMaskClass () {
      return [
        `${this.modelClass}`,
        `${this.modelClass}-mask`
      ]
    },
    modelWrapClass () {
      return [
        `${this.modelClass}`,
        `${this.modelClass}-wrap`
      ]
    },
    contentStyle () {
      return {
        width: this.width ? `${this.width}px` : 'auto'
      }
    }
  },
  created () {
    console.log('value', this.value)
  },
  mounted () {
    console.log('value', this.value)
  },
  methods: {
    onWrapClick (event) {

    }
  },
  watch: {
    value (val) {
      this.visible = val
    },
    visible (val) {
      if (val) {
        this.zIndex -= 1
      } else {
        this.zIndex += 1
      }
    }
  },
  beforeDestroy () {

  }
}
</script>
