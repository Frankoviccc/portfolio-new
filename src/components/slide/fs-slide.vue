<template>
    <article class="slide">
        <router-link :to="link">
            <div class="slide__inner">
                <div class="slide__media">
                    <img
                        class="slide__image"
                        :src="image.filename"
                        :alt="image.alt"
                    >
                </div>
                <p class="slide__title">
                    {{ title }}
                </p>
            </div>
        </router-link>
    </article>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
});
</script>

<style lang="scss">
@use 'fs-slide';
</style>