<template>
    <section class="projects">
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </section>
</template>

<script setup>
import { useStoryblok, StoryblokComponent } from '@storyblok/vue';
const story = await useStoryblok('projects', { version: 'draft' });
</script>

<style lang="scss">
.projects {

    .article-collection {
        display: flex;
        flex-direction: column;
    }

    .article-item__media {
        max-height: 200px;
        max-width: 200px;
    }

    .article-item__text {
        justify-content: flex-start;
        gap: 10px;
        padding-right: 50px;
    }
}
</style>