<template>
    <div class="c-background" :style="{ '--page-height': pageDimensions.pageHeight + 'px' }">
        <div v-for="(col, i) in Math.ceil(screenDimensions.screenWidth / 40)" :key="i" class="c-background__column"
            :style="{ '--last-width': lastWidth + 'px' }">
            <div v-for="(row, j) in getRows" :key="j" class="c-background__row">
                <div class="c-background__block"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        screenDimensions: Object,
        pageDimensions: Object,
    },
    computed: {
        lastWidth() {
            let value
            const remainder = (this.screenDimensions.screenWidth / 40) % 1 * 40
            remainder === 0 ? value = 40 : value = remainder
            return value
        },
        getRows() {
            const blockSize = 40
            const amountOfBlocks = Math.ceil(this.pageDimensions.pageHeight / blockSize)
            return amountOfBlocks
        },

    },
}
</script>

<style lang="scss" scoped></style>