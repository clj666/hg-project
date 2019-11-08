<template>
<div>
  <div class="h-product marg-b" v-if="data.hotProduct">
    <img :src="data.hotProduct[0]"/>
    <div>
      <a :href="'#/introduce/'+data.shops[4].products[0].pId" >
        <img :src="data.shops[4].products[0].pImg[0]" />
        <h1>{{data.shops[4].products[0].pName}}</h1>
        <p>￥{{data.shops[4].products[0].pPrice.toFixed(2)}}</p>
     </a>
       <a :href="'#/introduce/'+data.shops[3].products[11].pId" >
        <img :src="data.shops[3].products[11].pImg[0]" />
        <h1>{{data.shops[3].products[11].pName}}</h1>
        <p>￥{{data.shops[3].products[11].pPrice.toFixed(2)}}</p>
      </a>
      <a :href="'#/introduce/'+data.shops[3].products[12].pId">
        <img :src="data.shops[3].products[12].pImg[0]" />
        <h1>{{data.shops[3].products[12].pName}}</h1>
        <p>￥{{data.shops[3].products[12].pPrice.toFixed(2)}}</p>
      </a>
      <a :href="'#/introduce/'+data.shops[1].products[0].pId">
        <img :src="data.shops[1].products[0].pImg[0]" />
        <h1>{{data.shops[1].products[0].pName}}</h1>
        <p>￥{{data.shops[1].products[0].pPrice.toFixed(2)}}</p>
      </a>
    </div>
  </div>
  <div class="h-product marg-b" v-if="data.hotProduct">
    <img :src="data.hotProduct[1]"/>
    <div>
      <a :href="'#/introduce/'+data.shops[0].products[1].pId">
        <img :src="data.shops[0].products[1].pImg[0]" />
        <h1>{{data.shops[0].products[1].pName}}</h1>
        <p>￥{{data.shops[0].products[1].pPrice.toFixed(2)}}</p>
      </a> 
       <a :href="'#/introduce/'+data.shops[0].products[5].pId">
        <img :src="data.shops[0].products[5].pImg[0]" />
        <h1>{{data.shops[0].products[5].pName}}</h1>
        <p>￥{{data.shops[0].products[5].pPrice.toFixed(2)}}</p>
      </a>
      <a :href="'#/introduce/'+data.shops[5].products[0].pId">
        <img :src="data.shops[5].products[0].pImg[0]" />
        <h1>{{data.shops[5].products[0].pName}}</h1>
        <p>￥{{data.shops[5].products[0].pPrice.toFixed(2)}}</p>
      </a>
      <a :href="'#/introduce/'+data.shops[5].products[1].pId">
        <img :src="data.shops[5].products[1].pImg[0]" />
        <h1>{{data.shops[5].products[1].pName}}</h1>
        <p>￥{{data.shops[5].products[1].pPrice.toFixed(2)}}</p>
      </a> 
    </div>
  </div>
  <div class="h-product marg-b" v-if="data.hotProduct">
    <img :src="data.hotProduct[2]"/>
    <div>
      <a :href="'#/introduce/'+n.pId" :key="index+10" v-for="(n,index) in data.shops[6].products">
        <img :src="n.pImg[0]"/>
        <h1>{{n.pName}}</h1>
        <p>￥{{n.pPrice.toFixed(2)}}</p>
      </a>
      <a :href="'#/introduce/'+n.pId" :key="index" v-for="(n,index) in data.shops[7].products">
        <img :src="n.pImg[0]"/>
        <h1>{{n.pName}}</h1>
        <p>￥{{n.pPrice.toFixed(2)}}</p>
      </a>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'product',
  props: ["data"],
  // data(){
  //   return {
  //     n1: 'data.shops[4]',
  //   }
  // },
  // methods: {
  //   async aa() {
  //     this.n1 = this.data.shops[4];
  //     console.log(this.n1);
  //   }
  // },
  // beforeCreate () {
  //   this.aa()
  // }
}

</script>

<style lang="scss" scoped>
  @import '../../assets/css/home';
</style>
