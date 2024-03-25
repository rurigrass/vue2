<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <InvertedText
        class="container__left container__center container__ml text__lg"
        :text-fill="innerWidth / 3 - 102"
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

export default {
  components: {
    Header,
    InvertedText,
    ImageContainer,
  },

  data() {
    return {
      innerWidth: window.innerWidth,
    };
  },

  methods: {
    resizeHandler(e) {
      window.innerWidth >= 1280 ? this.innerWidth = 1280 : this.innerWidth = window.innerWidth
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
