import { createRouter, createWebHashHistory } from 'vue-router'

const huoxing = [
  {
    path: '/login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: huoxing
})

export default router
