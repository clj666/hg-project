<template>
  <div class="con">
    <div class="roll">
      <c-header></c-header>
      <!-- <c-shop></c-shop> -->
       <h1>{{id}}</h1>
      <div v-if="cartInfo.shops">
       
        <!-- <img :src="cartInfo.shops[sId].products[pId].pImg[0]" /> -->
        <p>cart</p>
      </div>
    </div>
  </div>
</template>

<script>
import header from './cart/header'
// import shop from './cart/cartShop'
import cartApi from '../apis/cartApi'  // 导入数据
export default {
  name: 'home',
  data(){
    return {
      cartInfo: [],
      sId: 0,
      pId: 0,
      id: 'ss'
    }
  },
  methods: {
    async _initHomeData() {
        let data = await cartApi.getHomeData();
        this.cartInfo = data;
      }
  },
  beforeMount () {
      this._initHomeData()
  },
  mounted () {
    this.$bus.$on("xx",(id)=>{
        this.id = id;
        console.log(this.id,88);
    })
  },
  components: {
    'cHeader': header,
    // 'cShop': shop,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  width: 1rem;
}
</style>
