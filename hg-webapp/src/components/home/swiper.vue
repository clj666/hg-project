<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(n,index) in data"><img :src="n" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/js/swiper'
export default {
  name: "swiper",
  props: ["data"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,   // 自动滑动
      loop: true,   // 手动滑动
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../../node_modules/swiper/css/swiper.min.css';
.swiper-container {
  width: 3.75rem;
  height: 1.55rem;
  margin-top: 0.6rem;
}
.swiper-slide>img{
  width: 3.75rem;
  height: 1.55rem;
}
</style>