<template>
    <div class="article-collection">
        <FsArticleItem
            v-for="article in articles"
            v-if="articles.length"
            :key="article.id"
            :title="article.title"
            :link="article.link?.cached_url || ''"
            :text="article.text"
            :media="article.media || {}"
            :full-width="article.full_width"
        />
    </div>
</template>

<script setup>
import FsArticleItem from "@/components/article-item/fs-article-item.vue";

const props = defineProps({
    blok: {
        type: Object,
        required: true
    },
});

const articles = props.blok.articles;
</script>

<style lang="scss">
@use 'fs-article-collection';
</style>