import Vue from 'vue'
import router from './routers'
import store from './vuex/store'
import App from './App.vue'
import iView from 'iview'
import * as filters from './filters'

Vue.use(iView)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (store.getters.user.role === '') {
    store.dispatch('FetchUserInfo').then(userinfo => {
      store.dispatch('GenerateRoutes', userinfo).then(() => {
        router.addRoutes(store.getters.addRouters);
        next({ ...to, replace: true });
      })
    }).catch(error => {
      console.error(error);
    });
  }else{
    next();
  }
});

router.afterEach(router => {
  let title = 'GVT ACL';
  if (router.meta.title) {
    title += ` - ${router.meta.title}`;
  }
  document.title = title;
  iView.LoadingBar.finish();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
