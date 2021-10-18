import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/HomePage'
import Menu from '../components/pages/Menus'
import Cook from '../components/pages/Recipe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/cooking/:menuName',
    name: 'Cook',
    component: Cook
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
