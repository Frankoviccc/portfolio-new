<template>
    <section class="hero">
        <div class="hero__inner">
            <div class="hero__column">
                <div class="hero__column-header">
                    <h1 class="hero__column-title">
                        {{ blok.title }}
                        <span class="hero__column-span u-heading-1">
                        {{ blok.span }}
                        </span>
                    </h1>
                    <p class="hero__column-subtitle">
                        {{ blok.text }}
                    </p>
                </div>
                <div class="hero__column-container">
                    <div class="hero__column-counter">
                        <h2 class="hero__column-counter-title">
                            {{ `+${counters.counter1}` }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_1_subtitle }}
                        </p>
                    </div>

                    <div class="hero__column-counter">
                        <h2 class="hero__column-counter-title">
                            {{ `+${counters.counter2}` }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_2_subtitle }}
                        </p>
                    </div>
                </div>
                <div class="hero__column-articles">
                    <hero-article :items="blok.articles" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import HeroArticle from "@/components/hero/article/hero-article.vue";

const props = defineProps({
    blok: {
        type: Object,
        required: true,
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