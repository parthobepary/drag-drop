<template>
    <div>
        <div>
            <div class="flex justify-around pt-2 gap-4">
                <button @click="target = 'element'" class="bg-green-400 w-full py-2 rounded text-white">Elements</button>
                <button v-if="blocksStore.blocks && Object.keys(blocksStore.blocks).length" @click="target = 'setting'" class="bg-red-400 w-full py-2 rounded text-white">Setting</button>
            </div>
            <!-- show data -->
            <div class="mt-2" v-if="target == 'element'">
                <PageBuilderTreeView :drafts="drafts" />
            </div>
            <div class="mt-2" v-if="target == 'setting'">
                <PageBuilderBlogsEdit :drafts="drafts" :editItem="blocksStore.blocks" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
import { useBlocksStore } from '../../stores/blocks'
const blocksStore = useBlocksStore()

const props = defineProps({
    drafts: {
        type: Array,
        default: []
    },
});
const target = ref('element')
</script>