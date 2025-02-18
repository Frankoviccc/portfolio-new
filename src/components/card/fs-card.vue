<template>
    <section
        ref="target"
        class="card"
        :class="[{'fade-in-visible': isVisible, 'fade-in': true}]"
    >
        <div class="card__inner">
            <img
                :src="items.image.filename"
                :alt="items.alt"
                class="card__image"
            >
            <div class="card__text">
                <h2 class="card__title">
                    {{ items.title }}
                </h2>
                <p class="card__subtitle">
                    {{ items.text }}
                </p>
            </div>


            <div class="card__icons">
                <font-awesome-icon
                    :icon="faHtml5"
                    style="color: #FFAFCC"
                />
                <font-awesome-icon
                    :icon="faSass"
                    style="color: #FFAFCC"
                />
                <font-awesome-icon
                    :icon="faJs"
                    style="color: #FFAFCC"
                />
                <font-awesome-icon
                    :icon="faVuejs"
                    style="color: #FFAFCC"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faHtml5, faJs, faVuejs, faSass} from '@fortawesome/free-brands-svg-icons'
import {ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

defineProps({
    items: {
        type: Object,
        required: true
    }
})

const isVisible = ref(false);
const target = ref(null);

useIntersectionObserver(target, ([{isIntersecting}]) => {
    if (isIntersecting) isVisible.value = true;
}, { threshold: .5 });
</script>

<style lang="scss">
@use 'fs-card';
</style>