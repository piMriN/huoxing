import router from './index'
import store from '@/store'

// 定义白名单，让一些不用登录也能进去
const whitelList = ['/login']
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 如果有数组里有就跳转
    if (whitelList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
