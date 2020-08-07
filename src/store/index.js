import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: {},
    user: {},
  },
  mutations: {
    SET_ACCOUNT_DATA(state, payload) {
      state.account = payload;
    },
    SET_USER_DATA(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    setAccountData({ commit }, payload) {
      console.log(payload);
      return new Promise((resolve) => {
        commit('SET_ACCOUNT_DATA', payload);
        resolve();
      });
    },
    setUserData({ commit }, payload) {
      console.log(payload);
      return new Promise((resolve) => {
        commit('SET_USER_DATA', payload);
        resolve();
      });
    },
  },
  getters: {
    getAccount: (state) => state.account,
    getUser: (state) => state.user,
  },
  modules: {
  },
});
