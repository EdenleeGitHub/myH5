import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register', // 注册
    name: 'register',
    component: () => import('../views/login/register.vue')
  },
  {
    path: '/retrieve', // 找回密码忘记密码
    name: 'retrieve',
    component: () => import('../views/login/retrieve.vue')
  },
  {
    path: '/find', // 发现页面
    name: 'retrieve',
    component: () => import('../views/find/index.vue')
  },
  {
    path: '/my', // 发现页面
    name: 'retrieve',
    component: () => import('../views/my/index.vue')
  },
  {
    path: '/shoPing', // 商品页面
    name: 'shoPing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/shoPing/index.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  const token = JSON.parse(localStorage.getItem('token'))
  // console.log(token)
  if (
    (!token || new Date().getTime() - Number(token.Times) > 6000000) &&
    form.path !== '/login' &&
    to.path !== '/login'
  ) {
    localStorage.removeItem('token')
    Toast('您尚未登陆或登录过期，请先登录！')
    next('/login')
  } else {
    if (
      token &&
      new Date().getTime() - Number(token.Times) < 6000000 &&
      ['/register', '/login', '/retrieve'].includes(to.path)
    ) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
