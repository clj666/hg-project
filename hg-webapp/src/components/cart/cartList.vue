<template>
  <div class="c-list">
	<input type="checkbox" />
	<img :src="data.pImg[0]">
	<div>
		<div>
			<h1>{{data.pName}}</h1>
			<span @click="Del"></span>
		</div>
		<div>
			<p>{{data.pPrice.toFixed(2)}}</p>
			<div><span>-</span><span>1</span><span>+</span></div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'cartList',
  props: ['data'],
	methods:{
    Del(){
      this.$store.dispatch('DELCART',this.data.pId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/css/cart'
</style>
