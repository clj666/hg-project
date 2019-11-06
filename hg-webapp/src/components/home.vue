<template>
  <div>
    <h-header></h-header>
    <h-swiper></h-swiper>
    <h-jump-page></h-jump-page>
    <h-shop></h-shop>
    <a href="/" class="banner marg-b"><img :src="cartInfo.shops[0].products[0].pImg" /></a>
    <h-product></h-product>
  </div>
</template>

<script>
import header from './home/header'
import swiper from './home/swiper'
import jumpPage from './home/jump-page'
import shop from './home/shop'
import product from './home/product'

import cartApi from '../apis/cartApi'
export default {
  name: 'home',
  props: '',
  data(){
    return {
      cartInfo: []
    }
  },
  methods: {
  async _initHomeData() {
      let data = await cartApi.getHomeData()
      this.cartInfo = data;
    }
  },
  beforeMount () {
      this._initHomeData()
  },

  components: {
    'hHeader': header,
    'hSwiper': swiper,
    'hJumpPage': jumpPage,
    'hShop': shop,
    'hProduct': product,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .banner {
    img {
      width: 3.75rem;
    }
  }
</style>
