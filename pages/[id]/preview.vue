<template>
    <div class="">
        <div class="">
            <page-builder-page-review :drafts="drafts" />
        </div>
    </div>
</template>

<script setup>
const drafts = ref([]);

onMounted(() => {
    drafts.value = JSON.parse(localStorage.getItem('drafts'))
})
</script>