<template>
  <section :class="drafts.props?.container_bg?.value">
    <div :class="drafts.props?.container_class?.value">
      <div :class="drafts.props?.root_class?.value">
        <div :class="drafts.props?.classes?.value">
          <div :class="drafts.props?.grid_class?.value">
            <div>
              <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text.value }}</p>
              <img :class="drafts?.props?.product_image?.value" src="../../public/product1.png" alt="">
            </div>
            <div>
              <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text_two.value }}</p>
              <img :class="drafts?.props?.product_image?.value" src="../../public/product2.png" alt="">
            </div>
            <div>
              <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text_two.value }}</p>
              <img :class="drafts?.props?.product_image?.value" src="../../public/product3.png" alt="">
            </div>
          </div>
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