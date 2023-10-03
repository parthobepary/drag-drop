<template>
    <div>
        <div>
            <pre>{{ drafts }}</pre>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    drafts: {
        type: Array,
        default: []
    }
});
</script>