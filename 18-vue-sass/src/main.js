import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/app.scss";
import store from "./store"

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
