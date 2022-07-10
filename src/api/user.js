import request from '@/utils/request'

// 登录接口
const login = (data) => {
  return request({
    url: 'users/login',
    method: 'POST',
    data
  })
}

// 权限列表接口
const getPermissionList = () => {
  return request({
    url: 'users/getPermissionList',
    method: 'GET'
  })
}

export default {
  login,
  getPermissionList
}
