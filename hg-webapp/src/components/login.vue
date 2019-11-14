<template>
  <div class="con">
    <div class="roll">
		<l-header></l-header>
		<l-write></l-write>
	</div>
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import header from './login/header'
import write from './login/write'
import footer from './public-footer'
export default {
  name: 'found',
  props: {
    msg: String
  },
  components: {
    'l-header':header,
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
