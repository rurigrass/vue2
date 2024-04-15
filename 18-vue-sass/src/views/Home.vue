<template>
    <div>
        <div class="container">
            <InvertedText class="container__left container__center container__ml text__lg"
                :text-fill="pageWidth / 3 - 102" :extra="pageWidth" fill="__black-left">Cascade
            </InvertedText>
            <ImageContainer class="container__right" link="/src/assets/dmitriy-galanov.jpg" />
        </div>
        <div :style="{ padding: '20px' }"></div>
        <div class="container">
            <ImageContainer class="container__left" link="/src/assets/sava-bobov.jpg" />
            <div v-scrollAnimation class="container__right container__mt">
                <InvertedText class=" text__sm" :text-fill="pageWidth / 6 - 5.5" fill="__white-left"> Lorem,
                    ipsum
                    dolor sit amet consectetur adipisicing elit. Quidem illum
                    aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
                    nulla amet id deserunt natus expedita! Facere possimus sequi velit!
                </InvertedText>
                <div :style="{ 'display': 'flex', 'justify-content': 'center' }">
                    <Button link="about">About</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageContainer from "../components/ImageContainer.vue";
import InvertedText from "../components/InvertedText.vue";
import Button from "../components/Button.vue";
import { pageDimensionsMixin } from "../mixins/pageDimensions.ts"

export default {
    components: {
        InvertedText,
        ImageContainer,
        Button
    },

    mixins: [pageDimensionsMixin],

    created() {
        window.addEventListener('resize', this.getPageDimensions);
    },
    destroyed() {
        window.removeEventListener('resize', this.getPageDimensions);
    }
}
</script>

<style lang="scss" scoped>
.before-enter {
    opacity: 0;
    transition: all 2s ease-out;
}

.enter {
    opacity: 1;
}
</style>