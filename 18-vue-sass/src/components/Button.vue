<template>
        <transition name="fade" >
            <button v-show="!$store.state.menuOpen" class="button">
                <slot></slot>
            </button>
        </transition>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>