<template>
    <Logobar
        :items="logoBarItems"
    />

    <main class="page">
        <slot />
    </main>
</template>

<script setup>
import Logobar from '@/components/logobar/Logobar.vue';

import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('config', { version: 'draft' });

const logoBarItems = story.value.content.body[0];
const footerItems = story.value.content.body[1];
</script>