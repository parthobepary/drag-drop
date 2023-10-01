<template>
    <div class="bg-pink-200" style="min-height: 10vh;">
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