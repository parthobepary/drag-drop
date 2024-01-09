<template>
    <div :class="drafts?.props?.container_class?.value">
        <slot />
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