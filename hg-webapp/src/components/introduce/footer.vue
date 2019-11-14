<template>
  <div class="intr-footer">
    <a href="#/">
      <img src="../../assets/img/imgShops/kefu_b.png" />
      <p>客服</p>
    </a>
    <a href="#/cart">
      <img src="../../assets/img/imgShops/cart_b.png" />
      <p>购物车</p>
    </a>
    <span>立即购买</span>
    <span @click="Join">加入购物车</span>
</div>
  
</template>

<script>
export default {
  name: 'Ifooter',
  props: ['id'],
  methods:{
    Join(){
      this.$store.dispatch('INITCART',this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/introduce';
</style>
