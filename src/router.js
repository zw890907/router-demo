import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import List from './views/List'
import Category from './views/Category'
import Test from './components/Test'
import Login from './views/Login'

Vue.use(Router)

let isLogin = true
export default new Router({
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
      redirect: to => {
        // console.log(to.meta)
        if (to.meta.isAuthRequired) {
          if (isLogin) {
            return '/list/man'
          } else {
            return '/login'
          }
        }
      },
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
