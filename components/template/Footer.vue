<template>
  <div class="w-full">
    <VueDraggableNext ghost-class="ghost" v-for="(item ,i) in tasks.details_com">
        <VueDraggableNext :list="item.footerContent" @change="log" class=" grid grid-cols-4">
          <div v-for="(footerItem ,i) in item.footerContent" class=" p-6" >
            <div v-if="footerItem.id===221" class="bg-green-300">
              {{ footerItem.logo }}
              {{ footerItem.socialLogo }}
              {{ footerItem.phone }}
              {{ footerItem.email }}
              {{ footerItem.address }}
            </div>
            <div v-if="footerItem.id===222" class="bg-pink-300">
              {{ footerItem.title }}
              {{ footerItem.linkOne }}
              {{ footerItem.linkTwo }}
              {{ footerItem.linkThree }}
            </div>
            <div v-if="footerItem.id===223" class="bg-sky-300">
              {{ footerItem.title }}
              {{ footerItem.linkOne }}
              {{ footerItem.linkTwo }}
              {{ footerItem.linkThree }}
            </div>
            <div v-if="footerItem.id===224" class="bg-gray-300">
              {{ footerItem.title }}
              {{ footerItem.linkOne }}
              {{ footerItem.linkTwo }}
              {{ footerItem.linkThree }}
            </div>
          </div>
        </VueDraggableNext>
    </VueDraggableNext>
    <div class="bg-[#8881] flex items-center justify-center w-full">
      <p class="text-center">Copy right @2023</p>
    </div>
  </div>
</template>

<script setup>
import {VueDraggableNext} from 'vue-draggable-next';

const props = defineProps({
  tasks: {
    type: Array,
    default: []
  }
})

</script>