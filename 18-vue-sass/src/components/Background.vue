<template>
    <!-- <transition name="fade"> -->
        <div class="c-background">
            <div v-for="(col, i) in Math.ceil(screenWidth / 40)" :key="i" class="c-background__column"
                :style="{ '--last-width': lastWidth + 'px' }">
                <div v-for="(row, j) in getRows" :key="j" class="c-background__row">
                    <transition name="reveal">
                        <div v-show="$store.state.menuOpen" class="c-background__block">{{ col + row }}</div>
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
.t-background {
    display: flex;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}

.t-background__column {
    width: 40px;
    background-color: blue;
    margin-right: 5px;
    opacity: 0;
}

.reveal-enter-active {
    transition: opacity 0.5s;
}

.reveal-enter {
    opacity: 1;
}
</style>