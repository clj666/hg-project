<template>
  <div class="h-public">
    <ul>
      <li><a href="#/mine">我的商城</a></li>
      <li><a href="/">注销</a></li>
      <li><a href="/">反馈</a></li>
      <li><a href="/">返回顶部</a></li>
    </ul>
    <div>
      <a href="/">
        <h1></h1>
        <p>客户端</p>
      </a>
      <a href="/">
        <h1></h1>
        <p>触屏版</p>
      </a>
      <a href="/">
        <h1></h1>
        <p>电脑版</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'public',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/home';
</style>
