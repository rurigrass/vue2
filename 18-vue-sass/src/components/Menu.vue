<template>
    <transition name="fade">
        <div class="c-menu">
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <router-link to="/about">
                <p>About</p>
            </router-link>
            <router-link to="/contact">
                <p>Contact</p>
            </router-link>
        </div>
    </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>