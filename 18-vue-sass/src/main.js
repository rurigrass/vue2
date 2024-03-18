// import { createApp } from 'vue'
// import "./style.css";
// import App from './App.vue'

// createApp(App).mount('#app')

import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/app.scss";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
