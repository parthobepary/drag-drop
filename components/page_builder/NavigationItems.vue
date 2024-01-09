<template>
    <div :style="drafts.props.style.value">
        <div :class="drafts.props.classes.value">
            <div v-for="it, i in drafts.props.navItems.value" :key="i">
                <nuxt-link :class="it.classes" :to="it.link">{{ it.name }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    drafts: {
        type: Object,
        default: {}
    },

})
</script>