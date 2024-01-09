<template>
    <div :style="drafts?.props?.style.value">
        <nuxt-link :to="drafts?.props?.to.value" :class="drafts?.props?.classes.value"> {{ drafts?.props?.button_text.value
        }}</nuxt-link>
    </div>
</template>
<script setup>
const props = defineProps({
    drafts: {
        type: Object,
        default: {}
    }
})
</script>
<style></style>