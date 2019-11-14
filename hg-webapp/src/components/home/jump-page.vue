<template>
  <div class="h-jump-page">
    <a href="#/mine">
      <h1></h1>
      <p>我的商城</p>
    </a>
    <a href="#/cart">
      <h1></h1>
      <p>购物车</p>
    </a>
    <a href="#/">
      <h1></h1>
      <p>每日签到</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'jumpPage',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/home'
</style>
