<template>
    <div :style="`background:${drafts.props.bg_color.value}`">
        <div :style="drafts.props.style.value" :class="drafts.props.classes.value" class="">
            <div>
                <h1 :class="drafts.props.nav_title_classes.value">{{ drafts.props.nav_title.value }}<span :class="drafts.props.nav_sub_title_classes.value">{{  drafts.props.sub_nav_title.value }}</span></h1>
            </div>
            <div class="flex gap-x-4">
                <div v-for="it, i in drafts.props.navItems.value" :key="i">
                    <nuxt-link :class="it.classes" :to="it.link">{{ it.name }}</nuxt-link>
                </div>
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