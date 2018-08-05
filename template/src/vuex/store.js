import middlewares from './middlewares'
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 在此处导入 modules
 */
import user from './modules/user'
import permissions from './modules/permissions'

/**
 * 在此处导入 getters
 */
import getters from './getters'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        permissions,
    },
    getters,
    strict: process.env.NODE_ENV !== 'production',
    plugins: middlewares,
});