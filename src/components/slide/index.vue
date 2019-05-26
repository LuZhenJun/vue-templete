<template>
  <div>
    <i v-for="item in num" :key="item" :class="[isSolid ? 'icon-star' : 'icon-star']" :style="iconStyle"></i>
  </div>
</template>
<script>
export default{
  name: 'YStar',
  props: {
    num: {
      type: Number,
      isValid: val => {
        return val > 0 && val < 10
      }
    },
    size: {
      type: Number,
      default: 16
    },
    color: {
      type: String,
      default: '#edcc47'
    },
    isSolid: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    iconStyle () {
      return {
        fontSize: this.size + 'px',
        color: this.color
      }
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
