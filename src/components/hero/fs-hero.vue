<template>
    <section
        ref="target"
        class="hero"
        :class="[{'fade-in-visible': isVisible, 'fade-in': true}]"
    >
        <div class="hero__inner">
            <div class="hero__column">
                <div class="hero__column-header">
                    <h1 class="hero__column-title">
                        {{ blok.title }}
                        <span class="hero__column-span u-heading-1 u-highlight">
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
                            <span class="hero__column-counter-prefix">
                                +
                            </span>
                            {{ `${counters.counter1}` }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_1_subtitle }}
                        </p>
                    </div>

                    <div class="hero__column-counter">
                        <h2 class="hero__column-counter-title">
                            <span class="hero__column-counter-prefix">
                                +
                            </span>
                            {{ `${counters.counter2}` }}
                        </h2>
                        <p class="hero__column-counter-subtitle">
                            {{ blok.counter_2_subtitle }}
                        </p>
                    </div>
                </div>
                <div class="hero__column-articles">
                    <hero-article
                        v-for="(article, index) in articles"
                        :link="article.link.cached_url"
                        :title="article.title"
                        :icons="icons[index]"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {onMounted, ref} from "vue";
import HeroArticle from "@/components/hero/article/hero-article.vue";
import { faFolder, faSquarePen } from "@fortawesome/free-solid-svg-icons";
import {useIntersectionObserver} from "@vueuse/core";

const props = defineProps({
    blok: {
        type: Object,
        required: true,
    }
})

const articles = props.blok.articles;

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

const icons = [
    faFolder,
    faSquarePen
];

onMounted(() => {
    animateCounter("counter1", props.blok.counter_1_title);
    animateCounter("counter2", props.blok.counter_2_title);
})

const isVisible = ref(false);
const target = ref(null);

useIntersectionObserver(target, ([{isIntersecting}]) => {
    if (isIntersecting) isVisible.value = true;
});
</script>

<style lang="scss">
@use 'fs-hero';
</style>