<template>
    <div>
        <component :is="blog.component_name" :drafts="blog">
            <div v-for="it in blog.components">
                {{ it }}
            </div>
        </component>
    </div>
</template>
<script>

import BodyContainer from './BodyContainer';
import Header from './Header';
import { VueDraggableNext } from 'vue-draggable-next';

export default {
    name: 'PageNested',
    components: {
        VueDraggableNext,
        BodyContainer,
        Header
    },
    props: {
        blog: {
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