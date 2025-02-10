<template>
    <FsLogobar
        :items="logoBarItems"
    />

    <div id="wrapper">
        <div class="card-container">
            <FsCard :items="cardItems" />
        </div>
        <main class="page">
            <slot />
        </main>
    </div>

    <FsFooter
        :items="footerItems"
    />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
import FsLogobar from '@/components/logobar/fs-logobar.vue';
import FsFooter from "@/components/footer/fs-footer.vue";
import FsCard from "@/components/card/fs-card.vue";

const story = await useStoryblok('config', { version: 'draft' });

const logoBarItems = story.value.content.body[0];
const cardItems = story.value.content.body[1];
const footerItems = story.value.content.body[2];
</script>

<style lang="scss">
#wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 40px;
    max-width: 1140px;
    height: min-content;
    margin: 0 auto;
    padding: 0 24px;
}

.page {
    display: flex;
    flex-direction: column;
    gap: 60px;
}
</style>