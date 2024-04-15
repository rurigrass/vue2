<template>
        <transition name="fade" >
            <button  class="button">
                <router-link :to="link">
                    <slot></slot>
                </router-link>
                </button>
        </transition>
</template>

<script>
    export default {
        props: {
            link: String
        }
    }
</script>

<style lang="scss" scoped>

</style>