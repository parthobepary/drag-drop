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


        <VueDraggableNext class="dragArea list-group mx-2" :list="drafts" group="task">
            <div class="list-group-item px-1" v-for="(element, i) in drafts" :key="element.id + i">
                <!-- <button @click="deleteBlogs(element.id)" class="bg-red-600 px-2 text-white rounded-md inline-block">X</button> -->
                <div @click="editMode(element.id)">
                    <component :is="element.component_name" :drafts="element">
                        <div :class="element.props.classes.value">
                            <div v-for="(ele, j) in element.components || []" :key="ele.id + j">
                                <!-- <div>{{ ele.id }}</div> -->
                                <VueDraggableNext class="dragArea list-group w-full my-5" :list="ele.components"
                                    group="task">
                                    <div @click="editMode(ele.id)">
                                        <PageNested :drafts="ele.components" />
                                    </div>
                                </VueDraggableNext>
                                <!-- <PageNested :drafts="element.components" /> -->
                            </div>
                        </div>
                        <!-- <PageNested :drafts="element.components"/> -->
                    </component>
                </div>
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
        const deleteBlogs = (id) => {
            console.log(id);
            props.drafts.splice(id, 1)
        }

        const editMode = (id) => {
            console.log(id);
        }

        const log = (event) => {
            console.log(event)
        };

        return { log, deleteBlogs, editMode }
    }
}

</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>