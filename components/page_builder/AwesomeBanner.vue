<template>
    <div :style="`background-color: ${drafts.props.bg_color.value}`">
        <div class="container mx-auto">
            <slot />
        </div>
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