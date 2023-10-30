<template>
  <section :class="drafts.props?.container_bg?.value">
    <div :class="drafts.props?.container_class?.value">
      <div :class="drafts.props?.root_class?.value">
        <div :class="drafts.props?.classes?.value">
          <h1 :class="drafts.props?.heading_style?.value">{{ drafts.props.heading_text.value }}</h1>
          <div class="flex justify-center">
            <img :class="drafts?.props?.review_image?.value" src="../../public/photo-1575936123452-b67c3203c357.jpeg" alt="">
          </div>
          <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text.value }}</p>
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