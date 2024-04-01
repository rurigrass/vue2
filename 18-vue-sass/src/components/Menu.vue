<template>
    <transition name="fade">
        <div class="c-menu">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        screenWidth: Number
    },
    mounted() {"doees this even work? ", this.screenWidth},
    updated() {
    console.log("WIDEWIDEEE ", this.screenWidth);
  },
}
</script>

<style lang="scss" scoped></style>