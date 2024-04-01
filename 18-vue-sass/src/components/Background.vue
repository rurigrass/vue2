<template>
    <div class="c-background">
        <div v-for="col in Math.ceil(screenWidth / 40)" :style="{ '--last-width': lastWidth + 'px' }">
            {{ col }}
        </div>
    </div>
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
        }
    },
    // mounted() {
    //     //do the screen.width thing. likee when it reaches limit = 1240 or whaatevr
    //     // console.log(Math.ceil(this.screenWidth / 40));
    //     // console.log("width of the screen ", this.screenWidth);
    //     // console.log("last ", (this.screenWidth / 40) % 1 );
    //     // console.log("last * 40 ", (this.screenWidth / 40) % 1 * 40);
    //     // console.log("dimensions " + this.dimensions);
    //     this.getBlocks()
    // },
    // methods: {
    //     getBlocks() {
    //         const blockSize = 40
    //         // const amountOfBlocks = 
    //         console.log("get them aall");
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>