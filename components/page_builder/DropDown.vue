<template>
    <div class="relative" @click="toggleDropdown">
        <button class="text-[#5A78AD] bg-white px-4 py-2 text-[14px] rounded-md flex items-center justify-between">
            {{ selectedPage }}
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </button>
        <div v-if="isDropdownOpen" id="dropdown"
            class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-full left-0">
            <div class="py-1">
                <template v-for="(option, index) in pages" :key="index">
                    <button @click="selectOption(option)" :class="{ 'bg-gray-200 w-full': selectOption === option }"
                        class="block px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-100 hover:text-gray-900">
                        {{ option }}
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const selectedPage = ref('Select page');
const pages = ref(['home', 'about', 'contact']);
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
const selectOption = (page) => {
    selectedPage.value = page
}
</script>
  
<style scoped></style>
  