<template>
    <div :style="{'margin-left': '100px'}">
        {{ dimensions.height }}
        {{ dimensions.width }}
    </div>
</template>

<script>
import {onResizeMixin} from "../mixins/onResize.ts"
export default {
    mixins: [onResizeMixin],
    created() {
      window.addEventListener('resize', this.getDimensions);
    },
    destroyed() {
      window.removeEventListener('resize', this.getDimensions);
    }





}
</script>

<style lang="scss" scoped></style>