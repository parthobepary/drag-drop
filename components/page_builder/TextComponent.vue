<template>
    <div class="w-full">
        <div>
            <div v-for="item, i in drafts?.props?.elements?.value" :key="i">
                <div>
                    <p :class="item.classes" v-if="item.type == 'text'">{{ item.name }}</p>
                    <p :class="item.classes" v-if="item.type == 'sub-text'">{{ item.name }}</p>
                    <button :class="item.classes" v-if="item.type == 'button'">{{ item.name }}</button>
                </div>
            </div>
        </div>
        <slot />
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