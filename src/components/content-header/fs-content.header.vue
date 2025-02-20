<template>
    <div class="content__header">
        <div class="content__header-media">
            <img
                class="content__header-image"
                :src="blok.image.filename"
            >
        </div>
        <h1 class="content__header-title">
            {{ blok.title }}
        </h1>
    </div>
</template>

<script setup>
const props = defineProps({
    blok: {
        type: Object,
        required: true,
    },
})
</script>

<style lang="scss">
@use 'fs-content-header';
</style>