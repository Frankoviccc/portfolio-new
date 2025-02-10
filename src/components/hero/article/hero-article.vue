<template>
    <article
        class="hero-article"
        v-for="(item, index) in items"
    >
        <div class="hero-article__icon">
            <FontAwesomeIcon :icon="icons[index]" />
        </div>
        <div class="hero-article__content">
            <h3 class="hero-article__text">
                {{ item.title }}
            </h3>

            <button class="hero-article__button">
                <span>
                    <FontAwesomeIcon :icon="faAnglesRight" />
                </span>
            </button>
        </div>
    </article>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesRight, faFolder, faSquarePen } from "@fortawesome/free-solid-svg-icons";

defineProps({
    items: {
        type: Object,
        required: true,
    },
})

const icons = [
    faFolder,
    faSquarePen
]
</script>

<style lang="scss">
@use 'hero-article';
</style>