<template>
    <div class="bg-white">
        <div>
            <!-- <button>Edit mode</button> -->
        </div>
        <!-- <VueDraggableNext @change="log" class="dragArea" tag="ul" :list="drafts" :group="{ name: 'task', components: [] }">
            <li v-for="el, idx in drafts" :key="el.name" class="px-2">
                <component :is="el.component_name" :drafts="el">
                   <PageNested :drafts="el.components" />
                </component>
                <PageNested :drafts="el.components" />
            </li>
        </VueDraggableNext> -->


        <VueDraggableNext class=" list-group mx-2 ml-4" :list="drafts" group="task">
            <div class="list-group-item px-1 relative" v-for="(element, i) in drafts" :key="element.id + i">
                <button @click="editMode(element)"
                    class="absolute top-4 -left-4 bg-red-700 px-2 text-white rounded-md inline-block">!</button>
                <div>
                    <component :is="element.component_name" :drafts="element">
                        <div :class="element?.props?.classes?.value">
                            <div v-for="(ele, j) in element.components || []" :key="ele.id + j">
                                <VueDraggableNext class="dragArea list-group w-full my-5"
                                    :class="ele?.props?.classes?.value" :list="ele.components" group="task">
                                    <div>
                                        <PageNested :drafts="ele.components" />
                                    </div>
                                </VueDraggableNext>
                                <!-- <PageNested :drafts="element.components" /> -->
                            </div>
                        </div>
                        <!-- <PageNested :drafts="element.components"/> -->
                    </component>
                </div>
            </div>
        </VueDraggableNext>
    </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next';
import PageNested from './PageNested.vue';
import BodyContainer from './BodyContainer';
import AwsamTemplete from './AwsamTemplete';
import Navbar from './Navbar';
import NavigationTitle from './NavigationTitle';
import NavigationItems from './NavigationItems';
import FenceButton from './FenceButton';
import TemplateHeaderNavItems from './TemplateHeaderNavItems';
import TemplateHeaderLogo from './TemplateHeaderLogo';
import TemplateFooter from './TemplateFooter';
import TemplateBannerImage from './TemplateBannerImage';
import TemplateBannerText from './TemplateBannerText';
import TemplateAdds from './TemplateAdds';
import TemplateCard from './TemplateCard';
import TemplateFaq from './TemplateFaq';

import TextComponent from './TextComponent';
import SquareLogo from './SquareLogo';
import { ref } from 'vue'
import { useBlocksStore } from '../../stores/blocks'

export default {
    name: 'PageNested',
    components: {
        VueDraggableNext,
        BodyContainer,
        Navbar,
        SquareLogo,
        NavigationItems,
        NavigationTitle,
        TextComponent,
        TemplateHeaderNavItems,
        TemplateHeaderLogo,
        TemplateFooter,
        TemplateBannerImage,
        TemplateBannerText,
        TemplateCard,
        TemplateFaq,
        TemplateAdds,
        FenceButton,
        AwsamTemplete
    },
    props: {
        drafts: {
            required: true,
            type: Array,
        }
    },
    setup(props, { emit }) {
        const id = ref(null);
        const blocksStore = useBlocksStore()
        const deleteBlogs = (id) => {
            console.log(id);
            props.drafts.splice(id, 1)
        }

        const editMode = (element) => {

            blocksStore.setBlocks(element)
        }

        const log = (event) => {
            console.log(event)
        };

        return { log, deleteBlogs, editMode, id }
    }
}

</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>