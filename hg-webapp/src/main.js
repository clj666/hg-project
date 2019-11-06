import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 引入路由
import router from './router'   // 引入路由的路经
Vue.use(VueRouter)
Vue.config.productionTip = false
let bus = new Vue();
Vue.prototype.$bus = bus;

new Vue({
  router,   // 注册引进的路由
  render: h => h(App),
}).$mount('#app')
