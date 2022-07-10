import Layout from '../../Layout'

export default {
  path: '/system',
  name: 'system',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  component: Layout,
  children: [
    {
      path: '/system/menu',
      component: () => import('../../views/menu'),
      meta: {
        title: '菜单管理'
      }
    },
    {
      path: '/system/role',
      component: () => import('../../views/roles'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: '/system/user',
      component: () => import('../../views/user'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
