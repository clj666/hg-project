<template>
	<div>
		<div class="c-shop" v-if="shop">
			<div>
				<input type="checkbox" />
				<span class="tubiao"></span>
				<p>{{shop}}</p>
			</div>
			<c-list :key="index" v-for="(n,index) in data" :data="n"></c-list>
		</div>
	</div>
  
</template>

<script>
import List from './cartList'
export default {
  name: 'cartShop',
  props: ['data','shop'],
  components:{
	'c-list': List,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/css/cart'
</style>
