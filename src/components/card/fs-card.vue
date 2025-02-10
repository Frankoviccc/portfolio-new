<template>
    <section class="card">
        <div class="card__inner">
            <img
                :src="items.image.filename"
                :alt="items.alt"
                class="card__image"
            >
            <h2 class="card__title">
                {{ items.title }}
            </h2>
            <p class="card__text">
                {{ items.text }}
            </p>

            <div class="card__icons">
                <font-awesome-icon :icon="faHtml5"/>
                <font-awesome-icon :icon="faCss"/>
                <font-awesome-icon :icon="faJs"/>
                <font-awesome-icon :icon="faVuejs"/>
            </div>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5, faCss, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'

defineProps({
    items: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss">
@use 'fs-card';
</style>