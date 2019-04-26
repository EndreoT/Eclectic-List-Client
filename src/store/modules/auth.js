// Vuex Authorization module

const state = {
  user: null,
  authStatus: false,
  jwt: '',
}

const getters = {
  authStatus: (state) => {
    return state.authStatus;
  },
  username: (state) => {
    return state.user.username;
  },
  userId: (state) => {
    return state.user._id;
  },
  // userAvatarImage: (state) => {
  //   return state.user.avatar_image.path;
  // },
  user: (state) => {
    return state.user;
  },
  jwt: (state) => {
    return state.jwt;
  }
}

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
  }
}

const actions = {
  createAuthState({ commit }, payload) {
    commit('createAuth', payload);
  },
  deleteAuthState({ commit }) {
    commit('deleteAuth');
  },
  setUser({ commit }, payload) {
    commit('setUser', payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
