<template>
    <div :style="drafts.props.style.value" :class="drafts.props.classes.value">
        <div>
            <h1 :class="drafts.props.logo.classes">{{ drafts.props.title.value }}</h1>
        </div>
        <VueDraggableNext class="flex gap-x-4" :list="drafts.props.navItems.value">
            <div v-for="it, i in drafts.props.navItems.value" :key="i">
                <nuxt-link :class="it.classes" :to="it.link">{{ it.name }}</nuxt-link>
            </div>
        </VueDraggableNext>
    </div>
</template>

<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
const props = defineProps({
    drafts: {
        type: Object,
        default: {}
    },

})
</script>