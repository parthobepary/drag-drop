<template>
    <div :style="drafts.props.style.value" :class="drafts.props.classes.value" class="">
        <div>
            <h1 :class="drafts.props.nav_title_classes.value">{{ drafts.props.nav_title.value }}<span
                    :class="drafts.props.nav_sub_title_classes.value">{{ drafts.props.sub_nav_title.value }}</span></h1>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    drafts: {
        type: Object,
        default: {}
    }
})
</script>
<style></style>