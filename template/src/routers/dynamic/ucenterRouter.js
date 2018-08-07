import Layout from '../../components/layouts/Index.vue'

const _import = file => () =>
  import ('../../views/' + file + '.vue');

const ucenterRouter = {
  path: '/ucenter',
  name: 'ucenter',
  hidden: false,
  component: Layout,
  meta: {
    title: '个人中心',
    icon: 'person'
  },
  children: [{
      path: 'account',
      name: 'ucenter-account',
      hidden: false,
      meta: {
        title: '账户管理',
        permissions: ['account_manage']
      },
      component: _import('ucenter/Account'),
    },
    {
      path: 'notify',
      name: 'ucenter-notify',
      hidden: false,
      meta: {
        title: '消息通知',
        permissions: ['notify_manage']
      },
      component: _import('ucenter/Notify'),
    },
  ]
}

export default ucenterRouter;
