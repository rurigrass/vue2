<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <InvertedText
        class="container__left container__center container__title text__lg"
        :text-fill="innerWidth / 3 - 102"
      >Cascade</InvertedText>
      <ImageContainer class="container__right" />
    </div>
    <div :style="{padding: '20px'}"></div>
    <div class="container">
      <ImageContainer class="container__left" />
      <InvertedText class="container__right container__center text__sm"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
        aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
        nulla amet id deserunt natus expedita! Facere possimus sequi velit!</InvertedText>
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
      inner: innerWidth / 3 - 102
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
};
</script>

<style></style>
