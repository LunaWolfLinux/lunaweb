import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Download from '../pages/download.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    }
  ]
})

export default router
