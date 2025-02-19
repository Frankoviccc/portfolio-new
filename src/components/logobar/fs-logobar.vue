<template>
    <header
        class="header"
    >
        <div class="header__inner">
            <div class="header__logo"
                v-if="!items.logo.filename || items.initials"
            >
                <img
                    class="header__logo-media"
                    v-if="items.logo.filename"
                    :src="items.logo.filename"
                >
                <h2
                    class="header__logo-initials"
                    v-if="items.initials"
                >
                    {{ items.initials }}
                </h2>
            </div>
            <div class="header__title"
                v-if="items.name && items.surname"
            >
                <span class="header__title-span"></span>
                <div class="header__title-name">
                    <p class="header__firstname">{{ items.name }}</p>
                    <p class="header__surname">{{ items.surname }}</p>
                </div>
            </div>

            <FsNavigation :nav-items="items.menu_item"/>

            <a
                href="www.linkedin.com/in/frank-struik-958258203"
                target="_blank"
                rel="noopener noreferrer"
                class="header__logo-linkedin"
            >
                <font-awesome-icon
                    :icon="faLinkedin"
                    :bounce="isBouncing"
                    size="3x"
                    cursor="pointer"
                />
            </a>
        </div>
    </header>
</template>

<script setup>
import FsNavigation from "@/components/navigation/fs-navigation.vue";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref } from "vue";

const isBouncing = ref(true);

defineProps({
    items: {
        Object
    },
});

onMounted(() => {
    setTimeout(() => {
        isBouncing.value = false;
    }, 3000)
})
</script>

<style lang="scss">
@use "fs-logobar";
</style>