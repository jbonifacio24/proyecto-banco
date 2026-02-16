import { createRouter, createWebHistory } from 'vue-router'
import Demo from '@/pages/public/Landing/parts/Demo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Demo,
    },
    {
      path: '/auth/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/auth/Login/parts/LoginForm.vue'),
    },
    {
      path: '/platform/main/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/private/main/dashboard/parts/Dashboard.vue'),
    },
  ],
})

export default router
