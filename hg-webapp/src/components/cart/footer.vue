<template>
  <div class="c-footer" >
		<input type="checkbox" />
		<h1>合计总金额：<span><i>￥</i>266.00</span></h1>
		<p>确认信息</p>
  </div>
</template>

<script>
export default {
  name: 'Cfooter',
  props: ['data'],
  mounted() {
    // console.log(this.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/css/cart'
</style>
