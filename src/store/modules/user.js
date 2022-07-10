import { login as UserApi } from '../../api/user'
import router from '@/router'
import { getItem, setItem } from '../../utils/storage'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  metations: {
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    }
  },
  actions: {
    async login({ commit }, userInfo) {
      // resolve 正常调用该方法
      // reject 异常调用
      return new Promise((resolve, reject) => {
        UserApi(userInfo).then((res) => {
          commit('setToken', res.token)
          router.replace('/')
          resolve()
        })
      })
    }
  }
}
