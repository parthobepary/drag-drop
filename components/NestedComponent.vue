<template>
    <div class="flex justify-center">
        <div class="w-4/12 mr-2">
            <LazyNested :tasks="list" />
        </div>
        <div class="">
            <RawDisplay class="w-64" :value="list" />
        </div>
    </div>
</template>
  
<script setup>
const list = ref([
    {
        name: 'task 1',
        tasks: [
            {
                name: 'task 2',
                tasks: [],
            },
        ],
    },
    {
        name: 'task 3',
        tasks: [
            {
                name: 'task 4',
                tasks: [],
            },
        ],
    },
    {
        name: 'task 5',
        tasks: [],
    },
])
</script>
<style scoped></style>