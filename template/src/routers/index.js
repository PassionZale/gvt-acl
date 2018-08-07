import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layouts/Index.vue'
import productRouter from './dynamic/productRouter'
import systemRouter from './dynamic/systemRouter'
import orderRouter from './dynamic/orderRouter'
import ucenterRouter from './dynamic/ucenterRouter'

Vue.use(VueRouter);

const _import = file => () =>
  import ('../views/' + file + '.vue');

export const basicRouterMap = [{
    path: '/login',
    name: 'auth-login',
    hidden: true,
    component: _import('auth/Login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    meta: {
      title: '404'
    },
    component: _import('404')
  },
  {
    path: '/',
    name: 'root',
    meta: {
      title: '首页',
    },
    component: Layout,
    hidden: false,
    redirect: '/console',
    children: [{
      path: 'console',
      name: 'console',
      meta: {
        title: '控制台',
        icon: 'speedometer'
      },
      component: _import('console/Index')
    }]
  },
];

export default new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: basicRouterMap
});

export const dynamicRouterMap = [
  productRouter,
  systemRouter,
  orderRouter,
  ucenterRouter,
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];
