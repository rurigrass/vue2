<template>
  <div class="container">
    <div class="bg">
      <div class="overlapping-text">ABCABCABCABCABCABCABCABCABC</div>
    </div>
    <div class="nonoverlapping-text">ABCABCABCABCABCABCABCABCABC</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  border: 1px solid black;
  position: relative;
  height: 1em;
  width: 300px;

  --overlapping: white; /*text color when overlapping*/
  --nonoverlapping: black; /*text color when non overlapping*/
}

.bg {
  background: #ad3435;
  width: 60%;
  height: 100%;
  overflow: hidden;
  position: absolute;
}

.nonoverlapping-text,
.overlapping-text {
  position: absolute;
  top: 0;
}

.nonoverlapping-text {
  color: var(--nonoverlapping);
  z-index: 1;
}

.overlapping-text {
  color: var(--overlapping);
  z-index: 2;
}
</style>
