<template>
  <div class="c-header fixed-head">
		<span @click="gohome"></span>
		<div class="div">注册</div>
		<p @click="gologin" class="reg">登录</p>
  </div>
</template>

<script>
export default {
  name: 'Cheader',
  props: '',
	methods:{
		gologin(){
			this.$router.push("/login");
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
