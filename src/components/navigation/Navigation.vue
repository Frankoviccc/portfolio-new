<template>
    <nav class="header__navigation">
        <ul class="header__navigation-list">
            <li
                class="header__navigation-list-item"
                v-for="item in navItems"
                :key="item.id"
            >
                <router-link
                    :to="item.link.cached_url"
                    class="header__navigation-list-item-link"
                >
                    {{ item.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
defineProps({
    navItems: {
        type: Object,
        required: true
    },
})
</script>

<style lang="scss">
@use "Navigation";
</style>