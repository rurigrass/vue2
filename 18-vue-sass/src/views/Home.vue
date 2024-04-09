<template>
    <div>
        <div class="container">
            <InvertedText class="container__left container__center container__ml text__lg"
                :text-fill="dimensions.width / 3 - 102" :extra="dimensions.width" fill="__black-left">Cascade
            </InvertedText>
            <ImageContainer class="container__right" link="/src/assets/dmitriy-galanov.jpg" />
        </div>
        <div :style="{ padding: '20px' }"></div>
        <div class="container">
            <ImageContainer class="container__left" link="/src/assets/sava-bobov.jpg" />
            <div class="container__right container__mt">
                <InvertedText class=" text__sm" :text-fill="dimensions.width / 6 - 5.5" fill="__white-left"> Lorem,
                    ipsum
                    dolor sit amet consectetur adipisicing elit. Quidem illum
                    aut dolore esse maiores ullam, fugiat temporibus aliquid alias itaque
                    nulla amet id deserunt natus expedita! Facere possimus sequi velit!
                </InvertedText>
                <div :style="{ 'display': 'flex', 'justify-content': 'center' }">
                    <Button link="about">click me</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ImageContainer from "../components/ImageContainer.vue";
import InvertedText from "../components/InvertedText.vue";
import Button from "../components/Button.vue";
import { onResizeMixin } from "../mixins/onResize.ts"

export default {
    components: {
        InvertedText,
        ImageContainer,
        Button
    },

    mixins: [onResizeMixin],
    created() {
        window.addEventListener('resize', this.getDimensions);
    },
    destroyed() {
        window.removeEventListener('resize', this.getDimensions);
    }

}
</script>

<style lang="scss" scoped></style>