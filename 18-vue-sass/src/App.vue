<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <InvertedText
        class="container__left container__center container__title"
        msg="Cascade"
        :text-fill="innerWidth / 3 - 102"
      />
      <ImageContainer class="container__right" />
    </div>
    <div class="container">
      <div class="container__left container__center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem illum
        aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
        nulla amet id deserunt natus expedita! Facere possimus sequi velit!
      </div>
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
