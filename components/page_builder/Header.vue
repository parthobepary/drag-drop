<template>
    <div class="flex justify-between w-full bg-green-200 px-2 py-4">
        <div>
            <h1>Logo</h1>
            <!-- {{ drafts }} -->
        </div>
        <div>
            <ul class="flex gap-x-4">
                <li class="tex-[22px] font-bold">Home</li>
                <li class="tex-[22px] font-bold">About</li>
                <li class="tex-[22px] font-bold">Contact</li>
                <li class="tex-[22px] font-bold">Blog</li>
            </ul>
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