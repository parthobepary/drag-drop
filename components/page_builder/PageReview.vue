<template>
    <div class="bg-white">
        <div>
            <div class="" v-for="(element, i) in drafts" :key="element.id + i">
                <component :is="element.component_name" :drafts="element">
                    <div :class="element?.props?.classes?.value">
                        <div v-for="(ele, j) in element.components || []" :key="ele.id + j">
                            <di>
                                <PageReview :drafts="ele.components" />
                            </di>
                        </div>
                    </div>
                </component>
            </div>
        </div>
    </div>
</template>
<script>
import PageReview from './PageReview.vue';
import BodyContainer from './BodyContainer';
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
import AwesomeBanner from './AwesomeBanner';
import FancyImage from './FancyImage';
import FancyFooter from './FancyFooter';
import SectionContainerModal from './SectionContainerModal.vue'


import TextComponent from './TextComponent';
import SquareLogo from './SquareLogo';

export default {
    name: 'PageReview',
    components: {
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
        AwesomeBanner,
        FancyImage,
        FancyFooter,
        SectionContainerModal
    },
    props: {
        drafts: {
            required: true,
            type: Array,
        }
    },

}

</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>