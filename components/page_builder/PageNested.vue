<template>
    <div class="bg-white">
        <div>
            <!-- <button>Edit mode</button> -->
        </div>
        <!-- <VueDraggableNext @change="log" class="dragArea" tag="ul" :list="drafts" :group="{ name: 'task', components: [] }">
            <li v-for="el, idx in drafts" :key="el.name" class="px-2">
                <component :is="el.component_name" :drafts="el">
                   <PageNested :drafts="el.components" />
                </component>
                <PageNested :drafts="el.components" />
            </li>
        </VueDraggableNext> -->


        <VueDraggableNext class="dragArea list-group w-full" :list="drafts" group="task" @change="log" :move="checkMove">
            <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="element in drafts"
                :key="element.name">
                <component :is="element.component_name" :drafts="element"></component>
            </div>
        </VueDraggableNext>
    </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next';
import PageNested from './PageNested.vue';
import BodyContainer from './BodyContainer';
import Header from './Header';
import NavIteam from './NavIteam';
import RoundLogo from './RoundLogo';
import SquareLogo from './SquareLogo';

export default {
    name: 'PageNested',
    components: {
        VueDraggableNext,
        BodyContainer,
        Header,
        SquareLogo,
        RoundLogo,
        NavIteam
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