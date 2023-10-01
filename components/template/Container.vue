<template>
    <div class="container mx-auto bg-blue-100 h-[100vh] w-full">
      {{ tasks }}
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';

const props = defineProps({
  tasks: {
    type: Array,
    default: []
  }
})
</script>