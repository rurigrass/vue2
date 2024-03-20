<template>
  <div>
    <h1 :style="{ '--size': innerWidth + 'px' }" class="underlap">
      {{ msg }}
    </h1>
    <h1 class="overlap">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth / 3 - 102,
    };
  },

  props: {
    msg: String,
  },

  methods: {
    resizeHandler(e) {
      this.innerWidth = window.innerWidth / 3 - 102;
    },
  },

  created() {
    window.addEventListener("resize", this.resizeHandler);
  },

  destroyed() {
    window.removeEventListener("resize", this.resizeHandler);
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
