<template>
	<div class="marg-b">
		<div class="m-order">
			<h1>
				<div>
					<img src="../../assets/img/imgShops/mc_02.png">
					<span class="span1">我的财产</span>	
				</div>
				<div>
					<span class="span2">查看全部财产</span>
					<span class="right-del"></span>
				</div>
				
			</h1>
			<div v-if="data">
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_06_b.png">
					<p>预存款</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_07_b.png">
					<p>充值卡</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_08_b.png">
					<p>代金券</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_09_b.png">
					<p>红包</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_10_b.png">
					<p>积分</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Morder',
  props: ['data'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/mine';
</style>

