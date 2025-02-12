<template>
    <section
        class="row"
        :class="[`row--${modifier}`]"
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
import { resolveComponent } from "vue";

const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})

const modifier = props.blok.item[0].component;
</script>

<style lang="scss">
@use 'fs-row';
</style>