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
    },
    {
        id: 2,
        name: 'Round Logo',
        component_name: 'RoundLogo',
        props: {},
        components: []
    },
    {
        id: 3,
        name: 'sqr Logo',
        component_name: 'SquareLogo',
        props: {},
        components: []
    },
    {
        id: 4,
        name: 'Nav item',
        component_name: 'NavIteam',
        props: {},
        components: []
    },
    {
        id: 5,
        name: 'Row container',
        component_name: 'BodyContainer',
        props: {},
        components: [
            {
                id: 4,
                name: 'Nav item',
                component_name: 'NavIteam',
                props: {},
                components: []
            },
            {
                id: 4,
                name: 'Nav item',
                component_name: 'NavIteam',
                props: {},
                components: []
            }
        ]
    }
]);


const drafts = ref([
])

const cloneDog = (element) => {
    console.log(element);
    return {
        id: element.id + idGlobal++,
        name: element.name + '4444',
        component_name: element.component_name,
        props: element.props,
        components: element.components
    };
}
</script>