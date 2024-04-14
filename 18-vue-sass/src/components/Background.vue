<template>
   <div class="c-background">
            <div v-for="(col, i) in Math.ceil(dimensions.page.width / 40)" :key="i" class="c-background__column"
                :style="{ '--last-width': lastWidth + 'px' }">
                <div v-for="(row, j) in getRows" :key="j" class="c-background__row">
                        <div class="c-background__block"></div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>