<template>
    <!-- <transition name="fade"> -->
        <div class="c-background">
            <div v-for="(col, i) in Math.ceil(screenWidth / 40)" :key="i" class="c-background__column"
                :style="{ '--last-width': lastWidth + 'px' }">
                <div v-for="(row, j) in getRows" :key="j" class="c-background__row">
                    <transition name="reveal">
                        <div v-show="$store.state.menuOpen" class="c-background__block" :style="{ '--delay': (col + row) * 0.1 + 's'}"></div>
                    </transition>
                </div>
            </div>
        </div>
    <!-- </transition> -->
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
            return amountOfBlocks
        },

    },
    // updated() {
    //     console.log("is it showinf? ", this.$store.state.menuOpen);

    // }

}
</script>

<style scoped>
</style>