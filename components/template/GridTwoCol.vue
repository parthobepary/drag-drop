<template>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 p-2">
        <slot />
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';

const props = defineProps({
    blogs: {
        type: Array,
        default: []
    }
})

</script>