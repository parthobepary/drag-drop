<template>
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 p-2">
        <VueDraggableNext ghost-class="ghost" v-for="item ,i in tasks.details_com">
            <div class="w-ful">
                <p class="text-[26px]">{{ item.title }}</p>
                <p>{{ item.sub_title }}</p>
            </div>
        </VueDraggableNext>
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