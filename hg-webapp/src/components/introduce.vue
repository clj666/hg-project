<template>
  <div class="con">
    <div class="roll" v-if="cartInfo.shops">
      <intr-header></intr-header>
      <intr-photo v-if="cartInfo.shops[0]" :data="cartInfo.shops[0]"></intr-photo>
      <div class="roll-section">
        <intr-about></intr-about>
      </div>
      
    </div>
    <intr-footer></intr-footer>
  </div>
</template>

<script>
import header from './introduce/header'
import photo from './introduce/photo'
import footer from './introduce/footer'
import about from './introduce/about'

import cartApi from '../apis/cartApi'  // 导入数据
export default {
  name: 'introduce',
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
    'intr-header': header,
    'intr-footer': footer,
    'intr-photo': photo,
    'intr-about': about
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // @import '../assets/css/introduce';
</style>
