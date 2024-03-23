<template>
  <div class="c-inverted-text">
    <div :style="{ '--size': textFill + 'px' }" class="underlap">
      <slot></slot>
    </div>
    <div class="overlap"><slot></slot></div>
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
