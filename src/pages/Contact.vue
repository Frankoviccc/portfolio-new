<template>
    <h1>Contact</h1>
        <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('contact', { version: 'draft' });
</script>
