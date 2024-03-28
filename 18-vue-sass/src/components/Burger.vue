<template>
    <div class="burger" :class="{ 'burger__checked': checked }" @click="checked = !checked">
      <!-- <input type="checkbox" id="burger__checkbox" @change="check">
        <label class="burger__side" for="burger__checkbox">TEXT</label> -->
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
    data() {
      return {checked: false} 
    },
    props: {
      check: Boolean
    }
};
</script>

<style>

</style>
