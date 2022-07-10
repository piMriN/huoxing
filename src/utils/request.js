import axios from 'axios'
import store from '../store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response, 'response')
    const authorization = response.headers.authorization
    if (authorization) {
      store.commit('user/setToken', authorization)
    }
    if (response.data.code === 200) {
      return response.data.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 统一传参方式
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
