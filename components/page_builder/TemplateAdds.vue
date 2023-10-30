<template>
    <section :class="drafts.props?.container_bg?.value">
        <div :class="drafts.props?.container_class?.value">
            <div :class="drafts.props?.root_class?.value">
                <div :class="drafts.props?.classes?.value">
<!--                    <h1 :class="drafts.props?.heading_style?.value">{{ drafts.props.heading_text.value }}</h1>-->
                    <div :class="drafts.props?.grid_class?.value">
                      <div>
                        <Icon name="fluent-emoji-high-contrast:open-book" color="black" size="44" />
                        <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text.value }}</p>
                      </div>
                      <div>
                        <Icon name="fluent-emoji-high-contrast:open-book" color="black" size="44" />
                        <p :class="drafts.props?.description_style?.value">{{ drafts.props.description_text_two.value }}</p>
                      </div>
                    </div>
                    <button :class="drafts.props?.button_style?.value">{{ drafts.props.button_text.value }}</button>
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