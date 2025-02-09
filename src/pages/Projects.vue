<template>
    <h1>Projects</h1>
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('projects', { version: 'draft' });
</script>