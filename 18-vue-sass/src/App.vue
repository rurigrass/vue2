<template>
  <div id="app">
    <Header></Header>
    <Menu v-show="$store.state.menuOpen"></Menu>
    <Background :dimensions="dimensions"></Background>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Background from "./components/Background.vue";

export default {
  components: {
    Header,
    Menu,
    Background,
   
  },

  data() {
    return {
      dimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      innerWidth: window.innerWidth,
    };
  },

  methods: {
    resizeHandler(e) {
      // window.innerWidth >= 1280 ? this.innerWidth = 1280 : this.innerWidth = window.innerWidth
      this.innerWidth = Math.min(window.innerWidth, 1280);


      // window.innerWidth >= 1280 ? this.dimensions.width
      //  = 1280 : this.dimensions.width = window.innerWidth
      // this.dimensions.height = window.innerHeight
    },
  },

  created() {
    window.addEventListener("resize", this.resizeHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
  },

  mounted() {
    this.resizeHandler()
  }
};
</script>

<style></style>
