Vue.component("message", {
  props: ["title", "body"],

  data() {
    return {
      isVisible: true,
    };
  },

  template: `
  <article class="message" v-show="isVisible">
  <div class="message-header">{{title}}
  <span class="close" @click="isVisible = false">x</span>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>
  `,

  //   methods: {
  //     hideModal() {
  //       this.isVisible = !this.isVisible;
  //     },
  //   },
});

new Vue({
  el: "#root",
});
