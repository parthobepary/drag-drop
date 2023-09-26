<template>
    <div class="bg-white">
        <div>
            <!-- <button>Edit mode</button> -->
        </div>
        <VueDraggableNext @change="log" class="dragArea" tag="ul" :list="tasks" :group="{ name: 'task', components: [] }">
            <li v-for="el, idx in tasks" :key="el.name" class="px-2">
                <div class="flex justify-between">
                    <component :is="el.component_name" :tasks="el"/>
                    <!-- <div class="flex gap-3">
                        <button class="bg-red-500 text-white rounded-md px-1" @click="removeAt(idx)">X</button>
                        <button class="bg-red-500 text-white rounded-md px-1" @click="editAt(idx)">E</button>
                    </div> -->
                </div>
                <LazyNested :tasks="el.components" />
            </li>
        </VueDraggableNext>
    </div>
</template>
<script>
import {VueDraggableNext}  from 'vue-draggable-next';
import GridTwoCol from '~/components/template/GridTwoCol.vue';
import Header from '~/components/template/Header.vue';
import Card from '~/components/template/Card.vue';
import Button from '~/components/template/Button.vue';
import Footer from '~/components/template/Footer.vue';
import Image from '~/components/template/Image.vue';

export default {
    name: 'Nested',
    components: {
        GridTwoCol,
        Header,
        Card,
        Button,
        Footer,
        Image,
        VueDraggableNext
    },
    props: {
        tasks: {
            required: true,
            type: Array,
        }
    },
    setup(props) {
        const removeAt = (id) => {
            console.log(id);
            props.tasks.splice(id, 1)
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