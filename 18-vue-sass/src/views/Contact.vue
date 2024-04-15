<template>
    <div :style="{'margin-left': '100px'}">
        {{ pageHeight }}
        {{ pageWidth }}
    </div>
</template>

<script>
import {pageDimensionsMixin} from "../mixins/pageDimensions.ts"
export default {
    mixins: [pageDimensionsMixin],
    created() {
      window.addEventListener('resize', this.getPageDimensions);
    },
    destroyed() {
      window.removeEventListener('resize', this.getPageDimensions);
    }





}
</script>

<style lang="scss" scoped></style>