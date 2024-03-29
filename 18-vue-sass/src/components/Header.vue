<template>
  <div class="c-header">
    <div class="burger" :class="{ 'burger__checked': checked }" @click="checked = !checked">
    <Burger />
    </div>
  </div>
</template>

<script>
import Burger from "./Burger.vue";
export default {
  components: { Burger },
  data() {
      return {checked: false} 
    },
    props: {
      check: Boolean
    }
};
</script>

<style></style>
