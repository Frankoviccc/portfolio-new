<template>
    <Logobar
        :items="logoBarItems"
    />

    <main class="page">
        <slot />
    </main>

    <FsFooter />
</template>

<script setup>
import Logobar from '@/components/logobar/Logobar.vue';
import FsFooter from "@/components/footer/FsFooter.vue";

import { useStoryblok } from '@storyblok/vue';
import Footer from "@/components/footer/FsFooter.vue";
const story = await useStoryblok('config', { version: 'draft' });

const logoBarItems = story.value.content.body[0];
const footerItems = story.value.content.body[1];
</script>