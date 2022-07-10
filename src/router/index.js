import { createRouter, createWebHashHistory } from 'vue-router'

const huoxing = [
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../views/welcome'),
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: huoxing
})

export default router
