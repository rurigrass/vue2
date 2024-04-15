<template>
  <div id="app">
    <Header></Header>
    <Background :screenDimensions="{screenHeight, screenWidth}" :pageDimensions="{pageHeight, pageWidth}"></Background>
    <Cover :screenDimensions="{screenHeight, screenWidth}" :pageDimensions="{pageHeight, pageWidth}"></Cover>
    <Menu v-show="$store.state.menuOpen"></Menu>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Cover from "./components/Cover.vue";
import Background from "./components/Background.vue";
import { pageDimensionsMixin } from "./mixins/pageDimensions.ts"
import { screenDimensionsMixin } from "./mixins/screenDimensions.ts"

export default {
  components: {
    Header,
    Menu,
    Cover,
    Background
  },

  mixins: [pageDimensionsMixin, screenDimensionsMixin],
  
  created() {
    window.addEventListener('resize', this.getPageDimensions);
    window.addEventListener('resize', this.getScreenDimensions);
  },
  destroyed() {
    window.removeEventListener('resize', this.getPageDimensions);
    window.removeEventListener('resize', this.getScreenDimensions);
  },
  watch: {
    $route (to, from){
      this.$store.commit('closeMenu')
        }
  }
};
</script>

<style></style>
