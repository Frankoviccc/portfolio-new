<template>
    <section class="experience-collection">
        <h2 class="article-collection__title">
            {{ blok.title }}
            <span class="article-collection__span u-highlight">
                {{ blok.span }}
            </span>
        </h2>

        <div class="experience-collection__list">
            <ExperienceItem
                v-for="(item) in blok.items"
                :media="item.icon.filename"
                :title="item.title"
                :span="item.span"
                :subText="item.subtitle"
            />
        </div>
    </section>
</template>

<script setup>
import ExperienceItem from '@/components/experience-item/fs-experience-item.vue';

const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss">
@use 'fs-experience-collection';
</style>