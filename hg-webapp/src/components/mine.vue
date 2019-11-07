<template>
  <div class="con">
    <div class="roll">mine</div>
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import footer from './public-footer'
export default {
  name: 'found',
  props: {
    msg: String
  },
  components: {
    'pub-footer':footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
