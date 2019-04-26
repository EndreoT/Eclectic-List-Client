// Vuex store for all modules used across app


import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist'; // Local storage data persistence

import auth from './modules/auth';
import avatarImage from './modules/avatarImage';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage, // Saves vuex state in local storage
  reducer: state => ({ auth: state.auth }), // Only auth module stored in local storage
});

const store = new Vuex.Store({
  modules: {
    auth,
    avatarImage,
  },
  plugins: [vuexLocalStorage.plugin],
});

export default store;
