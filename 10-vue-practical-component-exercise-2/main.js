Vue.component("modal", {
  data() {
    return {
      isVisible: true,
    };
  },

  template: `
  <div class="modal">
  <div class="modal-background" v-view="this.isVisible"></div>
  <div class="modal-content">
  <div class="box">
  <p>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
  perspiciatis asperiores.
  </p>
  </div>
  </div>
  </div>`,
});

new Vue({
  el: "#root",
});
