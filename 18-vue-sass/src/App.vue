<template>
  <div id="app">
    <Header></Header>
    <Menu v-show="$store.state.menuOpen"></Menu>
    <Background :dimensions="dimensions"></Background>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Background from "./components/Background.vue";
import { onResizeMixin } from "./mixins/onResize.ts"

export default {
  components: {
    Header,
    Menu,
    Background,
  },

  mixins: [onResizeMixin],
  created() {
    window.addEventListener('resize', this.getDimensions);
  },
  destroyed() {
    window.removeEventListener('resize', this.getDimensions);
  }
};
</script>

<style></style>
