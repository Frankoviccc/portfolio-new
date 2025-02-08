<template>
    <header
        class="header"
    >
        <div class="header__inner">
            <div class="header__logo">
                <img
                    class="header__logo-media"
                    v-if="items.logo.filename"
                    :src="items.logo.filename"
                >
                <h2 class="header__logo-initials">{{ items.initials }}</h2>
            </div>
            <div class="header__title">
                <span class="header__title-span"></span>
                <div class="header__title-name">
                    <p class="header__firstname">{{ items.name }}</p>
                    <p class="header__surname">{{ items.surname }}</p>
                </div>
            </div>

            <FsNavigation :nav-items="items.menu_item"/>
        </div>
    </header>
</template>

<script setup>
import FsNavigation from "../navigation/fs-navigation.vue";

const props = defineProps({
    items: {
        Object
    },
});
</script>

<style lang="scss">
@use "fs-logobar";
</style>