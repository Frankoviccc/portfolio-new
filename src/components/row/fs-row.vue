<template>
    <section
        ref="target"
        class="row"
        :class="[`row--${modifier}`, {'fade-in-visible': isVisible, 'fade-in': true}]"
    >
        <h2 class="row__title">
            {{ blok.title }}
            <span class="row__span u-highlight">
                {{ blok.span }}
            </span>
        </h2>

        <component
            v-for="child in blok.item"
            :key="child._uid"
            :is="resolveComponent(child.component)"
            :blok="child"
        />
    </section>
</template>

<script setup>
import {resolveComponent, ref} from "vue";
import {useIntersectionObserver} from '@vueuse/core';

const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})

const modifier = props.blok.item[0].component;

const isVisible = ref(false);
const target = ref(null);

useIntersectionObserver(target, ([{isIntersecting}]) => {
    if (isIntersecting) isVisible.value = true;
});
</script>

<style lang="scss">
@use 'fs-row';
</style>