Vue.component("task", {
  template:
    "<li><slot></slot><p>{{count}}</p><button @click='count++'>Add</button></li>",

  data() {
    return {
      count: 0,
    };
  },
});

new Vue({
  el: "#root",
});
