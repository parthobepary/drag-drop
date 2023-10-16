<template>
    <div>
        <div>
            <!-- <pre>{{drafts}}</pre> -->
            <!-- show data -->
            <div>
                <VueDraggableNext class="dragArea list-group mx-2" :list="drafts" group="task">
                    <div class="list-group-item px-1" v-for="(element, i) in drafts" :key="element.id + i">
                        <div class="flex gap-x-2">
                            <p>{{ element.name }}</p><button @click="deleteBlogs(element.id)"
                                class="bg-red-600 px-2 text-white rounded-md inline-block">X</button>
                        </div>
                        <div class="pl-6" v-for="(ele, j) in element.components || []" :key="ele.id + j">
                            <VueDraggableNext class="dragArea list-group w-full" :list="ele.components" group="task">
                                <p>{{ ele.name }}</p>
                                <TreeView :drafts="ele.components" />
                            </VueDraggableNext>
                        </div>
                    </div>
                </VueDraggableNext>
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
import TreeView from './TreeView.vue'
const props = defineProps({
    drafts: {
        type: Array,
        default: []
    }
});
const target = ref('element');
const deleteBlogs = (id) => {
    const removeIndex = props.drafts.findIndex((el) => el.id === id)
    if (removeIndex === -1)
        return 'Item not found'
    else props.drafts.splice(removeIndex, 1)
}
</script>