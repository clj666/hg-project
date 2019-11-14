<template>
  <div class="con">
    <div class="roll">
      <c-header></c-header>
			<div class="shop">
				<c-shop :data="productList" :shop="shop" v-if="shop"></c-shop>
				<c-empty v-else></c-empty>
			</div>
    </div>
		<c-footer></c-footer>
  </div>
</template>

<script>
import header from './cart/header'
import shop from './cart/cartShop'
import empty from './cart/empty'
import footer from './cart/footer'
import cartApi from '../apis/cartApi'  // 导入数据
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data(){
    return {
      cartInfo: [],
			productList: [],
			shop: ''
    }
  },
	computed: {
		...mapGetters({
			List: 'GETCART',
		})
	},
  methods: {
    async _initHomeData() {
        let data = await cartApi.getHomeData();
        this.cartInfo = data;

				for(let i=0;i<this.List.length;i++){
					this.cartInfo.shops.forEach((shop) => {
					shop.products.forEach((product) => {
						if (product.pId == this.List[i]) {
							this.productList.push(product);  // 一挂载就执行push
							this.shop = shop.shopName;				
						}
					})
				})
				}
      },
  },
  beforeMount () {
		this._initHomeData()
  },

  components: {
    'cHeader': header,
    'cShop': shop,
    'cEmpty': empty,
		'cFooter': footer
  },
  watch:{
    List:{
      handler() {
				this.productList = [];
				this.shop = null;
				this._initHomeData()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
img {
  width: 1rem;
}
.footer{
	height: 0.5rem;
}
</style>
