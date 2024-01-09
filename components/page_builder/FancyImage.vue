<template>
    <div :style="drafts?.props?.style.value">
        <img :class="drafts?.props?.classes?.value" src="../../public/photo-1575936123452-b67c3203c357.jpeg" alt="">
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