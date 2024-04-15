<template>
    <div class="container">
        <ImageContainer class="container__left" link="/src/assets/sava-bobov.jpg" />
        <div class="container__right container__mt">
            <InvertedText class=" text__sm" :text-fill="pageWidth / 6 - 5.5" fill="__white-left"> Lorem,
                ipsum
                dolor sit amet consectetur adipisicing elit. Quidem illum
                aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
                nulla amet id deserunt natus expedita! Facere possimus sequi velit!
            </InvertedText>
            <div :style="{ 'display': 'flex', 'justify-content': 'center' }">
                <Button link="/">Home</Button>
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

<style lang="scss" scoped></style>
