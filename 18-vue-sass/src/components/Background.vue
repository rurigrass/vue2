<template>
    <div class="c-background">
        <div v-for="col in Math.floor(screenWidth / 40)">
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
        console.log(this.screenWidth / 40);
    }
}
</script>

<style lang="scss" scoped></style>