Vue.component("modal", {
  template: `
  <div class="modal-background" > 
  <div class="close-button" @click="$emit('close')">X</div>
  <div class="modal-container">
  <div class="modal">
  <div class="box">
  <div class="title"><slot name="title"></slot></div>
  <div class="content"><slot></slot></div>
  <div class="footer">
  <slot name="footer"></slot>
  </div>
  </div>
  </div>
  </div>
  </div>`,
});
