<template>
    <div class="bg-white">
        <VueDraggableNext class="dragArea" tag="ul" :list="tasks" :group="{ name: 'task', tasks: [] }">
            <li v-for="el in tasks" :key="el.name">
                <p>{{ el.name }}</p>
                <LazyNested :tasks="el.tasks" class="bg-gray-100 pl-5" />
            </li>
        </VueDraggableNext>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next'


const props = defineProps({
    tasks: {
        required: true,
        type: Array,
    }
})
</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>