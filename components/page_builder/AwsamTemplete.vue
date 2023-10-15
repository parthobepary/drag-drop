<template>
    <section :style="`background:${drafts.props.bg_color.value}`">
        <!-- <PageBuilderTemplateHeader />
        <PageBuilderTemplateBanner />
        <PageBuilderTemplateFaq />
        <PageBuilderTemplateAdds />
        <PageBuilderTemplateCard />
        <PageBuilderTemplateFooter /> -->
        <!-- {{ drafts.components }} -->
        <div>
            <slot />
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    drafts: {
        type: Object,
        default: {}
    },

})
</script>
<style>
li {
    text-decoration: none;
    list-style: none;
}
</style>