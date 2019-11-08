<template>
<div class="marg-b">
  <div class="intr-about">
      <h1>{{data[sId].products[pId].pName}}</h1>
      <h2><p><span>￥</span>{{data[sId].products[pId].pPrice}}</p><h3>销量：362件</h3></h2>
      <div class="send">
        <div>送至</div>
        <div class="area">
            <span>全国</span>
            <span>有货</span>
            <span>免运费</span>
        </div>
      </div>
      <div class="selected">
        <div>已选<span>默认</span></div> 
        <h3 class="right-del"></h3>
      </div>
  </div>
</div>
  
  
</template>

<script>
export default {
  name: 'Iabout',
  props: ['data','sId','pId'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/introduce';
</style>
