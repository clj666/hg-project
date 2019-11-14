<template>
	<div>
		<div class="h-product marg-b" >
			<h2>精选专题商品</h2>
			<div>
				<a :href="'#/introduce/'+n.pId" :key="index" v-for="(n,index) in data1">
				<img :src="n.pImg[0]"/>
				<h1>{{n.pName}}</h1>
				<p>￥{{n.pPrice.toFixed(2)}}</p>
				</a>
			</div>
		</div>
		<div class="h-product marg-b" >
			<h2>全球精选</h2>
			<div>
				<a :href="'#/introduce/'+n.pId" :key="index" v-for="(n,index) in data2">
				<img :src="n.pImg[0]"/>
				<h1>{{n.pName}}</h1>
				<p>￥{{n.pPrice.toFixed(2)}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'product',
  props: ["data1","data2"],
  beforeMount() {
	console.log(this.data)
  }
}

</script>

<style lang="scss" scoped>
  @import '../../assets/css/home';
  h2{
	height: 0.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
  }
</style>
