import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/index/index')
  },
  {
    path: '/market_quotations',
    name: 'market_quotations',
    component: () => import('@/views/market_quotations/market_quotations')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import('@/views/business/business')
  },
  {
    path: '/treaty',
    name: 'treaty',
    component: () => import('@/views/treaty/treaty')
  },
  {
    path: '/property',
    name: 'property',
    component: () => import('@/views/property/property')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/my')
  },
  {
    path: '/subscribe',
    name: 'subscribe',
    component: () => import('@/views/subscribe/subscribe')
  },
  {
    path: '/mining',
    name: 'mining',
    component: () => import('@/views/mining/mining')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/logon',
    name: 'logon',
    component: () => import('@/views/logon/logon')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
