import Layout from '../../Layout'

export default {
  path: '/audit',
  name: 'audit',
  meta: {
    title: '审批管理',
    icon: 'el-icon-s-promotion'
  },
  component: Layout,
  children: [
    {
      path: '/audit/leave',
      component: () => import('../../views/leave'),
      meta: {
        title: '休假申请'
      }
    },
    {
      path: '/audit/approve',
      component: () => import('../../views/approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}
