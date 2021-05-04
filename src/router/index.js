import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/main-page"
  },
  {
    path:"/main-page",
    component:()=>import('views/main-page.vue'),
    redirect:'/main-page/entry-page',
    children:[
      {
        path:'/main-page/entry-page',
        component:()=>import('views/main/entry-page.vue')
      }
    ]
  },
  {
    path:'/login-page',
    component:()=>import('views/login-page.vue'),
    redirect:'/login-page/for-login',
    children:[
      {
        path:'/login-page/for-login',
        component:()=>import('views/lo-and-re/for-login.vue')
      },
      {
        path:'/login-page/for-register',
        component:()=>import('views/lo-and-re/for-register.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
