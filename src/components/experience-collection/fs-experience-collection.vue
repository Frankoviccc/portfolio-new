<template>
    <div class="experience-collection">
        <ul class="experience-collection__list">
            <ExperienceItem
                v-for="item in items"
                :key="item._uid"
                :media="item.icon"
                :title="item.title"
                :span="item.span"
                :subText="item.subtitle"
            />
        </ul>
    </div>
</template>

<script setup>
import ExperienceItem from '@/components/experience-item/fs-experience-item.vue';

const props = defineProps({
    blok: {
        type: Object,
        required: true
    }
})

const items = props.blok.items;
</script>