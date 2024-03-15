Vue.component("progress-view", {
  // template: `<slot></slot>`,

  data() {
    return {
      completionRate: 50,
    };
  },
});

new Vue({
  el: "#root",
});
