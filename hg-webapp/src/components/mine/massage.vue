<template>
	<div class="marg-b">
		<div class="m-massage">
			<div v-if="data">
				<img src="../../assets/img/imgShops/default_user_portrait.jpg" />
				<h1>{{uName}}<span class="grade">V3</span></h1>
			</div>
			<div v-else @click="gologin">
				<img src="../../assets/img/imgShops/member_w.png" style="background-color:rgba(0,0,0,0.5);"/>
				<h1>请登录</h1>
			</div>
			<div>
				<a href="/">
					<h3 v-if="data">0</h3>
					<h2 v-else></h2>
					<p>商品收藏</p>
				</a>
				<a href="/">
					<h3 v-if="data">0</h3>
					<h2 v-else></h2>
					<p>店铺收藏</p>
				</a>
				<a href="/">
					<h2></h2>
					<p>我的足迹</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Mmassage',
  props: ['data','uName'],
	methods: {
		gologin(){
			this.$router.push("/login")
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/mine';
</style>

