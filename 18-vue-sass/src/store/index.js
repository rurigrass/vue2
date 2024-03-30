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
    // console.log(state);
    },
  },

  actions: {},

  getters: {},

  modules: {},
});

export default store;
