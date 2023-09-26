<template>
    <div class="bg-white">
        <div>
            <!-- <button>Edit mode</button> -->
        </div>
        <VueDraggableNext @change="log" class="dragArea" tag="ul" :list="drafts" :group="{ name: 'task', components: [] }">
            <li v-for="element, idx in drafts" :key="element.name" class="px-2">
                    <component :is="element.component_name" :drafts="element">
                        <div v-for="ele, i in element.components">
                            <!-- <component :is="ele.component_name" :drafts="ele" /> -->
                            <PageNested :drafts="element.components" />
                        </div>
                    </component>
                    <!-- <PageNested :drafts="element.components" /> -->
            </li>
        </VueDraggableNext>
    </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next';
import PageNested from './PageNested.vue';
import BodyContainer from './BodyContainer';
import Header from './Header';

export default {
    name: 'PageNested',
    components: {
        VueDraggableNext,
        BodyContainer,
        Header
    },
    props: {
        drafts: {
            required: true,
            type: Array,
        }
    },
    setup(props) {
        const removeAt = (id) => {
            console.log(id);
            props.drafts.splice(id, 1)
        }

        const editAt = (id) => {
            console.log(id);
        }

        const log = (event) => {
            console.log(event)
        };

        return { log, removeAt, editAt }
    }
}

</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>