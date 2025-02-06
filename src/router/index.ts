import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('../views/about/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/LoginView.vue'),
    },
  ],
})

export default router
