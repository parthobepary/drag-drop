<template>
  <div :class="drafts.props?.container_bg?.value">
    <div>
      <h1 :class="drafts.props.heading_class.value">{{ drafts.props.heading.value }}</h1>
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