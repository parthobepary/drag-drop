<template>
    <div>
        <div class="bg-[#5A78AD] flex justify-between p-2 items-center px-2">
            <div class="w-full flex items-center">
                <div class="w-full">
                    <page-builder-drop-down />
                </div>
              <div class="w-full">
                <p class="text-[16px] text-white">
                  Title:
                  <span
                      @click="toggleTitleEditMode"
                      v-if="!isTitleEditMode"
                      class="font-[500]">
                        {{ oldTitle }}
                    </span>
                  <input
                      v-else
                      v-model="newTitle"
                      @blur="saveTitle"
                      @keyup.enter="saveTitle"
                      class="font pl-1 bg-[#a1b2d0] rounded-sm">
                  <span v-if="isTitleSaving">Saving...</span>
                </p>
                <p class="text-[16px] text-white py-1">
                  Path:
                  <span
                      @click="togglePathEditMode"
                      v-if="!isPathEditMode"
                      class="font-[500]">
                        {{ oldPath }}
                    </span>
                  <input
                      v-else
                      v-model="newPath"
                      @blur="savePath"
                      @keyup.enter="savePath"
                      class="font pl-1 bg-[#a1b2d0] rounded-sm">
                  <span v-if="isPathSaving">Saving...</span>
                </p>
              </div>
            </div>
            <div class="flex justify-center gap-x-4 w-full">
                <div v-for="de, i in devices">
                    <button @click="changeSize(de.type)"><img :src="de.img" alt=""></button>
                </div>
            </div>
            <div class="flex items-center w-full  justify-end">
              <div class="border-r border-gray-100  px-2">
                <div>
                  <button class="px-2 py-1 hover:ring-1 hover:ring-white rounded-md flex items-center text-[14px] hover:rounded-full text-white"><img class="pr-2" src="/device/reload.png" alt="">Rollback</button>
                </div>
              </div>
              <div class="border-r border-gray-100  px-2">
                <div @click="fullScreen" class="cursor-pointer">
                  <img src="/device/fullscreen.png" alt="">
                </div>
              </div>
              <div class="border-r border-gray-100  px-2">
                <div class="flex gap-x-3">
                  <button><img src="/device/left.png" alt=""></button>
                  <button><img src="/device/right.png" alt=""></button>
                </div>
              </div>
              <div class="border-r border-gray-100  px-2">
                <div>
                  <button class="px-2 py-1  text-[14px] hover:rounded-full text-white cursor-pointer hover:ring-1 hover:ring-white ">Save Draft</button>
                </div>
              </div>
              <div class="border-r border-gray-100  px-2">
                <div>
                  <button class="px-2 py-1 rounded-md text-[14px] text-white cursor-pointer"><img src="/device/eye.png" alt=""></button>
                </div>
              </div>
              <div class="border-r border-gray-100  px-2">
                <div>
                  <button @click="publish" class="px-2 py-1  text-[14px] text-white cursor-pointer hover:rounded-full hover:ring-1 hover:ring-white">Publish</button>
                </div>
              </div>
              <div class="">
                <div>
                  <button class="px-2 py-1 rounded-md text-[14px] text-white cursor-pointer">Exit</button>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {putData} from "~/composables/useRequest";
const devices = [
    { img: '/device/Monitor.png', type: 'm' }, { img: '/device/Smartphone.png', type: 'p' }, { img: '/device/Tablet.png', type: 't' }
]
const isLoading = ref(false);
const newTitle = ref('');
const oldTitle = ref('Untitled');
const isTitleEditMode = ref(false);
const newPath = ref('');
const oldPath = ref('/untitled');
const isPathEditMode = ref(false);
const isTitleSaving = ref(false);
const isPathSaving = ref(false);

const toggleTitleEditMode = () => {
    isTitleEditMode.value = !isTitleEditMode.value;
    if(isTitleEditMode.value)
    {
      newTitle.value = oldTitle.value;
    }
    else
    {
      oldTitle.value = newTitle.value;
      if(!oldTitle.value) oldTitle.value = 'Untitled';
    }
};

const saveTitle = () => {
  if (!newTitle.value) return toggleTitleEditMode();
  isTitleSaving.value = true;
  setTimeout(() => {
    oldTitle.value = newTitle.value;
    toggleTitleEditMode();
    isTitleSaving.value = false;
  }, 1000); // Simulating an asynchronous operation, replace with actual save logic
};

const togglePathEditMode = () => {
    isPathEditMode.value = !isPathEditMode.value;
    if(isPathEditMode.value)
    {
      newPath.value = oldPath.value;
    }
    else
    {
      oldPath.value = newPath.value;
      if(!oldPath.value) oldPath.value = '/untitled';
    }
};
const savePath = () => {
  if (!newPath.value) return togglePathEditMode();
  isPathSaving.value = true;
  setTimeout(() => {
    oldPath.value = newPath.value;
    togglePathEditMode();
    isPathSaving.value = false;
  }, 1000); // Simulating an asynchronous operation, replace with actual save logic
};
const fullScreen = () => {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
};

const changeSize = (device: string) => {
    console.log(device);
};

const publish = async () => {
  isLoading.value = true;
  const formData = {
    published: true
  }
  console.log(formData)
  const {data, pending, error, refresh} = await putData(`page/update-status/6590e238ec02eb2c3e9c06fb`, formData);
  console.log(data);
  // if (error && error.value) {
  //   console.log(error.value);
  // } else {
  //   console.log(data)
  //   siteList.value = data.value.data
  // }
  isLoading.value = false;
};

</script>
<style lang="scss">
.icon_color {
    color: white;
    font-size: 1.5rem;
}

.publish_button {
    background-color: white;
    color: #5A78AD;
    padding: 5px 20px;
    border-radius: 20px;
}

.border-left {
    border-left: 1px solid rgb(161, 168, 197);
    padding-left: 10px;
}
.font:hover {
             cursor: pointer;
             outline: 1px solid #f1f1f1;
             //border: 1px solid #f1f1f1;
           }

.font:focus {
             outline: none;
           }
</style>