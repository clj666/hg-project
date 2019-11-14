<template>
	<div class="marg-b">
		<div class="m-order">
			<h1>
				<div>
					<img src="../../assets/img/imgShops/mc_01.png">
					<span class="span1">我的订单</span>	
				</div>
				<div>
					<span class="span2">查看全部订单</span>
					<span class="right-del"></span>
				</div>
				
			</h1>
			<div>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_01.png">
					<p>待付款</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_02.png">
					<p>待收货</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_03.png">
					<p>待自提</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_04.png">
					<p>待评价</p>
				</a>
				<a href="/">
					<img src="../../assets/img/imgShops/mcc_05.png">
					<p>退款/退货</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Morder',
  props: '',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/mine';
</style>

