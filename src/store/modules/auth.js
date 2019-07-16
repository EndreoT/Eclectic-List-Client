// Vuex Authorization module

const state = {
  user: null,
  authStatus: false,
  jwt: '',
};

const getters = {
  authStatus: state => state.authStatus,
  username: state => state.user.username,
  userId: state => state.user._id,
  // userAvatarImage: (state) => {
  //   return state.user.avatar_image.path;
  // },
  user: state => state.user,
  jwt: state => state.jwt,
};

const mutations = {
  createAuth(state, payload) {
    state.user = payload.user;
    state.authStatus = true;
    state.jwt = payload.jwt;
  },
  deleteAuth(state) {
    state.user = '';
    state.authStatus = false;
    state.jwt = '';
  },
  setUser(state, payload) {
    state.user = payload.user;
  },
};

const actions = {
  createAuthState({ commit }, payload) {
    commit('createAuth', payload);
  },
  deleteAuthState({ commit }) {
    commit('deleteAuth');
  },
  setUser({ commit }, payload) {
    commit('setUser', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
