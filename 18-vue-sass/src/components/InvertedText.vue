<template>
  <div>
    <h1 :style="{ '--size': textFill + 'px' }" class="underlap">
      {{ msg }}
    </h1>
    <h1 class="overlap">{{ msg }}</h1>
  </div>
</template>

<!-- change to inverted text component -->

<script>
export default {
  props: {
    msg: String,
    textFill: Number
  },
};
</script>

<style scoped>
h1 {
  font-size: 100px;
}

.underlap {
  position: relative;
  color: black;
  clip-path: polygon(0 0, var(--size) 0, var(--size) 100%, 0% 100%);
  z-index: 1;
}

.overlap {
  position: absolute;
  color: white;
}
</style>
