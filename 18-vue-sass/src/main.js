import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/app.scss";
import store from "./store"
import router from "./router"
import ScrollAnimation from './directives/scrollAnimation'

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
