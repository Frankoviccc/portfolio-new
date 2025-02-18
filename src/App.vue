<template>
  <Suspense>
        <layout>
            <router-view></router-view>
        </layout>
  </Suspense>
</template>

<script setup>
import layout from './components/layout.vue';
</script>

<style lang="scss">
@use 'scss/reset';
@use 'scss/typography';
@use 'scss/variables/colors';

#app {
    @media (width > 1135px) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
}

.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in;
}

.fade-in-visible {
    opacity: 1;
}
</style>

