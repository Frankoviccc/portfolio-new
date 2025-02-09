<template>
    <FsLogobar
        :items="logoBarItems"
    />

    <main class="page">
        <slot />
    </main>

    <FsFooter
        :items="footerItems"
    />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
import FsLogobar from '@/components/logobar/fs-logobar.vue';
import FsFooter from "@/components/footer/fs-footer.vue";

const story = await useStoryblok('config', { version: 'draft' });

const logoBarItems = story.value.content.body[0];
const footerItems = story.value.content.body[1];
</script>