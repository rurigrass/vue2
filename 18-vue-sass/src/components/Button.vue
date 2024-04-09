<template>
        <transition name="fade" >
            <button v-show="!$store.state.menuOpen" class="button">
                <router-link to="/about">
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