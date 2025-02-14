<template>
    <div class="slide-collection">
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
    </div>
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
    gap: '1.25rem',
    perPage: 2.5,
    perMove: 1,
    focus: 'center',
    drag: 'free',
    pagination: false,
    arrows: false,
    breakpoints: {
        500: {
            perPage: 2.2,
        },
        375: {
            perPage: 1.5,
        }
    }
});
</script>

<style lang="scss">
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
}
</style>