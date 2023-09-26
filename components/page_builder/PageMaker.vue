<template>
    <div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 bg-red-200 w-full min-h-[100vh]">
                <!-- draggable component -->
                <VueDraggableNext class="dragArea list-group w-full" :list="blogs"
                    :group="{ name: 'task', pull: 'clone', put: false }" :sort="true" @change="log" :clone="cloneDog"
                    :move="checkMove">
                    <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in blogs"
                        :key="element.name">
                        {{ element.name }}
                    </div>
                </VueDraggableNext>
            </div>
            <div class="col-span-3 bg-gray-200 w-full min-h-[100vh]">
                <!-- Editor component -->
                <PageBuilderPageNested :drafts="drafts" />
            </div>
            <div class="col-span-1 bg-blue-200 w-full min-h-[100vh]">
                <!-- Source code -->
                <pre>{{ drafts }}</pre>
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';


// draggable js

let idGlobal = 8;
const blogs = ref([
    {
        id: 1,
        name: 'Header',
        component_name: 'Header',
        props: {},
        components: []
    }
]);


const drafts = ref([
    {
        id: 6, name: 'Body', component_name: 'BodyContainer', props: {
            style: 'container mx-auto px-2 py-2 bg-red-100 min-h-96'
        }, components: [
            {
                "id": 13,
        "name": "Header",
        "component_name": "Header",
        "components": []
            }
        ]
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
</script>