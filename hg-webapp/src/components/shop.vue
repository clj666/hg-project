<template>
  <div class="con">
    <div class="roll">
			<s-header></s-header>
			<s-product></s-product>			
			<h-public></h-public>
		</div>
    <f-footer></f-footer>
  </div>
</template>

<script>
import header from './shop/header'
import product from './shop/product'
import hPublic from './home/public'
import footer from './public-footer'
export default {
  name: 'found',
  props: {
    msg: String
  },
  components: {
    'f-footer':footer,
    's-product':product,
    'h-public':hPublic,
    's-header':header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
