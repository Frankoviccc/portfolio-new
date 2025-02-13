<template>
    <li class="experience-item">
        <div
            v-if="media"
            class="experience-item__media"
        >
            <img
                class="experience-item__image"
                :src="media.filename"
                :alt="media.alt"
            >
        </div>
        <div class="experience-item__content">
            <p
                v-if="title"
                class="experience-item__title"
            >
                {{ title }}
                <span
                    v-if="span"
                    class="experience-item__span"
                >
                    {{ span }}
                </span>
            </p>

            <p
                v-if="subText"
                class="experience-item__subtext"
            >
                {{ subText }}
            </p>
        </div>
    </li>
</template>

<script setup>
defineProps({
    media: {
        type: Object,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    span: {
        type: String,
        required: true,
    },
    subText: {
        type: String,
        required: true,
    },
})
</script>

<style lang="scss">
@use "fs-experience-item";
</style>