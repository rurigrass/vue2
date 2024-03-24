<template>
  <div>
    <img
      class="image image-cover"
      :src="this.link"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    link: String
  },
  methods: {
    log(e) {
      console.log(e);
    }
  },
  mounted() {
    this.log(this.link); // Call the log method when the component is mounted
  }
};
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
}

.image-cover {
  object-fit: cover;
  object-position: right top;
}
</style>
