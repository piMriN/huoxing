const getters = {
  token: (state) => state.user.token,
  permissionlist: (state) => state.user.permissionList,
  userInfo: (state) => state.user.userInfo
}

export default getters
