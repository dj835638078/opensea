import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: []
  }, {
    path: '/site',
    name: 'Site',
    component: () => import('@/views/Site/index.vue')
  }, {
    path: '/price',
    name: 'Price',
    component: () => import('@/views/Price.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
