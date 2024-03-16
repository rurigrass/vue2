<template>
  <div id="app">
    <Message msg="Hello There"> content </Message>
    <Message msg="Hello There"> content </Message>
  </div>
</template>

<script>
import Message from "./components/Message.vue";
alert("hello world");
export default {
  components: {
    Message,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
