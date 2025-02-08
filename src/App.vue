<template>
  <Suspense>
        <layout>
            <router-view></router-view>
        </layout>
  </Suspense>
</template>

<script setup>
import layout from './components/Layout.vue';
</script>

