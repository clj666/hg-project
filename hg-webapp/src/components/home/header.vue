<template>
  <div class="h-header fixed-head" >
    <img src="../../assets/img/imgHome/home_logo.png" class="logo"/>
    <input type="text" />
    <img src="../../assets/img/imgHome/search_ico.png" class="search"/>
    <img src="../../assets/img/imgHome/cart_b.png" class="cart"/>
  </div>
</template>

<script>
export default {
  name: 'Vheader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/home';
</style>
