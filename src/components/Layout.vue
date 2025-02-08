<template>
    <Logobar
        :items="logoBarItems"
    />

    <main class="page">
        <slot />
    </main>

    <Footer/>
</template>

<script setup>
import Logobar from './logobar/Logobar.vue';
import Footer from './footer/Footer.vue';

import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('config', { version: 'draft' });

const logoBarItems = story.value.content.body[0];
const footerItems = story.value.content.body[1];
</script>