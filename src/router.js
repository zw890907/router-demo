import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import List from './views/List'
import Category from './views/Category'
import Test from './components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
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
    }
  ]
})
