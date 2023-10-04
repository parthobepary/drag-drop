<template>
    <div>
        <div>
            <div class="flex justify-around pt-2 gap-4">
                <button @click="target = 'element'" class="bg-green-400 w-full py-2 rounded text-white">Elements</button>
                <button v-if="editItem && Object.keys(editItem).length" @click="target = 'setting'" class="bg-red-400 w-full py-2 rounded text-white">Setting</button>
            </div>
            <!-- show data -->
            <div class="mt-2" v-if="target == 'element'">
                <PageBuilderTreeView :drafts="drafts" />
            </div>
            <div class="mt-2" v-if="target == 'setting'">
                <PageBuilderBlogsEdit :drafts="drafts" :editItem="editItem" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
const props = defineProps({
    drafts: {
        type: Array,
        default: []
    },
    editItem: {
        type: Number,
        default: null
    }
});
const target = ref('element')
</script>