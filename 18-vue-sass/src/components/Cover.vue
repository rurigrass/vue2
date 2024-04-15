<template>
    <div x class="c-cover">
        <div v-for="(col, i) in Math.ceil(pageDimensions.pageWidth / 40)" :key="i" class="c-cover__column"
            :style="{ '--last-width': lastWidth + 'px' }">
            <div v-for="(row, j) in getRows" :key="j" class="c-cover__row">
                <transition name="reveal">
                    <div v-show="$store.state.menuOpen"  class="c-cover__block"
                        :style="{ '--delay': (col + row) * 0.05 + 's' }"></div>
                </transition>
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
            const remainder = (this.pageDimensions.pageWidth / 40) % 1 * 40
            remainder === 0 ? value = 40 : value = remainder
            return value
        },
        getRows() {
            const blockSize = 40
            const amountOfBlocks = Math.ceil(this.screenDimensions.screenHeight / blockSize)
            return amountOfBlocks
        },

    },
}
</script>

<style scoped></style>