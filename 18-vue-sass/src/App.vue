<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Title class="container__title" msg="Cascade" />
      <ImageContainer class="container__image" />
    </div>
    <Overlap />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Header from "./components/Header.vue";
import ImageContainer from "./components/ImageContainer.vue";
import Overlap from "./components/Overlap.vue";

export default {
  components: {
    Title,
    Header,
    ImageContainer,
    Overlap,
  },
};
</script>

<style></style>
