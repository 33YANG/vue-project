import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Home from '@/views/Home.vue'
// import ITSM from '@/views/ITSM.vue'
import iView from '@/views/iView.vue'
import NF404 from '@/views/exception-page/404.vue'
import NA403 from '@/views/exception-page/403.vue'
import SE500 from '@/views/exception-page/500.vue'
import Login from '@/views/user/Login.vue'
import Signup from '@/views/user/Signup.vue'
import ForgetPwd from '@/views/user/ForgetPwd.vue'
import ResetPwd from '@/views/user/ResetPwd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: NF404,
  },
  {
    path: '/403',
    name: '403',
    component: NA403,
  },
  {
    path: '/500',
    name: '500',
    component: SE500,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/forgetPwd',
    name: 'forgetPwd',
    component: ForgetPwd,
  },
  {
    path: '/resetPwd',
    name: 'resetPwd',
    component: ResetPwd,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/iView',
        name: 'iView',
        component: iView,
      },
      {
        path: '/itsm',
        name: 'itsm',
        // component: ITSM,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ITSM.vue'),
      },
    ],
  },
]
// 页面切换时的滚动到锚点
const scrollBehavior = function (to, from, savedPosition) {
  if (to.hash) {
    document.querySelector(to.hash).scrollIntoView()
    return { selector: to.hash }
  }
  if (savedPosition) {
    return savedPosition
  }
  return { x: 0, y: 0 }
}

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior,
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 1) {
    document.title = to.name
  } else {
    document.title = 'vue-project'
  }
  next()
})

export default router
