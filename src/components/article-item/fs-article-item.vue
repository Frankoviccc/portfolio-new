<template>
    <article class="article-item">
        <router-link class="article-item__link" :to="link">
            <div class="article-item__inner">
                <div :class="[fullWidth ? 'article-item__media--full-width' : 'article-item__media']">
                    <img
                        :src="media.filename"
                        :alt="media.alt"
                        class="article-item__image"
                    />
                </div>
                <div class="article-item__text">
                    <p class="article-item__title">
                        {{ title}}
                    </p>
                    <p class="article-item__subtitle">
                        {{ text }}
                    </p>
                </div>
                <button
                    class="article-item__button">
                    <font-awesome-icon :icon="faAngleRight" />
                </button>
            </div>
        </router-link>
    </article>
</template>

<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
    media: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    fullWidth: {
        type: Boolean,
        default: false
    }
})

</script>

<style lang="scss">
@use 'fs-article-item';
</style>