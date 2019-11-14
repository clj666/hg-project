<template>
  <div class="con">
    <div class="roll">
			<f-header></f-header>
			<f-swiper :data="foundInfo.swiperFound" v-if="foundInfo.swiperFound"></f-swiper>
			<f-banner :data="foundInfo.swiperBanner" v-if="foundInfo.swiperBanner"></f-banner>
			<f-product :data1="productInfo1" :data2="productInfo2"></f-product>
			<h-public></h-public>
		</div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import header from './found/header'
import swiper from './home/swiper'
import banner from './found/banner'
import product from './found/product'
import hPublic from './home/public'
import footer from './public-footer'
import cartApi from '../apis/cartApi'  // 导入数据
export default {
  name: 'found',
  props: {
    msg: String
  },
	data(){
		return {
			cartInfo: [],
			foundInfo: [],
			productInfo1: [],
			productInfo2: [],
		}
	},
	methods: {
	async _initHomeData() {
		let data1 = await cartApi.getHomeData();
		let data2 = await cartApi.getFoundData();
		this.cartInfo = data1;
		this.foundInfo = data2;
		// 将产品编号变为产品信息
		
		for(let i=0;i<this.foundInfo.productList1.length;i++){
				this.cartInfo.shops.forEach((shop)=>{
					shop.products.forEach((product)=>{
						if(this.foundInfo.productList1[i] == product.pId){
							this.productInfo1.push(product);
						}
					})
				})
			}
		for(let i=0;i<this.foundInfo.productList2.length;i++){
				this.cartInfo.shops.forEach((shop)=>{
					shop.products.forEach((product)=>{
						if(this.foundInfo.productList2[i] == product.pId){
							this.productInfo2.push(product);
						}
					})
				})
			}
		}
	},
	beforeMount () {
		this._initHomeData()
	},
  components: {
    'f-footer':footer,
    'f-swiper':swiper,
    'f-banner':banner,
    'f-product':product,
    'h-public':hPublic,
    'f-header':header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
