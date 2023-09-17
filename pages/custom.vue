<template>
    <div>
        <p class="text-center">This is custom web page builder</p>
        <hr />

        <!-- grid -->
        <div>
            <div class="grid grid-cols-5">
                <div class="col-span-1 bg-red-200 w-full h-[100vh]">
                    <h1 class="w-full bg-gray-600 text-white text-center">Component</h1>
                    <div>
                        <VueDraggableNext class="dragArea list-group w-full" :list="list1"
                            :group="{ name: 'task', pull: 'clone', put: false }" :sort="true" @change="log"
                            :clone="cloneDog" :move="checkMove">
                            <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in list1"
                                :key="element.name">
                                {{ element.name }}
                            </div>
                        </VueDraggableNext>
                    </div>
                </div>
                <div class="col-span-3 bg-blue-400 w-full h-[100vh]">
                    <h1 class="w-full bg-gray-600 text-white text-center">Page Element</h1>
                    <div class="px-4">
                        <LazyNested :tasks="list" />
                    </div>
                </div>
                <div class="col-span-1 bg-gray-200 w-full h-[100vh]">
                    <h1 class="w-full bg-gray-600 text-white text-center">source code</h1>
                    <LazyRawDisplay class="w-64" :value="list" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';

const enabled = true;
let idGlobal = 8;
const list1 = ref([
    { id: 1, name: 'Component-1', tasks: [] },
    { id: 2, name: 'Component-2', tasks: [] },
    { id: 3, name: 'Component-3', tasks: [] },
    { id: 4, name: 'Component-4', tasks: [] },
]);

const list = ref([
    {
        id: 5,
        name: 'body',
        tasks: []
    },
])

const cloneDog = ({ id }) => {
    return {
        id: idGlobal++,
        name: `element- ${id}`,
        tasks: []
    };
}
// const checkMove = (evt) => {
//     console.log(evt.draggedContext.element.name);
// }
// const log = (event) => {
//     console.log(event)
// };
</script>
<style></style>