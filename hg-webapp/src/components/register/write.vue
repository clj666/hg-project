<template>
	<div>
		<div class="write">
		<h1>
			<p><span>用</span><span>户</span><span>名</span></p>
			<input type="text" placeholder="请输入6-20个字符" ref="user">
		</h1>
		<h1>
			<p><span>设</span><span>置</span><span>密</span><span>码</span></p>
			<input type="password" placeholder="请输入6-20位密码" ref="pass">
		</h1>
		<h1>
			<p><span>确</span><span>认</span><span>密</span><span>码</span></p>
			<input type="password" placeholder="请再次输入密码">
		</h1>
		<h1>
			<p><span>邮</span><span>箱</span></p>
			<input type="password" placeholder="请输入常用邮箱地址">
		</h1>
		</div>
		<div class="select">
				<p>
					<input type="checkbox">
					同意<span class="span">用户注册协议</span>
				</p>
			</div>
		<div class="button" @click="register">注册</div>
	</div>
  
</template>

<script>
export default {
  name: 'write',
  props: '',
  methods: {
	register(){
		localStorage.user = this.$refs.user.value;
		localStorage.pass = this.$refs.pass.value;
		this.$router.push("/mine");	
		localStorage.user1 = true;
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/login';
	.span{
		color: #4B89DC;
		font-size: 0.13rem;
		margin-left: 0.05rem;
	}
</style>
