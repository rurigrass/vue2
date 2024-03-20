<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Title
        class="container__left container__center container__title"
        msg="Cascade"
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
import Title from "./components/Title.vue";
import Header from "./components/Header.vue";
import ImageContainer from "./components/ImageContainer.vue";

export default {
  components: {
    Title,
    Header,
    ImageContainer,
  },
};
</script>

<style></style>
