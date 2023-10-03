<template>
    <div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 bg-red-200 w-full min-h-[100vh]">
                <!-- draggable component -->
                <VueDraggableNext class="dragArea list-group w-full" :list="blogs"
                    :group="{ name: 'task', pull: 'clone', put: false }" :sort="true" @change="log" :clone="cloneDog"
                    :move="checkMove">
                    <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in blogs"
                       :key="element.id">
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

               <div class="flex justify-between px-4">
                 <button @click="treeView()" class="bg-black text-white p-3">Tree View</button>
                 <button @click="settingsView()" class="bg-black text-white p-3">Settings</button>
               </div>
               <div v-if="tree" class="px-2">
                 <LazyPageBuilderSettingsElement/>
               </div>
              <div v-if="settings" class="px-2">
                <pre>{{ drafts }}</pre>
              </div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';

import { v4 as uuidv4 } from 'uuid'
import PageNested from "~/components/page_builder/PageNested.vue";
// draggable js

let idGlobal = 8;
const tree = ref(false)
const settings = ref(false)
const blogs = ref([
    {
        id: uuidv4(),
        name: 'Header',
        component_name: 'Header',
        props: {},
        components: []
    },
    {
        id: uuidv4(),
        name: 'Round Logo',
        component_name: 'RoundLogo',
        props: {},
        components: []
    },
    {
        id: uuidv4(),
        name: 'sqr Logo',
        component_name: 'SquareLogo',
        props: {},
        components: []
    },
    {
        id: uuidv4(),
        name: 'Nav item',
        component_name: 'NavIteam',
        props: {},
        components: []
    },
    {
        id: uuidv4(),
        name: 'Row container',
        component_name: 'BodyContainer',
        props: {},
        components: [
            {
                id: uuidv4(),
                name: 'Nav item',
                component_name: 'NavIteam',
                props: {},
                components: []
            },
            {
                id: uuidv4(),
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
  console.log({
    id: uuidv4(),
    component_name: element.component_name,
    props: element.props,
    components: modifiedComponents(element.components)
  });
  const json = {
    id: uuidv4(),
    component_name: element.component_name,
    props: element.props,
    components: modifiedComponents(element.components)
  }
  const string = JSON.stringify(json)
  return JSON.parse(string);
};
const modifiedComponents = (ele) => {
  return ele.map((il) => {
    return { ...il, id: uuidv4() }
  })
}

const treeView=()=>{
  tree.value = ! tree.value
}

const settingsView=()=>{
  settings.value = ! settings.value
}


</script>