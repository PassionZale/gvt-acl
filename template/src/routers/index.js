import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/layouts/Index.vue'

Vue.use(VueRouter);

const _import = file => () =>
  import ('../views/' + file + '.vue');

export const basicRouterMap = [{
    path: '/login',
    name: '登录',
    component: _import('auth/Login')
  },
  {
    path: '/404',
    name: '404',
    component: _import('404')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/console',
    children: [{
      path: 'console',
      name: '控制台',
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
  {
    path: '*',
    redirect: '/404'
  }
];
