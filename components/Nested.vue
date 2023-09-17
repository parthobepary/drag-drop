<template>
    <div class="bg-white">
        <VueDraggableNext @change="log" class="dragArea" tag="ul" :list="tasks" :group="{ name: 'task', tasks: [] }">
            <li v-for="el, idx in tasks" :key="el.name" class="px-2">
                <div class="flex justify-between">
                    <p>{{ el.name }}</p>
                    <div class="flex gap-3">
                        <button class="bg-red-500 text-white rounded-md px-1" @click="removeAt(idx)">X</button>
                        <button class="bg-red-500 text-white rounded-md px-1" @click="editAt(idx)">E</button>
                    </div>
                </div>
                <LazyNested :tasks="el.tasks" class="bg-gray-100 pl-5" />
            </li>
        </VueDraggableNext>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';


const props = defineProps({
    tasks: {
        required: true,
        type: Array,
    }
})
let idGlobal = 8
const removeAt = (id) => {
    console.log(id);
    props.tasks.splice(id, 1)
}

const editAt = (id) => {
    console.log(id);
}

const log = (event) => {
    console.log(event)
};
</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>