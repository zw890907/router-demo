import Vue from 'vue'
import Router from 'vue-router'
import Test from './components/Test'
import Login from './views/Login'
const Home = () => import(/* webpackChunkName: "group-foo" */ './views/Home')
const List = () => import(/* webpackChunkName: "group-foo" */ './views/List')
const Category = () => import(/* webpackChunkName: "group-bar" */ './views/Category')
// import Home from './views/Home'
// import List from './views/List'
// import Category from './views/Category'

Vue.use(Router)

let isLogin = true
const router = new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      meta: {
        isAuthRequired: false
      },
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      // redirect: to => {
      //   // console.log(to.meta)
      //   if (to.meta.isAuthRequired) {
      //     if (isLogin) {
      //       return '/list/man'
      //     } else {
      //       return '/login'
      //     }
      //   }
      // },
      // meta是元信息
      meta: {
        isAuthRequired: true
      },
      component: List,
      children: [
        {
          path: ':cateName',
          name: 'category',
          components: {
            default: Category,
            a: Test
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
// 全局守卫（处理登录验证）
router.beforeEach((to, from, next) => {
  // console.log({ to, from, next })
  // 验证当前跳转至的组件是否需要权限
  if (to.meta.isAuthRequired) {
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 不需要权限验证，直接进入当前导航
    next()
  }
})
export default router
