import { defineStore } from 'pinia'

export const useBlocksStore = defineStore('drafts', {
    state: () => ({
        blocks:
            [
                {
                    id: "1bc4b410-38ed-4281-a073-ca01d19f053f",
                    name: "Two column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: "grid grid-cols-2"
                        }
                    },
                    components: [
                        {
                            id: "faa56a07-3e9a-4bb7-97b7-7cce62a72212",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "c6a19f7b-6beb-47a8-bb28-f4a36a42d7b8",
                                    name: "Navigation title",
                                    component_name: "NavigationTitle",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: ""
                                        },
                                        classes: {
                                            type: "string",
                                            value: "flex justify-between py-2 items-center"
                                        },
                                        nav_title: {
                                            type: "string",
                                            value: "Awesome"
                                        },
                                        nav_title_classes: {
                                            type: "string",
                                            value: "text-[26px] font-bold"
                                        },
                                        sub_nav_title: {
                                            type: "string",
                                            value: ".nav"
                                        },
                                        nav_sub_title_classes: {
                                            type: "string",
                                            value: "text-[18px] text-pink-500"
                                        }
                                    },
                                    components: []
                                }
                            ]
                        },
                        {
                            id: "8a26e305-0505-4871-9f7b-68294762e836",
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
                                    id: "d1b9b8b5-524f-474b-b423-bb963c43e6c7",
                                    name: "Navigation item",
                                    component_name: "NavigationItems",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: ""
                                        },
                                        classes: {
                                            type: "string",
                                            value: "flex gap-x-4 w-full justify-end py-2"
                                        },
                                        "navItems": {
                                            type: "array",
                                            value: [
                                                {
                                                    id: "796abe15-7de6-4b62-8360-0ec9929943d2",
                                                    name: "Home",
                                                    value: "/",
                                                    classes: "font-bold"
                                                },
                                                {
                                                    id: "ef874b15-afff-4399-bb07-4c32888813e4",
                                                    name: "Review",
                                                    value: "/",
                                                    classes: "font-bold"
                                                }
                                            ]
                                        }
                                    },
                                    components: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "f6a06ed2-e563-488c-8fc6-987d0378bec7",
                    name: "One column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: ""
                        }
                    },
                    components: [
                        {
                            id: "3f76d052-f8fc-4fbd-ac84-de787613f9df",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "c68456d0-d1c8-4fc4-835a-e6ea4eeaf769",
                                    name: "Awesome Banner",
                                    component_name: "AwesomeBanner",
                                    props: {
                                        bg_color: {
                                            type: "string",
                                            value: ""
                                        },
                                        classes: {
                                            type: "string",
                                            value: "grid grid-cols-2"
                                        }
                                    },
                                    components: [
                                        {
                                            id: "160a3e41-408e-47ab-9f0b-a8fa6120cbcc",
                                            name: "Left",
                                            component_name: "LeftComponent",
                                            props: {
                                                classes: {
                                                    type: "string",
                                                    value: ""
                                                }
                                            },
                                            components: [
                                                {
                                                    id: "5d55bd04-2cf8-45c0-8cf0-a4a10622f4b9",
                                                    name: "Fancy Image",
                                                    component_name: "FancyImage",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: "display: flex; justify-content: start; height: 396px;"
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: ""
                                                        }
                                                    },
                                                    components: []
                                                }
                                            ]
                                        },
                                        {
                                            id: "e9cf86b8-9c3b-40af-9f1a-0348e74bd4a1",
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
                                                    id: "34044c96-5638-43a1-bd40-5e5c5f20a1b3",
                                                    name: "Text card",
                                                    component_name: "TextComponent",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        bg_color: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        elements: {
                                                            type: "array",
                                                            value: [
                                                                {
                                                                    name: "Here is heading",
                                                                    type: "text",
                                                                    classes: "text-[34px] font-bold"
                                                                },
                                                                {
                                                                    name: "Here is your sub title. You can change it any time any more",
                                                                    type: "sub-text",
                                                                    classes: "text-[2opx] font-bold"
                                                                },
                                                                {
                                                                    name: "Btn text",
                                                                    type: "button",
                                                                    classes: "text-white bg-gray-600 px-12 py-2 rounded-md my-3"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    components: [
                                                        {
                                                            id: "cc234c1f-deed-49aa-aabb-3e07d870e630",
                                                            name: "Custom component",
                                                            component_name: "CustomComponent",
                                                            props: {},
                                                            components: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "9412f0bc-4570-427a-a286-1e4f2bb6896d",
                    name: "One column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: ""
                        }
                    },
                    components: [
                        {
                            id: "724dac92-7b71-4fec-acc6-e62d97d5f22b",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "951d1664-850d-4ca4-abdd-646e0d3e1c6b",
                                    name: "Add section",
                                    component_name: "TemplateAdds",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: ""
                                        },
                                        "container_bg": {
                                            type: "string",
                                            value: "bg-blue-50"
                                        },
                                        "container_class": {
                                            type: "string",
                                            value: "container mx-auto"
                                        },
                                        "root_class": {
                                            type: "string",
                                            value: "bg-blue-50 flex justify-center"
                                        },
                                        classes: {
                                            type: "string",
                                            value: "w-[50%] text-center py-8"
                                        },
                                        "heading_text": {
                                            type: "string",
                                            value: "Hey this ia=s a awesome heading"
                                        },
                                        "description_text": {
                                            type: "string",
                                            value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste voluptatibus? Qui tempora voluptatem, quia odio alias eveniet libero quam!"
                                        },
                                        "button_text": {
                                            type: "string",
                                            value: "Change your button text"
                                        },
                                        "button_style": {
                                            type: "string",
                                            value: "bg-pink-700 text-white px-4 py-2 rounded-md mt-4"
                                        },
                                        "heading_style": {
                                            type: "string",
                                            value: "text-[20px] text-blue-500 font-bold"
                                        },
                                        "description_style": {
                                            type: "string",
                                            value: "py-2"
                                        }
                                    },
                                    components: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "b54c5f9c-6500-4a6b-8466-070cb5108fb1",
                    name: "Text card",
                    component_name: "TextComponent",
                    props: {
                        style: {
                            type: "string",
                            value: ""
                        },
                        bg_color: {
                            type: "string",
                            value: ""
                        },
                        classes: {
                            type: "string",
                            value: ""
                        },
                        elements: {
                            type: "array",
                            value: [
                                {
                                    name: "Here is heading",
                                    type: "text",
                                    classes: "text-[34px] font-bold"
                                },
                                {
                                    name: "Here is your sub title. You can change it any time any more",
                                    type: "sub-text",
                                    classes: "text-[2opx] font-bold"
                                },
                                {
                                    name: "Btn text",
                                    type: "button",
                                    classes: "text-white bg-gray-600 px-12 py-2 rounded-md my-3"
                                }
                            ]
                        }
                    },
                    components: [
                        {
                            id: "5df551a8-2724-4a57-befe-32293663781f",
                            name: "Custom component",
                            component_name: "CustomComponent",
                            props: {},
                            components: []
                        }
                    ]
                },
                {
                    id: "91d8f0fd-1767-4cee-8ac3-192a844f6386",
                    name: "One column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: ""
                        }
                    },
                    components: [
                        {
                            id: "43b3ce65-2e3d-42fc-b8bb-1ce7d64c7e60",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "784e6ef9-07b5-4ece-bd70-1e60c0903eba",
                                    name: "Two column Component",
                                    component_name: "BodyContainer",
                                    props: {
                                        classes: {
                                            type: "string",
                                            value: "grid grid-cols-2"
                                        }
                                    },
                                    components: [
                                        {
                                            id: "f61787c0-0c85-4e27-b257-12b2abe89baa",
                                            name: "Left",
                                            component_name: "LeftComponent",
                                            props: {
                                                classes: {
                                                    type: "string",
                                                    value: ""
                                                }
                                            },
                                            components: [
                                                {
                                                    id: "fd4db385-228f-4712-94e5-49c3d60629b2",
                                                    name: "Text card",
                                                    component_name: "TextComponent",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        bg_color: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: ""
                                                        },
                                                        elements: {
                                                            type: "array",
                                                            value: [
                                                                {
                                                                    name: "Here is heading",
                                                                    type: "text",
                                                                    classes: "text-[34px] font-bold"
                                                                },
                                                                {
                                                                    name: "Here is your sub title. You can change it any time any more",
                                                                    type: "sub-text",
                                                                    classes: "text-[2opx] font-bold"
                                                                },
                                                                {
                                                                    name: "Btn text",
                                                                    type: "button",
                                                                    classes: "text-white bg-gray-600 px-12 py-2 rounded-md my-3"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    components: [
                                                        {
                                                            id: "10b53225-4f9d-481c-b8c6-ce7d337cd736",
                                                            name: "Custom component",
                                                            component_name: "CustomComponent",
                                                            props: {},
                                                            components: []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: "b41180b7-13d1-4878-b529-e7ae5d0abaaa",
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
                                                    id: "5bb50630-86a1-4c36-aeb3-5a051f5422b7",
                                                    name: "Fancy Image",
                                                    component_name: "FancyImage",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: "display: flex; justify-content: start;"
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: ""
                                                        }
                                                    },
                                                    components: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "499222a5-546b-40c4-975d-df4e1efe5dc8",
                    name: "One column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: ""
                        }
                    },
                    components: [
                        {
                            id: "9ae999c8-1843-408a-b570-65f2815fc7d4",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "7bb52c7d-a311-4966-adf6-9e1c4f6dbd8c",
                                    name: "Fancy faq",
                                    component_name: "TemplateFaq",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: "container mx-auto py-6"
                                        },
                                        bg_color: {
                                            type: "string",
                                            value: ""
                                        },
                                        classes: {
                                            type: "string",
                                            value: ""
                                        },
                                        "question_style": {
                                            type: "string",
                                            value: "text-[20px] font-bold bg-red-100 p-1 rounded-t-md"
                                        },
                                        "answer_style": {
                                            type: "string",
                                            value: "pl-4  bg-red-50 py-2"
                                        },
                                        elements: {
                                            type: "array",
                                            value: [
                                                {
                                                    id: "f1da16d9-6edf-4dd2-a786-39fdfe9807d2",
                                                    name: "Why you use page builder ?",
                                                    value: "FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem",
                                                    type: "text",
                                                    classes: ""
                                                },
                                                {
                                                    id: "4b4cd4ef-76ab-429c-b355-72949ff94975",
                                                    name: "How to Create an FAQ Page ?",
                                                    value: "FAQ pages are intended as an initial support option for customers looking",
                                                    type: "text",
                                                    classes: ""
                                                },
                                                {
                                                    id: "519a8c0c-98e1-4f9d-846c-ae4fc8c7bdef",
                                                    name: "Decide how you will organize the FAQ page",
                                                    value: "FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem",
                                                    type: "text",
                                                    classes: ""
                                                },
                                                {
                                                    id: "60324608-fe44-4bce-83d6-058802d79be3",
                                                    name: "Include space for live support options",
                                                    value: "You could add a link that opens a new support ticket or even just list your call centers phone number at the bottom of the page. The idea is that customers shouldnt have to navigate back to your home page just to locate your companys email or phone number",
                                                    type: "text",
                                                    classes: ""
                                                },
                                                {
                                                    id: "93984a60-67b4-4f9a-b7b8-69bad9430159",
                                                    name: "Design your FAQ page",
                                                    value: "When customers do have questions that extend beyond the range of your FAQ page, you should have options available that directly connect them with your support team. ",
                                                    type: "text",
                                                    classes: ""
                                                }
                                            ]
                                        }
                                    },
                                    components: [
                                        {
                                            id: "e39bbb91-d5c1-4415-a07c-355e2af68161",
                                            name: "Custom component",
                                            component_name: "CustomComponent",
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
                    id: "3efa3023-7308-42a2-8aaf-e5fff58b4cbe",
                    name: "One column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: ""
                        }
                    },
                    components: [
                        {
                            id: "daf387c1-0b8b-4b25-8d1f-69b99f4203a7",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "ae330148-d02e-4088-81e8-491e8dc6f627",
                                    name: "Navigation title",
                                    component_name: "NavigationTitle",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: ""
                                        },
                                        classes: {
                                            type: "string",
                                            value: "flex justify-between py-2 items-center"
                                        },
                                        nav_title: {
                                            type: "string",
                                            value: "Our"
                                        },
                                        nav_title_classes: {
                                            type: "string",
                                            value: "text-[26px] font-bold"
                                        },
                                        sub_nav_title: {
                                            type: "string",
                                            value: " Package"
                                        },
                                        nav_sub_title_classes: {
                                            type: "string",
                                            value: "text-[18px] text-pink-500"
                                        }
                                    },
                                    components: []
                                },
                                {
                                    id: "33b48137-ebe1-42eb-8206-af468dbd951f",
                                    name: "Two column Component",
                                    component_name: "BodyContainer",
                                    props: {
                                        classes: {
                                            type: "string",
                                            value: "grid grid-cols-2"
                                        }
                                    },
                                    components: [
                                        {
                                            id: "bf145a80-ead6-492f-adb2-5b9478a2cbc6",
                                            name: "Left",
                                            component_name: "LeftComponent",
                                            props: {
                                                classes: {
                                                    type: "string",
                                                    value: ""
                                                }
                                            },
                                            components: [
                                                {
                                                    id: "93607969-7fef-4932-bc36-708c64e3bef1",
                                                    name: "Two column Component",
                                                    component_name: "BodyContainer",
                                                    props: {
                                                        classes: {
                                                            type: "string",
                                                            value: "grid grid-cols-2"
                                                        }
                                                    },
                                                    components: [
                                                        {
                                                            id: "35d9b9e6-12c8-4053-855e-f3b35d251c4b",
                                                            name: "Left",
                                                            component_name: "LeftComponent",
                                                            props: {
                                                                classes: {
                                                                    type: "string",
                                                                    value: ""
                                                                }
                                                            },
                                                            components: [
                                                                {
                                                                    id: "c45d4489-3d11-4c64-a864-6de89f4f3796",
                                                                    name: "Text card",
                                                                    component_name: "TextComponent",
                                                                    props: {
                                                                        style: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        bg_color: {
                                                                            type: "string",
                                                                            value: "red"
                                                                        },
                                                                        classes: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        elements: {
                                                                            type: "array",
                                                                            value: [
                                                                                {
                                                                                    name: "Basic",
                                                                                    type: "text",
                                                                                    classes: "text-[34px] font-bold"
                                                                                },
                                                                                {
                                                                                    name: "It was popularised in the 1960s with the release of Letraset",
                                                                                    type: "sub-text",
                                                                                    classes: "text-[2opx] font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    components: [
                                                                        {
                                                                            id: "ded1569c-262e-4244-a01f-37b4e736b7d8",
                                                                            name: "Custom component",
                                                                            component_name: "CustomComponent",
                                                                            props: {},
                                                                            components: []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            id: "9199006e-7f0e-467a-9d80-8beb3d8231aa",
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
                                                                    id: "46ce8dc7-9d87-4ac3-88e9-1337086100a2",
                                                                    name: "Text card",
                                                                    component_name: "TextComponent",
                                                                    props: {
                                                                        style: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        bg_color: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        classes: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        elements: {
                                                                            type: "array",
                                                                            value: [
                                                                                {
                                                                                    name: "Standard ",
                                                                                    type: "text",
                                                                                    classes: "text-[34px] font-bold"
                                                                                },
                                                                                {
                                                                                    name: "It was popularised in the 1960s with the release of Letraset",
                                                                                    type: "sub-text",
                                                                                    classes: "text-[2opx] font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    components: [
                                                                        {
                                                                            id: "195f4d6e-3dec-4b9b-8bf4-9ae9fb643d14",
                                                                            name: "Custom component",
                                                                            component_name: "CustomComponent",
                                                                            props: {},
                                                                            components: []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            id: "ea4033ce-dc16-47c0-b8ac-41b2c0b29975",
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
                                                    id: "8988fccf-366b-46d1-b6e7-a64ad34c5796",
                                                    name: "Two column Component",
                                                    component_name: "BodyContainer",
                                                    props: {
                                                        classes: {
                                                            type: "string",
                                                            value: "grid grid-cols-2"
                                                        }
                                                    },
                                                    components: [
                                                        {
                                                            id: "0c251daa-276c-4684-b576-0f96cc7ce4a8",
                                                            name: "Left",
                                                            component_name: "LeftComponent",
                                                            props: {
                                                                classes: {
                                                                    type: "string",
                                                                    value: ""
                                                                }
                                                            },
                                                            components: [
                                                                {
                                                                    id: "26563568-f0f8-42a7-8702-3a327188002f",
                                                                    name: "Text card",
                                                                    component_name: "TextComponent",
                                                                    props: {
                                                                        style: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        bg_color: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        classes: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        elements: {
                                                                            type: "array",
                                                                            value: [
                                                                                {
                                                                                    name: "Pro",
                                                                                    type: "text",
                                                                                    classes: "text-[34px] font-bold"
                                                                                },
                                                                                {
                                                                                    name: "It was popularised in the 1960s with the release of Letraset",
                                                                                    type: "sub-text",
                                                                                    classes: "text-[2opx] font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    components: [
                                                                        {
                                                                            id: "221ca9dc-ab82-4a2e-b82b-f20b84f42c80",
                                                                            name: "Custom component",
                                                                            component_name: "CustomComponent",
                                                                            props: {},
                                                                            components: []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            id: "275fa7b1-d150-4cfa-b87a-2d88b1d08d37",
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
                                                                    id: "43e6933d-3e6c-4b50-a05a-d1d924b5c0d5",
                                                                    name: "Text card",
                                                                    component_name: "TextComponent",
                                                                    props: {
                                                                        style: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        bg_color: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        classes: {
                                                                            type: "string",
                                                                            value: ""
                                                                        },
                                                                        elements: {
                                                                            type: "array",
                                                                            value: [
                                                                                {
                                                                                    name: "Go",
                                                                                    type: "text",
                                                                                    classes: "text-[34px] font-bold"
                                                                                },
                                                                                {
                                                                                    name: "It was popularised in the 1960s with the release of Letraset",
                                                                                    type: "sub-text",
                                                                                    classes: "text-[2opx] font-bold"
                                                                                }
                                                                            ]
                                                                        }
                                                                    },
                                                                    components: [
                                                                        {
                                                                            id: "b1f6a524-03a6-4198-80c2-4ebbcbffe70a",
                                                                            name: "Custom component",
                                                                            component_name: "CustomComponent",
                                                                            props: {},
                                                                            components: []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "5fd51f03-5096-4e80-ad5a-8ce9500a1688",
                    name: "Two column Component",
                    component_name: "BodyContainer",
                    props: {
                        classes: {
                            type: "string",
                            value: "grid grid-cols-2"
                        }
                    },
                    components: [
                        {
                            id: "a261289f-cc89-4bf1-a1b6-fd43b70a50d2",
                            name: "Left",
                            component_name: "LeftComponent",
                            props: {
                                classes: {
                                    type: "string",
                                    value: ""
                                }
                            },
                            components: [
                                {
                                    id: "719c86e3-576f-4b59-8c6e-0cb0a7a84a0e",
                                    name: "Fancy Footer",
                                    component_name: "FancyFooter",
                                    props: {
                                        style: {
                                            type: "string",
                                            value: "display: flex; justify-content: start;"
                                        },
                                        classes: {
                                            type: "string",
                                            value: "bg-black text-white"
                                        },
                                        heading: {
                                            type: "string",
                                            value: "Service"
                                        },
                                        heading_class: {
                                            type: "string",
                                            value: "font-bold text-[20px]"
                                        },
                                        elements: {
                                            type: "array",
                                            value: [
                                                {
                                                    name: "Free domain/hosting",
                                                    type: "text",
                                                    classes: "text-[16px] pl-2 font-[500]"
                                                },
                                                {
                                                    name: "No need coding",
                                                    type: "text",
                                                    classes: "text-[16px] pl-2 font-[500]"
                                                },
                                                {
                                                    name: "Free dashboard",
                                                    type: "text",
                                                    classes: "text-[16px] pl-2 font-[500]"
                                                }
                                            ]
                                        }
                                    },
                                    components: []
                                }
                            ]
                        },
                        {
                            id: "2aa414a9-2f00-4736-9e4d-f2ed9b6f75a4",
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
                                    id: "4a698ea9-e543-4b93-b03b-2b424e5210c7",
                                    name: "Two column Component",
                                    component_name: "BodyContainer",
                                    props: {
                                        classes: {
                                            type: "string",
                                            value: "grid grid-cols-2"
                                        }
                                    },
                                    components: [
                                        {
                                            id: "b7bd7f43-782c-406c-b8ab-bc6dc578a399",
                                            name: "Left",
                                            component_name: "LeftComponent",
                                            props: {
                                                classes: {
                                                    type: "string",
                                                    value: ""
                                                }
                                            },
                                            components: [
                                                {
                                                    id: "e0f67245-5524-4da3-be8e-5d4bd82056ee",
                                                    name: "Fancy Footer",
                                                    component_name: "FancyFooter",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: "display: flex; justify-content: start;"
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: "bg-black text-white"
                                                        },
                                                        heading: {
                                                            type: "string",
                                                            value: "Service"
                                                        },
                                                        heading_class: {
                                                            type: "string",
                                                            value: "font-bold text-[20px]"
                                                        },
                                                        elements: {
                                                            type: "array",
                                                            value: [
                                                                {
                                                                    name: "Free domain/hosting",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                },
                                                                {
                                                                    name: "No need coding",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                },
                                                                {
                                                                    name: "Free dashboard",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    components: []
                                                }
                                            ]
                                        },
                                        {
                                            id: "6fdec2df-b5db-4ae0-9c1a-c6a70a15ee64",
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
                                                    id: "d14a0082-3793-4c1d-870d-474f8a815090",
                                                    name: "Fancy Footer",
                                                    component_name: "FancyFooter",
                                                    props: {
                                                        style: {
                                                            type: "string",
                                                            value: "display: flex; justify-content: start;"
                                                        },
                                                        classes: {
                                                            type: "string",
                                                            value: "bg-black text-white"
                                                        },
                                                        heading: {
                                                            type: "string",
                                                            value: "Service"
                                                        },
                                                        heading_class: {
                                                            type: "string",
                                                            value: "font-bold text-[20px]"
                                                        },
                                                        elements: {
                                                            type: "array",
                                                            value: [
                                                                {
                                                                    name: "Free domain/hosting",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                },
                                                                {
                                                                    name: "No need coding",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                },
                                                                {
                                                                    name: "Free dashboard",
                                                                    type: "text",
                                                                    classes: "text-[16px] pl-2 font-[500]"
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    components: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
    }),
    persist: true,
})