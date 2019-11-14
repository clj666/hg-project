import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' // 引入路由
import router from './router'   // 引入路由的路经
import Vuex from 'vuex'
import store from './store'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false
let bus = new Vue();
Vue.prototype.$bus = bus;

new Vue({
  router,   // 注册引进的路由
	store,
  render: h => h(App),
}).$mount('#app')
