<template>
  <div class="h-product">
    <img src="../../assets/img/imgHome/s0_060649000.jpg"/>
    <div class="marg-b">
      <a href="" :key="i" v-for="i in 4">
        <img src="../../assets/img/imgHome/254_06245339052774442_240.jpg" />
        <h1>龙涎柑 当季橙子橘子非耙耙柑丑橘果径65-75mm 4</h1>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/home'
</style>
