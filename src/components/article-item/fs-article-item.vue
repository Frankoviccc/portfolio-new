<template>
    <article class="article-item">
        <router-link
            class="article-item__link"
            :to="link"
        >
            <div class="article-item__inner">
                <div
                    :class="[fullWidth ? 'article-item__media--full-width' : 'article-item__media']"
                >
                    <img
                        :src="media.filename"
                        :alt="media.alt"
                        class="article-item__image"
                    />
                </div>
                <div class="article-item__text">
                    <p
                        v-if="title"
                        class="article-item__title"
                    >
                        {{ title}}
                    </p>
                    <p
                        v-if="text"
                        class="article-item__text"
                    >
                        {{ text }}
                    </p>
                    <p
                        v-if="subText"
                        class="article-item__subtext"
                    >
                        {{ subText }}
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
        required: false
    },
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
    subText: {
        type: String,
        required: false
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