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
@use 'scss/variables';
</style>

