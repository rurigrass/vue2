<template>
  <div>
    <h1>{{ msg }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
