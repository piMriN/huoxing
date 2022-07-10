import { publicRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    SET_ROUTES(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      console.log('menus=>', menus)
      // 过滤出用户所有的私有路由表
      const routes = []
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        console.log(data, 0)

        routes.push(...data)
      })
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('SET_ROUTES', routes)
      return routes
    }
  }
}
