export default {
  authUser(state, userData) {
    state.idToken = userData.token;
    state.userId = userData.userId;
  },
  storeUser(state, user) {
    state.user = user;
  },
  showDrawer(state) {
    state.drawerVisible = true;
  }
};
