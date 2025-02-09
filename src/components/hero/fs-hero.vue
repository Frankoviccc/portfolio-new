<template>
    <section class="hero">
        <div class="hero__inner">
            <div class="hero__column">
                <div class="hero__column-header">
                    <h1 class="hero__column-title">
                        {{ blok.first_name }}
                    </h1>
                    <h1 class="hero__column-title">
                        {{ blok.surname }}
                    </h1>
                </div>
                <p class="hero__column-subtitle">
                    {{ blok.text }}
                </p>
                <div class="hero__column-container">
                    <div class="hero__column-counter">
                        <h2 class="hero__column-counter-title">
                            {{ counters.counter1 }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_1_subtitle }}
                        </p>
                    </div>

                    <div class="hero__column-counter">
                        <h2 class="hero__column-counter-title">
                            {{ counters.counter2 }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_2_subtitle }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hero__column">
                <div
                    class="hero__column-icon hero__column-icon--black"
                     v-if="blok.icons.length > 0"
                >
                    <img
                        :src="blok.icons[0].filename"
                        :alt="blok.icons[0].alt"
                    >
                </div>

                <div class="hero__column-icon"
                    v-if="blok.icons.length > 0"
                >
                    <img
                        v-for="(icon) in blok.icons.slice(1)"
                        :key="icon.id"
                        :src="icon.filename"
                        :alt="icon.alt"
                    >
                </div>
                <img
                    :src="blok.media.filename"
                    :alt="blok.media.alt"
                    class="hero__column-image"
                >
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
    blok: {
        type: Object,
    }
})

const counters = ref({
    counter1: 0,
    counter2: 0
});

const animateCounter = (key, value) => {
    counters.value[key] = 0;

    let step = Math.ceil(value / 100 * 3);
    let current = 0;

    const interval = setInterval(() => {
        current += step;
        if (current >= value) {
            counters.value[key] = value;
            clearInterval(interval);
        } else {
            counters.value[key] = current;
        }
    }, 50);
};

onMounted(() => {
    animateCounter("counter1", props.blok.counter_1_title);
    animateCounter("counter2", props.blok.counter_2_title);
})
</script>

<style lang="scss">
@use 'fs-hero';
</style>