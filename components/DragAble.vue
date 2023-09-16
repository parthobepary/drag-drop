<template>
    <div class="flex justify-center">
        <div class="flex mx-10">
            <div class="card1 w-64 flex justify-center px-5">
                <VueDraggableNext class="dragArea list-group w-full" :list="list1"
                    :group="{ name: 'people', pull: 'clone', put: false }" :sort="true" @change="log" :move="checkMove">
                    <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in list1"
                        :key="element.name">
                        {{ element.name }}
                    </div>
                </VueDraggableNext>
            </div>
            <div class="card1 w-64 flex justify-center">
                <VueDraggableNext class="dragArea list-group w-full" :list="list2" group="people" @change="log"
                    :move="checkMove">
                    <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in list2"
                        :key="element.name">
                        {{ element.name }}
                    </div>
                </VueDraggableNext>
            </div>
        </div>

        <div class="flex justify-between">
            <LazyRawDisplay class="w-64 mr-1" :value="list1" />
            <LazyRawDisplay class="w-64" :value="list2" />
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next'
const enabled = true;
const list1 = ref([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
]);
const list2 = ref(
    [
        { name: 'Juan', id: 5 },
        { name: 'Edgard', id: 6 },
        { name: 'Johnson', id: 7 },
    ]
);
const dragging = false;



const add = () => {
    console.log('add')
};

const replace = () => {
    console.log('replace')
};

const checkMove = (event) => {
    console.log('checkMove', event.draggedContext)
    console.log('Future index: ' + event.draggedContext.futureIndex)
};

const log = (event) => {
    const { moved, added } = event

    if (moved) console.log('moved', moved)
    if (added) console.log('added', added, added.element)
}
</script>