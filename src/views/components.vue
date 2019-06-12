<template>
  <div class="flex-cen-cen">
    <button @click="showModel = true">点击显示模态框</button>
    <Model v-model="showModel"></Model>
  </div>
</template>

<script>
import Model from '../components/model/index.vue'

export default {
  name: 'model',
  data () {
    return {
      showModel: false
    }
  },
  created () {

  },
  components: {
    Model
  },
  mounted () {

  }
}
</script>
