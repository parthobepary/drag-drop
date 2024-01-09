<template>
    <div
        :style="`background-image: url(${drafts?.props?.bg_image?.value}); ${drafts?.props?.style?.value} background-color: ${drafts?.props?.bg_color?.value};`">
        <div :class="drafts?.props?.classes?.value">
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