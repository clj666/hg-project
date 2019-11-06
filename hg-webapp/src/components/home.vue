<template>
  <div>
    <h-header></h-header>
    <h-swiper :data="cartInfo.swiper" v-if="cartInfo.swiper"></h-swiper>
    <h-jump-page></h-jump-page>
    <h-shop :data="cartInfo.shops" v-if="cartInfo.shops"></h-shop>
    <a href="/" class="banner marg-b"><img :src="cartInfo.banner" v-if="cartInfo.banner"/></a>
    <h-product :data="cartInfo" v-if="cartInfo"></h-product>
    <h-public></h-public>
  </div>
</template>

<script>
import header from './home/header'
import swiper from './home/swiper'
import jumpPage from './home/jump-page'
import shop from './home/shop'
import product from './home/product'
import Public from './home/public'

import cartApi from '../apis/cartApi'  // 导入数据
export default {
  name: 'home',
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
    'hPublic': Public
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
