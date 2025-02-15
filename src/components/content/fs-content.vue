<template>
    <article class="content">
        <div class="content__header">
            <div
                v-if="content?.image"
                class="content__header-media"
            >
                <img
                    class="content__header-image"
                    :src="content.image?.filename"
                >
            </div>

            <div class="content__header-content">
                <h1 class="content__header-title">
                    {{ content?.title }}
                </h1>
                <p class="content__header-text">
                    {{ content?.text }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup>
import {ref, watchEffect} from "vue";
import { useRoute } from "vue-router";
import { useStoryblokApi } from '@storyblok/vue';

const route = useRoute();
const content = ref(null);

const fetchCurrentStory = async () => {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories/projects/${route.params.slug}`, {
        version: 'draft'
    });

    content.value = data.story.content.body[0];

    console.log(content.value);
}

watchEffect(fetchCurrentStory);
</script>

<style lang="scss">
@use 'fs-content';
</style>