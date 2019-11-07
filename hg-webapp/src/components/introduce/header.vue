<template>
<div class="intr-header">
  <div class="intr-header1" v-if="show">
    <span></span>
    <span></span>
  </div>
  <div class="intr-header2" name = "fade" v-else>
    <span></span>
    <div>
      <a href="/">商品</a>
      <a href="/">详情</a>
      <a href="/">评价</a>
    </div>
    <span></span>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Iheader',
  props: '',
  data(){
    return {
      show: true
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods:{
    handleScroll(e){
      if(e.target.scrollTop > 50){
        this.show = false;
        document.querySelector(".intr-header").style.position = "fixed";
      }else{
        this.show = true;
        document.querySelector(".intr-header").style.position = "relative";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/introduce';
</style>
