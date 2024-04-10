import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// Vue.config.devtools = true

export const store = new Vuex.Store({
  state: {
    menuOpen: false,
  },

  mutations: {
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    closeMenu(state) {
      state.menuOpen = false
    }
  },

  actions: {},

  getters: {},

  modules: {},


});

export default store;
