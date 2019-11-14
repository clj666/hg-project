<template>
	<div>
		<div class="write">
		<h1>
			<p><span>账</span><span>户</span></p>
			<input type="text" placeholder="请输入用户名/已验证手机" ref="user">
		</h1>
		<h1>
			<p><span>密</span><span>码</span></p>
			<input type="password" placeholder="请输入登录密码" ref="pass">
		</h1>
		</div>
		<div class="select">
				<p>
					<input type="checkbox">
					七天自动登录
				</p>
				<div>忘记密码？</div>
			</div>
		<div class="button" @click="login">登录</div>
	</div>
  
</template>

<script>
export default {
  name: 'write',
  props: '',
	methods: {
		login(){
			if(this.$refs.user.value == localStorage.user && this.$refs.pass.value == localStorage.pass){
				this.$router.push("/mine");
				localStorage.user1 = true;
			}else if(localStorage.user == ''){
				this.$router.push("/register");
			}			
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/login';
</style>
