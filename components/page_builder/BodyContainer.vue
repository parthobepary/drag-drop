<template>
    <div>
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