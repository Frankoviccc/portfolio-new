<template>
    <h1>Home</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('home', { version: 'draft' });
</script>

