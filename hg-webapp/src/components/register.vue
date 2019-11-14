<template>
  <div class="con">
    <div class="roll">
		<r-header></r-header>
		<l-write></l-write>
	</div>
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import header from './register/header'
import write from './register/write'
import footer from './public-footer'
export default {
  name: 'found',
  props: {
    msg: String
  },
  components: {
    'r-header':header,
    'l-write':write,
    'pub-footer':footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.roll{
		background-color: #F5F5F5;
	}
</style>
