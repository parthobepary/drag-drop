<template>
    <div :class="drafts.props.style" style="min-height: 10vh;">
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