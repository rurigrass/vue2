<template>
  <div id="app">
    <Header></Header>
    <Menu v-show="$store.state.menuOpen"></Menu>
    <Cover :dimensions="dimensions"></Cover>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Cover from "./components/Cover.vue";
import { onResizeMixin } from "./mixins/onResize.ts"

export default {
  components: {
    Header,
    Menu,
    Cover,
  },

  mixins: [onResizeMixin],
  created() {
    window.addEventListener('resize', this.getDimensions);
  },
  destroyed() {
    window.removeEventListener('resize', this.getDimensions);
  },
  watch: {
    $route (to, from){
      this.$store.commit('closeMenu')
        }
  }
};
</script>

<style></style>
