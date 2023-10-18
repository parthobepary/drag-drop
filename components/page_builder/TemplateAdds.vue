<template>
    <section :class="drafts.props.container_bg.value">
        <div :class="drafts.props.container_class.value">
            <div :class="drafts.props.root_class.value">
                <div :class="drafts.props.classes.value">
                    <h1 :class="drafts.props.heading_style.value">{{ drafts.props.heading_text.value }}</h1>
                    <p :class="drafts.props.description_style.value">{{ drafts.props.description_text.value }}</p>
                    <button :class="drafts.props.button_style.value">{{ drafts.props.button_text.value }}</button>
                </div>
            </div>
        </div>
    </section>
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