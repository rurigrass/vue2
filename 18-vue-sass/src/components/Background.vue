<template>
    <div class="c-background">
        <div v-for="col in Math.ceil(screenWidth / 40)" :style="{ '--last-width': (screenWidth / 40) % 1  + 'px'}">
            {{ col }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        screenWidth: Number
    },
    mounted() {
        console.log(Math.ceil(this.screenWidth / 40));

        console.log("last ", (this.screenWidth / 40) % 1 * 40);
    }
}
</script>

<style lang="scss" scoped></style>