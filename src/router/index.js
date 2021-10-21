import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/HomePage'
import Menu from '../components/pages/Menus'
import Cook from '../components/pages/Recipe'
import Login from '../components/pages/LoginPage'
import Register from '../components/pages/Register'

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
    path: '/cooking/:menuName/:id',
    name: 'Cook',
    component: Cook
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
