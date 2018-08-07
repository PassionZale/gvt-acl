import Layout from '../../components/layouts/Index.vue'

const _import = file => () =>
  import ('../../views/' + file + '.vue');

const orderRouter = {
  path: '/order',
  name: 'order',
  hidden: false,
  component: Layout,
  meta: {
    title: '订单管理',
    icon: 'ios-keypad'
  },
  children: [{
      path: 'purchase',
      name: 'order-purchase',
      hidden: false,
      meta: {
        title: '采购单',
        permissions: ['purchase_order']
      },
      component: _import('order/Purchase'),
    },
    {
      path: 'plan',
      name: 'order-plan',
      hidden: false,
      meta: {
        title: '计划单',
        permissions: ['plan_order']
      },
      component: _import('order/Plan'),
    },
    {
      path: 'generate',
      name: 'order-generate',
      hidden: false,
      meta: {
        title: '代发单',
        permissions: ['generate_order']
      },
      component: _import('order/Generate'),
    },
  ]
}

export default orderRouter;
