<template>
  <div class="m-footer">
    <a href="#/">
      <img src="../assets/img/imgHome/home_w.png" />
      <p>首页</p>
    </a>
    <a href="#/found">
      <img src="../assets/img/imgHome/cart_w.png" />
      <p>发现</p>
    </a>
    <a href="#/mine">
      <img src="../assets/img/imgHome/member_w.png" />
      <p>我的商城</p>
    </a>
</div>
  
</template>

<script>
export default {
  name: 'Iheader',
  props: '',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.m-footer {
  width: 2.75rem;
  height: .55rem;
  padding: 0rem .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: .17rem;
  background: rgba(85,85,85,0.95);
  a{
    text-align: center;
    img{
      display: inline-block;
      width: .22rem;
      opacity: .5;
    }
    p{
      color: #eee;
      font-size: .12rem;
    }
  } 
}
</style>
