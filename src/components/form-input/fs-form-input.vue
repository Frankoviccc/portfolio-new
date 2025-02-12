<template>
    <div
        class="form-input"
        :class="type === 'textarea' ? `form-input--${type}` : ''"
    >
        <label
            :for="name"
            class="form-input__label"
        >
            <p class="form-input__title">
                {{ label }}
            </p>
            <input
                v-if="type !== 'textarea'"
                class="form-input__input"
                :placeholder="placeholder"
                :type="type"
            />
            <textarea
                v-else
                class="form-input__textarea"
                :placeholder="placeholder"
            ></textarea>
        </label>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    placeholder: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
        default: 'text',
    },
})
</script>

<style lang="scss">
@use 'fs-form-input';
</style>