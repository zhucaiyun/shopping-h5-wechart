import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loginorregistration',
      name: 'loginorregistration',
      component: () => import('./views/LoginOrRegistration.vue')
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: () => import('./views/ShoppingCart.vue')
    }
  ]
})
