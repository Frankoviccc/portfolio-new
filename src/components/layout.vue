<template>
    <FsLogobar
        :items="items.logobar"
    />

    <div id="wrapper">
        <div class="card-container">
            <FsCard :items="items.card" />
        </div>
        <main class="page">
            <slot />
        </main>
    </div>

    <FsFooter
        :footer-items="items.footer.menu_item"
    />
</template>

<script setup>
import { useStoryblok } from '@storyblok/vue';
import FsLogobar from '@/components/logobar/fs-logobar.vue';
import FsFooter from "@/components/footer/fs-footer.vue";
import FsCard from "@/components/card/fs-card.vue";

const story = await useStoryblok('config', { version: 'draft' });

const items = {
    logobar: 'logobar',
    card: 'card',
    footer: 'footer'
}

story.value.content.body.forEach((item) => {
    if (items[item.component]) {
        items[item.component] = item;
    }
});
</script>

<style lang="scss">
#wrapper {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 40px;
    max-width: 830px;
    height: min-content;
    margin: 0 auto;
    padding: 0 24px;

    @media (width > 1135px) {
        display: grid;
        max-width: 1140px;
        grid-template-columns: 1fr 2fr;
        flex-grow: 1;
    }
}

.page {
    display: flex;
    flex-direction: column;
    margin: 40px 0 0;
    gap: 40px;

    @media (width > 1135px) {
        margin: 0;
        gap: 40px;
    }
}
</style>