<template>
  <div id="app">
    <Background :screenWidth="innerWidth" :dimensions="dimensions"></Background>
    <Header></Header>
    <Menu v-show="$store.state.menuOpen" :screenWidth="innerWidth"></Menu>
    <div class="container">
      <InvertedText
        class="container__left container__center container__ml text__lg"
        :text-fill="innerWidth / 3 - 102"
        :extra="innerWidth"
        fill="__black-left"
      >Cascade</InvertedText>
      <ImageContainer class="container__right" link="/src/assets/dmitriy-galanov.jpg"/>
    </div>
    <div :style="{padding: '20px'}"></div>
    <div class="container">
      <ImageContainer class="container__left" link="/src/assets/sava-bobov.jpg" />
      <InvertedText 
      class="container__right container__mt text__sm"
      :text-fill="innerWidth / 6 -5.5"
       fill="__white-left" 
      > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
        aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
        nulla amet id deserunt natus expedita! Facere possimus sequi velit!
      </InvertedText>
    </div>
  </div>
</template>

<script> 
import Header from "./components/Header.vue";
import ImageContainer from "./components/ImageContainer.vue";
import InvertedText from "./components/InvertedText.vue";
import Menu from "./components/Menu.vue";
import Background from "./components/Background.vue";

export default {
  components: {
    Header,
    Menu,
    Background,
    InvertedText,
    ImageContainer,
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
      window.innerWidth >= 1280 ? this.innerWidth = 1280 : this.innerWidth = window.innerWidth


      
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
