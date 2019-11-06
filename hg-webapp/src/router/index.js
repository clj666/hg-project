import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import home from '../components/home'
import found from '../components/found'
import mine from '../components/mine'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: '/found',
          component: found
        },
        {
          path: '/mine',
          component: mine
        },
      ]
    }
   
  ]
})

// 全局路由
// 给上方定义的路由加一个全局路由
// router.beforeEach((to,from,next)=>{
//   let token = localStorage.getItem('token')
//   next();
//   if(token){
//     next('/')
//   }else{
//     next('/login')
//   }
// })
// router.afterEach(()=>{
//   // window.confirm('您真的要退出吗？')
// })
export default router;