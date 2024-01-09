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
                        <VueDraggableNext class="dragArea list-group w-full" :list="blogs"
                            :group="{ name: 'task', pull: 'clone', put: false }" :sort="true" @change="log"
                            :clone="cloneDog" :move="checkMove">
                            <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in blogs"
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
// const blogs = ref([
//     {
//         id: 1, name: 'Header', component_name: 'Header', components: [], details_com: [
//             { id: 21_1, title: 'Logo', style: '' },
//             {
//                 naves: [
//                     { id: 22_1, item: 'Home', style: '' },
//                     { id: 23_1, item: 'Blogs', style: '' },
//                     { id: 24_1, item: 'Contact', style: '' },
//                     { id: 25_1, item: 'About', style: '' },
//                 ]
//             }
//         ]
//     },
//     {
//         id: 2, name: 'Footer', component_name: 'Footer', components: [], details_com: []
//     },
//     {
//         id: 3, name: 'Grid', component_name: 'GridTwoCol', components: [], details_com: [
//             { id: 26_1, title: 'This is left title', sub_title: 'Domestic cattle belong to the genus Bos and the species taurus and indicus.', style: '', comp: [{ component_name: 'Footer' }] },
//             { id: 27_1, title: 'This is rigth title', sub_title: 'Domestic cattle belong to the genus Bos and the species taurus and indicus.', style: '', comp: [] },
//         ]
//     },
//     {
//         id: 4, name: 'Card', component_name: 'Card', components: [], details_com: []
//     },
//     {
//         id: 5, name: 'Image', component_name: 'Image', components: [], details_com: []
//     },
//     {
//         id: 6, name: 'Button', component_name: 'Button', components: [], details_com: []
//     },
// ]);


const list = ref([
    {
        id: 6, name: 'Container', component_name: 'Container', components: []
    },
])

const cloneDog = (element) => {
    console.log(element);
    return {
        id: element.id + idGlobal++,
        name: element.name,
        component_name: element.component_name,
        details_com: element.details_com,
        components: []
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