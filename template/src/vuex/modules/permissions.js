import {
  basicRouterMap,
  dynamicRouterMap
} from "../../routers"

function hasPermission(permissions, route) {
  if (route.meta && route.meta.permissions) {
    return permissions.some(permission => route.meta.permissions.indexOf(permission) >= 0);
  } else {
    return true;
  }
}

const permissions = {
  state: {
    routers: basicRouterMap,
    addRouters: [],
    sideBarRouters: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = basicRouterMap.concat(routers);
      let sideBarRouters = [];
      state.routers.map(item => {
        if (!item.hidden) {
          if (item.path === "/") {
            sideBarRouters.push(item.children[0]);
          } else {
            sideBarRouters.push(item);
          }
        }
      });
      state.sideBarRouters = sideBarRouters; 
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, user) {
      return new Promise(resolve => {
        let accessedRouters = '';
        if (user.role === 'superuser') {
          accessedRouters = dynamicRouterMap;
        } else {
          accessedRouters = dynamicRouterMap.filter(v => {
            if (hasPermission(user.permissions, v)) {
              if (v.children && v.children.length > 0) {
                v.children = v.children.filter(child => {
                  if (hasPermission(user.permissions, child)) {
                    return child
                  }
                  return false;
                });
                return v
              } else {
                return v
              }
            }
            return false;
          });
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    }
  }
}

export default permissions;
