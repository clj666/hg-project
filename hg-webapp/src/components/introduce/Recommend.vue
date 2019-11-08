<template>
  <div>
    <div class="intr-recommend">
      <h1>店铺推荐</h1>
      <div>
        <a :href="'#/introduce/'+n.pId" :key="index" v-for="(n,index) in data[sId].products">
          <img :src="n.pImg[0]" />
          <h2>{{n.pName}}</h2>
          <p>￥{{n.pPrice}}</p>
        </a>
      </div>
    </div>
    <div class="more">点击查看商品详情</div>
  </div>

</template>

<script>
export default {
  name: 'Irecommend',
  props: ['data','sId'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/introduce';
</style>
