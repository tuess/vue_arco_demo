import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () =>import('@/views/home.vue')
    },
    {
      path: '/home/demo',
      name: 'demo1',
      component: () =>import('@/views/demo.vue')
    }
  ]
})

export default router