<template>
<div class="intr-header">
  <div class="intr-header1" v-if="show">
    <span @click="goback" class="set1"></span>
    <span @click="showOther" class="more"></span>
  </div>
  <div class="intr-header2" v-else>
    <span @click="goback" class="set2"></span>
    <div style="font-size: 0.17rem;color: #333;">
      我的商城
    </div>
    <span @click="showOther"></span>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'Mheader',
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
  @import '../../assets/css/mine';
</style>
