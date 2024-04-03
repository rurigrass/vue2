<template>
    <transition name="fade">
        <div class="c-background">
            <div v-for="(col, i) in Math.ceil(screenWidth / 40)" :key="i" class="c-background__column"
                :style="{ '--last-width': lastWidth + 'px' }">
                <div v-for="(row, i) in getRows" :key="i" class="c-background__row">
                    <div class="c-background__block">{{ row}}</div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        screenWidth: Number,
        dimensions: Object
    },
    computed: {
        lastWidth() {
            let value
            const remainder = (this.screenWidth / 40) % 1 * 40
            remainder === 0 ? value = 40 : value = remainder
            return value
        },
        getRows() {
            const blockSize = 40
            const amountOfBlocks = Math.ceil(this.dimensions.height / blockSize)
            console.log("get them aall");
            console.log(amountOfBlocks);
            return amountOfBlocks
        },

    },

}
</script>

<style lang="scss" scoped></style>