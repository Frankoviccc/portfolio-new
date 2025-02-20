<template>
    <footer class="footer">
        <div class="footer__inner">
            <ul class="footer-navigation__list">
                <li
                    class="footer-navigation__list-item"
                    v-for="item in footerItems"
                    :key="item.id"
                >
                    <router-link
                        :to="`/${item.link.cached_url.replace(/^\/+/, '')}`"
                        class="footer-navigation__list-item-link"
                    >
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
defineProps({
    footerItems: {
        Object
    },
});
</script>

<style lang="scss">
@use 'fs-footer';
</style>
