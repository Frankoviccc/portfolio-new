<template>
    <div class="content">
        <StoryblokComponent
            v-for="blok in content?.body"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStoryblokApi } from '@storyblok/vue';

const route = useRoute();
const content = ref(null);

const fetchCurrentStory = async () => {
    const storyblokApi = useStoryblokApi();
    const { data } = await storyblokApi.get(`cdn/stories${route.path}`, {
        version: 'draft'
    });

    content.value = data.story.content;
}

watchEffect(fetchCurrentStory);
</script>

<style lang="scss">
</style>