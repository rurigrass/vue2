<template>
  <div class="c-inverted-text" >
    <div :style="{ '--size': textFill + 'px'}" class="c-inverted-text__underlap">
      <slot></slot>
      <div :class="['c-inverted-text__overlap' , 'c-inverted-text' + fill]"><slot></slot></div>
    </div>
  </div>
</template>

<!-- change to inverted text component -->

<script>
export default {
  props: {
    textFill: Number,
    fill: String
  },
};
</script>

<style scoped>

</style>
