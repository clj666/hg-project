<template>
  <div class="h-shop">
    <div class="shop-l">
      <a href="#/shop"><img :src="data[0].homeImg" /></a>
      <a href="#/shop"><img :src="data[2].homeImg" /></a>
    </div>
    <div class="shop-r">
      <a href="#/shop"><img :src="data[3].homeImg" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  props: ["data"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/home'
</style>
