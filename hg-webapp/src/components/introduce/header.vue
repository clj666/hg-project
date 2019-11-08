<template>
<div class="intr-header">
  <div class="intr-header1" v-if="show">
    <span @click="goback"></span>
    <span @click="showOther"></span>
  </div>
  <div class="intr-header2" name = "fade" v-else>
    <span @click="goback"></span>
    <div>
      <a href="/">商品</a>
      <a href="/">详情</a>
      <a href="/">评价</a>
    </div>
    <span @click="showOther"></span>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Iheader',
  props: '',
  data(){
    return {
      show: true,
      outbox: false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true);  
  },
  beforeDestroy() {
    window.removeEventListener("scroll",this.handleScroll,true)
  },
  methods:{
    handleScroll(e){
      let h = document.querySelector(".intr-header");
      if( h && e.target.scrollTop > 50){
        this.show = false;
        h.style.position = "fixed";
      }else{
        this.show = true;
        h.style.position = "relative";
      }
    },
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
  @import '../../assets/css/introduce';
</style>
