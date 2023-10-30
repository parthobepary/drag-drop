<template>
    <div :class="drafts.props?.container_bg?.value">
        <div>
            <h1 :class="drafts.props.heading_class.value">{{ drafts.props.heading.value }}</h1>
            <div class="flex justify-between py-4">
              <div v-for="item, i in drafts.props.elements.value" :key="i">
                <p :class="item.classes">{{ item.name }}</p>
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
    }
})
</script>
<style></style>