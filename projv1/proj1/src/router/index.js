import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorPage from '../views/ErrorPage.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/api2',
    name: 'api2',
    component: () => import('../views/search_api2.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage

  }, 
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search_api.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
