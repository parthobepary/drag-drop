
<template>
    <div class="flex justify-between items-center w-full">
        <VueDraggableNext v-for="blog, i in blogs.details_com" :list="blogs.details_com" :key="i">
            <VueDraggableNext>
                <div>
                    <h1 class="text-[35px] font-bold">{{ blog.title }}</h1>
                </div>
            </VueDraggableNext>
            <VueDraggableNext>
                <ul>
                    <VueDraggableNext class="flex gap-x-4" :list="blog.naves" @change="log">
                        <li v-for="it, i in blog.naves">{{ it.item }}</li>
                    </VueDraggableNext>
                </ul>
            </VueDraggableNext>
        </VueDraggableNext>
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
<style scoped>
li {
    text-decoration: none;
}
</style>