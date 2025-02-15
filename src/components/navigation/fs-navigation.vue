<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li
                class="navigation__list-item"
                v-for="item in navItems"
                :key="item.id"
            >
                <router-link
                    :to="'/' + item.link.cached_url"
                    class="navigation__list-item-link"
                >
                    {{ item.text }}
                </router-link>
            </li>
        </ul>
    </nav>

    <nav :class="{
            'navigation__mobile': true,
            'navigation__mobile--open': navigationIsOpen
             }"
    >
        <div class="navigation__mobile-inner">
            <button
                class="navigation__mobile-button"
                @click="toggleNavigation"
            >
                <font-awesome-icon
                    :icon="faBars"
                    class="navigation__mobile-button-open"
                />

                <font-awesome-icon
                    class="navigation__mobile-button-close"
                    :icon="faXmark"
                />
            </button>

            <ul class="navigation__mobile-list">
                <li
                    class="navigation__mobile-list-item"
                    v-for="item in navItems"
                    :key="item.id"
                    @click="toggleNavigation"
                >
                    <router-link
                        :to="item.link.cached_url"
                        class="navigation__mobile-list-item-link"
                    >
                        {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faBars, faXmark} from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
    navItems: {
        type: Object,
        required: true
    },
})

const navigationIsOpen = ref(false);

const toggleNavigation = () => {
    navigationIsOpen.value = !navigationIsOpen.value;
}

</script>

<style lang="scss">
@use "fs-navigation";
</style>