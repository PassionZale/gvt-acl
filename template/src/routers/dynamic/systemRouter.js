import Layout from '../../components/layouts/Index.vue'

const _import = file => () =>
  import ('../../views/' + file + '.vue');

const systemRouter = {
  path: '/system',
  name: 'system',
  hidden: false,
  component: Layout,
  meta: {
    title: '系统设置',
    icon: 'ios-navigate'
  },
  children: [{
      path: 'user',
      name: 'system-user',
      hidden: false,
      meta: {
        title: '用户管理',
        permissions: ['user_manage']
      },
      component: _import('system/User'),
    },
    {
      path: 'role',
      name: 'system-role',
      hidden: false,
      meta: {
        title: '角色管理',
        permissions: ['role_manage']
      },
      component: _import('system/Role'),
    },
    {
      path: 'permission',
      name: 'system-permission',
      hidden: false,
      meta: {
        title: '权限管理',
        permissions: ['permission_manage']
      },
      component: _import('system/Permission'),
    },
  ]
}

export default systemRouter;
