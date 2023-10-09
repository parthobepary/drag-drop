<template>
    <div>
        <div class="px-1">
            <div v-for="value, key of editItem.props" :key="i">
                {{ key }}
                <div v-if="value.type === 'string'">
                    <input class="mb-2 p-2" v-model="value.value" type="text" />
                </div>
                <div v-else-if="value.type === 'array'">
                    <div v-for="p in value.value">
                        <div>Name</div>
                        <input class="mb-2 p-2" v-model="p.name" type="text" />
                        <div>Link</div>
                        <input class="mb-2 p-2" v-model="p.link" type="text" />
                    </div>
                    <button @click="value.value.push({ name: 'Homes', link: '/', classes: '' })">
                        Add new
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


const props = defineProps({
    editItem: {
        type: Object,
        default: {}
    }
});
</script>