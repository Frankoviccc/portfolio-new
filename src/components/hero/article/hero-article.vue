<template>
    <article
        class="hero-article"
    >
        <div class="hero-article__icon">
            <FontAwesomeIcon :icon="icons" />
        </div>
        <div class="hero-article__content">
            <h3 class="hero-article__text">
                {{ title }}
            </h3>

            <button class="hero-article__button">
                <router-link :to="`/${link}`">
                    <span>
                        <FontAwesomeIcon :icon="faAnglesRight" />
                    </span>
                </router-link>
            </button>
        </div>
    </article>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    icons: {
        type: Object,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss">
@use 'hero-article';
</style>