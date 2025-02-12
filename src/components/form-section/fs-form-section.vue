<template>
    <div class="form">
        <fs-form-input
            v-for="field in fields"
            :key="field._uid"
            :label="field.label"
            :name="field.name"
            :placeholder="field.placeholder"
            :type="field.type"
        />

        <button class="form__button">
            {{ blok.button_label }}
        </button>
    </div>
</template>

<script setup>
import FsFormInput from "@/components/form-input/fs-form-input.vue";

const props = defineProps({
    blok: {
        type: Object,
        required: true
    },
})

const fields = props.blok.fields;
</script>

<style lang="scss">
@use 'fs-form-section';
</style>