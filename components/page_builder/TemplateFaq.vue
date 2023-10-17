<template>
    <section>
        <div :style="`background:${drafts?.props?.bg_color?.value}`">
            <div :style="drafts?.props?.style?.value">
                <div>
                    <div class="py-2">
                        <div v-for="item,i in  drafts?.props?.elements?.value" :key="i">
                            <div class="pb-2">
                                <h2 :class="drafts?.props?.question_style?.value">{{ item.name }}</h2>
                                <p :class="drafts?.props?.answer_style?.value">{{ item.value }}</p>
                            </div>
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