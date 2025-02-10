<template>
    <section class="article-collection">
        <h2 class="article-collection__title">
            {{ blok.title }}
            <span class="article-collection__span">
                {{ blok.span }}
            </span>
        </h2>

        <div class="article-collection__container">
            <FsArticleItem
                v-for="article in articles"
                :title="article.title"
                :link="article.link.cached_url"
                :text="article.text"
                :media="article.media"
                :full-width="article.full_width"
            />
        </div>
    </section>
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

console.log('123');
console.log(articles);
</script>

<style lang="scss">
@use 'fs-article-collection';
</style>