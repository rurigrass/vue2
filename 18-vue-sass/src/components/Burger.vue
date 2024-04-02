<template>
    <div class="burger" :class="{ 'burger__checked': $store.state.menuOpen }" @click="$store.commit('toggleMenu')">
      <div class="burger__side burger__side--front">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
      <div class="burger__side burger__side--back">
        <div class="line line-4"></div>
        <div class="line line-5"></div>
      </div>
    </div>
  </template>

<script>
export default {

};
</script>

<style></style>
