import Vue from 'vue'
import VueRouter from 'vue-router'
import vueCookie from 'vue-cookie'
Vue.use(VueRouter)
Vue.use(vueCookie)
const userType=Vue.cookie.get('userType');
let routes = []
let defaultRoutes=[
  {
    path:'/',
    redirect:'login'
  },
  {
    path:'/login',
    name:'login',
    component:()=>import ('@/views/user/Login'),
    
    meta:{ title:'登录'}
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes:[...routes,...defaultRoutes]
})

export default router
