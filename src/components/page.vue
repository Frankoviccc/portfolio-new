<template>
    <StoryblokComponent
      v-for="blok in blok.body"
      :blok="blok"
      :key="blok._uid"
    />
</template>

<script setup>
import { StoryblokComponent } from '@storyblok/vue';

defineProps({ blok: Object });
</script>
