<template>
    <div>
        <div class="px-1">
            <div v-for="value, key of editItem.props" :key="i">
                <p class="font-bold">{{ key }}</p>
                <div v-if="value.type === 'string'">
                    <textarea class="w-full mb-2 p-2" v-model="value.value" type="text" />
                </div>
                <div v-else-if="value.type === 'array'">
                    <div class="grid grid-cols-2 gap-2">
                        <div v-for="p, ind in value.value" class="bg-gray-300 p-2">

                            <div class="flex justify-between">
                                <button @click="value.value.push(p)"
                                    class="text-white font-bold bg-green-500 px-1 rounded-md pb-1">+</button>
                                <button v-if="value.value.length > 1" @click="value.value.splice(ind, 1)"
                                    class="text-red-600 font-bold bg-white px-1 rounded-md">X</button>
                            </div>
                            <div>Name</div>
                            <input class="w-full mb-2 p-2" v-model="p.name" type="text" />
                            <div>Link</div>
                            <input class="w-full mb-2 p-2" v-model="p.value" type="text" />
                            <div>Classes</div>
                            <input class="w-full mb-2 p-2" v-model="p.classes" type="text" />
                        </div>
                    </div>
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