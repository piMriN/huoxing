import { createRouter, createWebHashHistory } from 'vue-router'

import Menu from './modules/Menu'
import Leave from './modules/Leave'

export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/index',
    component: () => import('../Layout'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../views/404')
  }
]

export const privateRoutes = [Menu, Leave]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

console.log(router.getRoutes(), '共有路由')

export default router
