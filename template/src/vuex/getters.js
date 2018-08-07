const getters = {
  user: state => state.user,
  addRouters: state => state.permissions.addRouters,
  routers: state => state.permissions.routers,
  sideBarRouters: state => state.permissions.sideBarRouters,
}

export default getters;
