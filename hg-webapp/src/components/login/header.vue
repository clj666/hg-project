<template>
  <div class="c-header fixed-head">
		<span @click="gohome"></span>
		<div class="div">登录</div>
		<p @click="goregister" class="reg">注册</p>
  </div>
</template>

<script>
export default {
  name: 'Cheader',
  props: '',
	methods:{
		goregister(){
			this.$router.push("/register");
		},
		gohome(){
			this.$router.push("/");
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/cart';
  @import '../../assets/css/login';
</style>
