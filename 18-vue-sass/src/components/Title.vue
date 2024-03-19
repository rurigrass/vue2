<template>
  <div class="title-block">
    <h1>{{ msg }}</h1>
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
/* div {
  display: flex;
} */
h1 {
  font-size: 80px;
}
</style>
