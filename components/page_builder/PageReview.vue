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
import Header from './Header';
import NavIteam from './NavIteam';
import RoundLogo from './RoundLogo';
import SquareLogo from './SquareLogo';
import HeroTxtCard from './HeroTxtCard';
import TemplateHeaderNavItems from './TemplateHeaderNavItems';
import TemplateHeaderLogo from './TemplateHeaderLogo';
import TemplateFooter from './TemplateFooter';
import TemplateBannerImage from './TemplateBannerImage';
import TemplateBannerText from './TemplateBannerText';
import TemplateAdds from './TemplateAdds';
import TemplateCard from './TemplateCard';
import TemplateFaq from './TemplateFaq';
import AwsamTemplete from './AwsamTemplete';

export default {
    name: 'PageReview',
    components: {
        BodyContainer,
        Header,
        SquareLogo,
        RoundLogo,
        NavIteam,
        HeroTxtCard,
        AwsamTemplete,
        TemplateHeaderNavItems,
        TemplateHeaderLogo,
        TemplateFooter,
        TemplateBannerImage,
        TemplateBannerText,
        TemplateCard,
        TemplateFaq,
        TemplateAdds
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