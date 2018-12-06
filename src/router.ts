import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '朴新教育'
      }
    },
    {
      path: '/productlist',
      name: 'productlist',
      component: () => import('./views/ProductList.vue'),
      meta: {
        title: '查找课程'
      }
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/Address.vue'),
      meta: {
        title: '校区查询'
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('./views/Teacher.vue'),
      meta: {
        title: '朴新名师'
      }
    },
    {
      path: '/loginorregistration',
      name: 'loginorregistration',
      component: () => import('./views/LoginOrRegistration.vue'),
      meta: {
        title: '登录/注册'
      }
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('./views/ShoppingCart.vue'),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/ordermanagement',
      name: 'ordermanagement',
      component: () => import('./views/OrderManagement.vue'),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/Pay.vue'),
      meta: {
        title: '支付'
      }
    }
  ]
})
