<template>
  <div class="c-inverted-text">
    <h1 :style="{ '--size': textFill + 'px' }" class="underlap">
      <slot></slot>
    </h1>
    <h1 class="overlap"><slot></slot></h1>
  </div>
</template>

<!-- change to inverted text component -->

<script>
export default {
  props: {
    textFill: Number
  },
};
</script>

<style scoped>

</style>
