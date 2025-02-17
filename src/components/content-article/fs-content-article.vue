<template>
    <div class="content__article">
        <h2
            v-if="blok.title"
            class="content__article-title"
        >
            {{ blok.title }}
        </h2>

        <p
            v-if="blok.text"
            class="content__article-text"
        >
            {{ blok.text }}
        </p>

        <div
            v-if="blok.image?.filename"
            class="content__article-media"
        >
            <img
                class="content__article-image"
                :src="blok.image.filename"
            >
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})

console.log(props.blok);
</script>

<style lang="scss">
@use 'fs-content-article';
</style>