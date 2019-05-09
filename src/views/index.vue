<template>
  <div class="flex-cen-cen">
    <i class="icon-star" style="color: red; font-size: 20px"></i>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
    this.$store.dispatch('getDemo')
  }
}
</script>
