import router from './router'
import store from './store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token

  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const { actionList } = store.getters.permissionlist
      // console.log(actionList, 0)
      if (actionList) {
        next()
      } else {
        const { menuList } = await store.dispatch('user/getPermissionlist')
        if (menuList) {
          const routes = await store.dispatch(
            'permission/filterRoutes',
            menuList
          )
          if (routes) {
            routes.forEach((item) => {
              router.addRoute(item)
            })
            return next(to.path)
          }
        } else {
          next('/login')
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
