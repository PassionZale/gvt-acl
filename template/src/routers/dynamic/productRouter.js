import Layout from '../../components/layouts/Index.vue'

const _import = file => () =>
  import ('../../views/' + file + '.vue');

const productRouter = {
  path: '/product',
  name: 'product',
  hidden: false,
  component: Layout,
  meta: {
    title: '商品管理',
    icon: 'ios-cart'
  },
  children: [{
    path: 'store',
    name: 'product-store',
    hidden: false,
    component: _import('product/Index'),
    meta: {
      title: '门店商品',
      permissions: ['product_store_permission']
    },
    redirect: '/product/store/list',
    children: [{
      path: 'list',
      name: 'product-store-list',
      meta: {
        title: '商品列表'
      },
      component: _import('product/store/List')
    }, {
      path: 'edit',
      name: 'product-store-edit',
      meta: {
        title: '编辑商品'
      },
      component: _import('product/store/Edit')
    }, {
      path: 'create',
      name: 'product-store-create',
      meta: {
        title: '创建商品'
      },
      component: _import('product/store/Create')
    }]
  }]
}


export default productRouter;
