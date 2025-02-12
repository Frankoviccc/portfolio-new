<template>
    <div class="message">
        <form class="message__form">
            <div class="message__form-header">
                <label class="message__form-label">
                    <p class="message__form-label-title">
                            {{ nameLabel }}
                    </p>
                    <input
                        class="message__form-input"
                        :placeholder="namePlaceholder"
                    >
                </label>

                <label class="message__form-label">
                    <p class="message__form-label-title">
                        {{ emailLabel }}
                    </p>
                    <input
                        class="message__form-input"
                        :placeholder="emailPlaceholder"
                    >
                </label>
            </div>

            <div class="message__form-message">
                <label class="message__form-label">
                    <p class="message__form-label-title">
                        {{ messageLabel }}
                    </p>
                    <textarea
                        class="message__form-textarea"
                        :placeholder="messagePlaceholder"
                    ></textarea>
                </label>
            </div>


        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    nameLabel: {
        type: String,
        required: false,
        default: 'Name'
    },
    namePlaceholder: {
        type: String,
        required: false,
        default: 'Enter your name'
    },
    emailLabel: {
        type: String,
        required: false,
        default: 'Email'
    },
    emailPlaceholder: {
        type: String,
        required: false,
        default: 'Enter your email'
    },
    messageLabel: {
        type: String,
        required: false,
        default: 'Message'
    },
    messagePlaceholder: {
        type: String,
        required: false,
        default: 'Enter your message'
    },
    buttonLabel: {
        type: String,
        required: false,
        default: 'Submit'
    }
})
</script>

<style lang="scss">
@use 'fs-message';
</style>