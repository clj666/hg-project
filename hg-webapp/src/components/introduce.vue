<template>
  <div class="con">
    <div class="roll" v-if="cartInfo.shops">
      <intr-header></intr-header>
      <intr-photo :data="cartInfo.shops" :sId="sId" :pId="pId"></intr-photo>
      <div class="roll-section">
        <intr-about  :data="cartInfo.shops" :sId="sId" :pId="pId"></intr-about>
        <intr-appraise></intr-appraise>
        <intr-shop  :data="cartInfo.shops" :sId="sId"></intr-shop>
        <intr-recommend  :data="cartInfo.shops" :sId="sId"></intr-recommend>
      </div>
    </div>
    <intr-footer :id="id"></intr-footer>
  </div>
</template>

<script>
import header from './introduce/header'
import photo from './introduce/photo'
import footer from './introduce/footer'
import about from './introduce/about'
import appraise from './introduce/appraise'
import shop from './introduce/shop'
import recommend from './introduce/recommend'

import cartApi from '../apis/cartApi'  // 导入数据
// import { mapGetters } from 'vuex'
export default {
  name: 'introduce',
  data(){
    return {
			cartInfo:[],
      sId: 0,
      pId: 0,
      id:''
    }
  },
	methods:{
		async _initHomeData() {
				let data = await cartApi.getHomeData()
				this.cartInfo = data;
				this.sId = Number(this.$route.params.id.substr(0,2));
				this.pId = Number(this.$route.params.id.substr(2,2));
				this.id = this.$route.params.id;
			}
		},
	beforeMount () {
		this._initHomeData()
	},
  components: {
    'intr-header': header,
    'intr-footer': footer,
    'intr-photo': photo,
    'intr-about': about,
    'intr-appraise': appraise,
    'intr-shop': shop,
    'intr-recommend': recommend,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .roll-section{
    position: relative;
    margin-top: 3rem;
    background-color: #fff;
  }
</style>
