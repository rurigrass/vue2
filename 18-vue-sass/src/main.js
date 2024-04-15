import Vue from "vue";
import App from "./App.vue";
import "./assets/styles/app.scss";
import store from "./store"
import router from "./router"
import ScrollAnimation from './directives/scrollAnimation'

/*
 Register the object here globally as directive, 
 similar if you register a component. 
 But now with Vue.directive, instead of component.
 With this you can use v-scrollanimation 
 in your whole application on each element.
*/
Vue.directive('scrollAnimation', ScrollAnimation);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
