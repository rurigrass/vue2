import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/app.scss";
import store from "./store"
import router from "./router"

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
