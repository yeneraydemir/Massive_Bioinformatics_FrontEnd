import { createRouter, createWebHistory } from 'vue-router'
import GuideView from '../views/GuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guide',
      component: GuideView
    },
    {
      path: '/filter-app',
      name: 'filterapp',
      component: () => import('../views/FilterAppView.vue')
    }
  ]
})

export default router
