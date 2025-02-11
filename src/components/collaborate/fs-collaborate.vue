<template>
    <section class="collaborate">
        <h2 class="article-collection__title">
            {{ blok.title }}
            <span class="article-collection__span u-highlight">
                {{ blok.span }}
            </span>
        </h2>

        <FsMessage/>
    </section>
</template>

<script setup>
import FsMessage from '@/components/message/fs-message.vue';

const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
});

console.log(props.blok);
</script>

<style lang="scss">
@use 'fs-collaborate';
</style>