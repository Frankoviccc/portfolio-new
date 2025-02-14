<template>
    <StoryblokComponent
        v-if="story"
        :blok="story.content"
    />
</template>

<script setup>
import { useStoryblok, StoryblokComponent } from '@storyblok/vue';
const story = await useStoryblok('projects', { version: 'draft' });
</script>