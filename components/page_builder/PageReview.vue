<template>
    <div class="bg-white">
        <div>
            <div class="list-group-item px-1 text-center" v-for="(element, i) in drafts" :key="element.id + i">
                <component :is="element.component_name" :drafts="element">
                    <div :class="element.props.style">
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

export default {
    name: 'PageReview',
    components: {
        BodyContainer,
        Header,
        SquareLogo,
        RoundLogo,
        NavIteam
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