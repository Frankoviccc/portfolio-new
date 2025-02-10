<template>
    <section class="slide-collection">
        <h2 class="slide-collection__title">
            {{ blok.title }}
            <span class="slide-collection__span u-highlight">
                {{ blok.span }}
            </span>
        </h2>

        <div class="slide-collection__inner">
            <Splide :options="splideOptions" aria-label="My blog article images">
                <SplideSlide
                    v-for="slide in slides"
                    :key="slide.title"
                >
                    <fs-slide
                        :key="slide.title"
                        :title="slide.title"
                        :link="slide.link.cached_url"
                        :image="slide.image"
                    />
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script setup>
import FsSlide from "@/components/slide/fs-slide.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref } from 'vue';

const props = defineProps({
    blok: {
        type: Object,
        required: true,
    },
});

const slides = props.blok.slides;

const splideOptions = ref({
    drag: 'free',
    gap: '2rem',
    perPage: 3,
    pagination: false,
    arrows: false,
});
</script>

<style lang="scss">
@use 'fs-slide-collection';

.splide {
    overflow: hidden;
}

.splide__list {
    display: flex;
    list-style-type: none;
}

.splide__track {
    display: flex;
}

.splide__slide {
    flex: 0 0 auto;
    width: calc(100% / 3);
}
</style>