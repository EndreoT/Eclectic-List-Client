// Vuex Avatar Image module

const state = {
  currentAvatarImage: '',
  selectedAvatarImage: '',
};

const getters = {
  currentAvatarImage: state => state.currentAvatarImage,
  selectedAvatarImage: state => state.selectedAvatarImage,
};

const mutations = {
  updateCurrentAvatarImage(state, payload) {
    state.currentAvatarImage = payload.currentAvatarImage;
  },
  updateSelectedAvatarImage(state, payload) {
    state.selectedAvatarImage = payload.selectedAvatarImage;
  },
};

const actions = {
  updateCurrentAvatarImage({ commit }, payload) {
    commit('updateCurrentAvatarImage', payload);
  },
  updateSelectedAvatarImage({ commit }, payload) {
    commit('updateSelectedAvatarImage', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
