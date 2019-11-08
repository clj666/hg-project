<template>
<div class="marg-b">
  <div class="intr-shop">
    <div>
      <h1><span></span> {{data[sId].shopName}}</h1><h3 class="right-del"></h3>
    </div>
    <h2>
      <p><span>描述相符</span><span>4.7</span><span>平</span></p>
      <p><span>服务态度</span><span>4.8</span><span>平</span></p>
      <p><span>发货速度</span><span>4.8</span><span>平</span></p>
    </h2>
  </div>
</div>
  
  
</template>

<script>
export default {
  name: 'Ishop',
  props: ['data','sId'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/introduce';
</style>
