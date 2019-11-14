<template>
  <div class="c-header fixed-head">
		<span @click="goback"></span>
		<div>农谷鲜专区</div>
		<span @click="showOther"></span>
  </div>
</template>

<script>
export default {
  name: 'Cheader',
  props: '',
	methods:{
		showOther(){
			this.outbox = true;
		},
		goback(){
			window.history.back(-1);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/cart';
  .c-header{
		height: 0.6rem;
  }
</style>
