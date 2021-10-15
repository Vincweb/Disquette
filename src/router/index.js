import Vue from 'vue'
import VueRouter from 'vue-router'
import Disquette from '../views/Disquette.vue'
import Lost from '../views/Lost.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Disquette',
    component: Disquette
  },
  {
    path: '/lost',
    name: 'Lost',
    component: Lost
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
