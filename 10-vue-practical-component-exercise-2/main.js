Vue.component("modal", {
  template: `
  <div class="modal-background" > 
  <div class="close-button" @click="$emit('close')">X</div>
  <div class="modal-container">
  <div class="modal">
  <div class="box">
  <slot></slot>
  </div>
  </div>
  </div>
  </div>`,
});
