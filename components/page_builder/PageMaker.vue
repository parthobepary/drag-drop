<template>
    <div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 bg-red-200 w-full min-h-[100vh]">
                <!-- draggable component -->
                <VueDraggableNext class="dragArea list-group w-full" :list="blogs"
                    :group="{ name: 'task', pull: 'clone', put: false }" :sort="true" :clone="cloneDog">
                    <div class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center" v-for="(element, i) in blogs"
                        :key="element.id + i">
                        {{ element.name }}
                    </div>
                </VueDraggableNext>
            </div>
            <div class="col-span-3 bg-gray-200 w-full min-h-[100vh]">
                <!-- Editor component -->
                <PageBuilderPageNested :drafts="drafts" />

                <div class="my-2 flex justify-end mr-1">
                    <button @click="saveData" class="bg-green-500 p-2 rounded-md text-white">Published</button>
                </div>
            </div>
            <div v-if="drafts.length > 0" class="px-2 col-span-1 bg-blue-200 w-full min-h-[100vh]">
                <!-- Source code -->
                <PageSetting :drafts="drafts" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { VueDraggableNext } from 'vue-draggable-next';
import { v4 as uuidv4 } from "uuid";
import PageSetting from './PageSetting.vue';

// draggable js

let idGlobal = 18;
const blogs = ref([
    // our templates
    {
        id: uuidv4(),
        name: "Awesome landing page",
        component_name: "BodyContainer",
        props: {
            classes: {
                type: "string",
                value: ""
            }
        },
        components: [
            {
                id: uuidv4(),
                name: "Left",
                component_name: "LeftComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-blue-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: "grid grid-cols-2"
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateHeaderLogo",
                                        props: {},
                                        components: []
                                    }
                                ]
                            },
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateHeaderNavItems",
                                        props: {},
                                        components: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Right",
                component_name: "RightComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-red-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: "flex justify-between items-end"
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateBannerImage",
                                        props: {},
                                        components: []
                                    }
                                ]
                            },
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateBannerText",
                                        props: {},
                                        components: []
                                    },
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateBannerText",
                                        props: {},
                                        components: []
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Right",
                component_name: "RightComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-red-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: ""
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateAdds",
                                        props: {},
                                        components: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Right",
                component_name: "RightComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-red-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: ""
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateFaq",
                                        props: {},
                                        components: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Right",
                component_name: "RightComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-red-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: "flex justify-between items-end"
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Right",
                                component_name: "RightComponent",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Nav item",
                                        component_name: "TemplateCard",
                                        props: {},
                                        components: []
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                id: uuidv4(),
                name: "Right",
                component_name: "RightComponent",
                props: {
                    classes: {
                        type: "string",
                        value: "bg-red-400"
                    }
                },
                components: [
                    {
                        id: uuidv4(),
                        name: "Row container",
                        component_name: "BodyContainer",
                        props: {
                            classes: {
                                type: "string",
                                value: ""
                            }
                        },
                        components: [
                            {
                                id: uuidv4(),
                                name: "Footer",
                                component_name: "Footer component",
                                props: {
                                    classes: {
                                        type: "string",
                                        value: ""
                                    }
                                },
                                components: [
                                    {
                                        id: uuidv4(),
                                        name: "Footer",
                                        component_name: "TemplateFooter",
                                        props: {},
                                        components: []
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    },

    // our ready component blocks
    //nav bar
    {
        id: uuidv4(),
        name: 'Stylist nav bar',
        component_name: 'Navbar',
        props: {
            style: {
                type: 'string',
                value: ''
            },
            bg_color: {
                type: 'string',
                value: ''
            },
            classes: {
                type: 'string',
                value: 'flex justify-between py-2 items-center'
            },
            navItems: {
                type: 'array',
                value: [
                    { id: uuidv4(), name: 'Home', value: '/', classes: 'font-bold' },
                    { id: uuidv4(), name: 'Review', value: '/', classes: 'font-bold' },
                ]
            },
            nav_title: {
                type: 'string',
                value: 'Awesome',
            },
            nav_title_classes: {
                type: 'string',
                value: 'text-[26px] font-bold',
            },
            sub_nav_title: {
                type: 'string',
                value: '.nav',
            },
            nav_sub_title_classes: {
                type: 'string',
                value: 'text-[18px] text-pink-500',
            },

        },
        components: []
    },
    // text component
    {
        id: uuidv4(),
        name: 'Text card',
        component_name: 'TextComponent',
        props: {
            style: {
                type: 'string',
                value: ''
            },
            bg_color: {
                type: 'string',
                value: ''
            },
            classes: {
                type: 'string',
                value: ''
            },
            elements: {
                type: 'array',
                value: [
                    { name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold' },
                    { name: 'Here is your sub title. You can change it any time any more', type: 'sub-text', classes: 'text-[2opx] font-bold' },
                    { name: 'Btn text', type: 'button', classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3' },
                ]
            }
        },
        components: [
            {
                id: uuidv4(),
                name: 'Custom component',
                component_name: 'CustomComponent',
                props: {},
                components: []
            },
        ]
    },

    // navigation title

    {
        id: uuidv4(),
        name: 'Navigation title',
        component_name: 'NavigationTitle',
        props: {
            style: {
                type: 'string',
                value: ''
            },
            classes: {
                type: 'string',
                value: 'flex justify-between py-2 items-center'
            },
            nav_title: {
                type: 'string',
                value: 'Awesome',
            },
            nav_title_classes: {
                type: 'string',
                value: 'text-[26px] font-bold',
            },
            sub_nav_title: {
                type: 'string',
                value: '.nav',
            },
            nav_sub_title_classes: {
                type: 'string',
                value: 'text-[18px] text-pink-500',
            },
        },
        components: []
    },
    // navigation item
    {
        id: uuidv4(),
        name: 'Navigation item',
        component_name: 'NavigationItems',
        props: {
            style: {
                type: 'string',
                value: ''
            },
            classes: {
                type: 'string',
                value: 'flex gap-x-4 w-full justify-end py-2'
            },
            navItems: {
                type: 'array',
                value: [
                    { id: uuidv4(), name: 'Home', value: '/', classes: 'font-bold' },
                    { id: uuidv4(), name: 'Review', value: '/', classes: 'font-bold' },
                ]
            },
        },
        components: []
    },
    // fancy button
    {
        id: uuidv4(),
        name: 'Fancy Button',
        component_name: 'FenceButton',
        props: {
            style: {
                type: 'string',
                value: 'display: flex; justify-content: start;'
            },
            classes: {
                type: 'string',
                value: 'bg-green-400 text-white px-8 py-2 rounded-md'
            },
            button_text: {
                type: 'string',
                value: 'Change your button text'
            },
            to: {
                type: 'string',
                value: '/'
            },
        },
        components: []
    },
    // single column component
    {
        id: uuidv4(),
        name: 'One column Component',
        component_name: 'BodyContainer',
        props: {
            classes: {
                type: 'string',
                value: ''
            }
        },
        components: [
            {
                id: uuidv4(),
                name: 'Left',
                component_name: 'LeftComponent',
                props: {
                    classes: {
                        type: 'string',
                        value: ''
                    }
                },
                components: []
            },
        ]
    },
    // Two column component
    {
        id: uuidv4(),
        name: 'Two column Component',
        component_name: 'BodyContainer',
        props: {
            classes: {
                type: 'string',
                value: 'grid grid-cols-2'
            }
        },
        components: [
            {
                id: uuidv4(),
                name: 'Left',
                component_name: 'LeftComponent',
                props: {
                    classes: {
                        type: 'string',
                        value: ''
                    }
                },
                components: []
            },
            {
                id: uuidv4(),
                name: 'Right',
                component_name: 'RightComponent',
                props: {
                    classes: {
                        type: 'string',
                        value: ''
                    }
                },
                components: []
            }
        ]
    }
]);


const drafts = ref([
])

const cloneDog = (element) => {
    // console.log({
    //     id: uuidv4(),
    //     component_name: element.component_name,
    //     props: element.props,
    //     components: modifiedComponents(element.components)
    // });
    const json = {
        id: uuidv4(),
        name: element.name,
        component_name: element.component_name,
        props: element.props,
        components: modifiedComponents(element.components)
    }
    const string = JSON.stringify(json)
    return JSON.parse(string);
};
const modifiedComponents = (ele) => {
    return ele.map((il) => {
        return { ...il, id: uuidv4() }
    })
}

const saveData = () => {
    localStorage.setItem('drafts', JSON.stringify(drafts.value))
}
</script>