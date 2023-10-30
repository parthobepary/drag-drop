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
        <PageBuilderPageNested :drafts="drafts"/>

        <div class="my-2 flex justify-end mr-1">
          <button @click="saveData" class="bg-green-500 p-2 rounded-md text-white">Published</button>
        </div>
      </div>
      <div v-if="drafts.length > 0" class="px-2 col-span-1 bg-blue-200 w-full min-h-[100vh]">
        <!-- Source code -->
        <PageSetting :drafts="drafts"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {VueDraggableNext} from 'vue-draggable-next';
import {v4 as uuidv4} from "uuid";
import PageSetting from './PageSetting.vue';

// draggable js

const blogs = ref([
  // our templates
  {
    id: uuidv4(),
    name: "Awesome landing page",
    component_name: "AwsamTemplete",
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
                          {id: uuidv4(), name: 'Home', value: '/', classes: 'font-bold'},
                          {id: uuidv4(), name: 'Review', value: '/', classes: 'font-bold'},
                        ]
                      },
                    },
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
                    name: 'Fancy Image',
                    component_name: 'FancyImage',
                    props: {
                      style: {
                        type: 'string',
                        value: 'display: flex; justify-content: start;'
                      },
                      classes: {
                        type: 'string',
                        value: ''
                      },
                    },
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
                          {name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold'},
                          {
                            name: 'Here is your sub title. You can change it any time any more',
                            type: 'sub-text',
                            classes: 'text-[2opx] font-bold'
                          },
                          {
                            name: 'Btn text',
                            type: 'button',
                            classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3'
                          },
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
                value: "grid grid-cols-1"
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
                    name: 'Fancy Image',
                    component_name: 'FancyImage',
                    props: {
                      style: {
                        type: 'string',
                        value: 'display: flex; justify-content: start;'
                      },
                      classes: {
                        type: 'string',
                        value: ''
                      },
                    },
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
                          {name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold'},
                          {
                            name: 'Here is your sub title. You can change it any time any more',
                            type: 'sub-text',
                            classes: 'text-[2opx] font-bold'
                          },
                          {
                            name: 'Btn text',
                            type: 'button',
                            classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3'
                          },
                        ]
                      }
                    },
                    components: [
                      {
                        id: uuidv4(),
                        name: 'Custom component',
                        component_name: 'CustomComponent',
                        props: {},
                        components: [
                          {
                            id: uuidv4(),
                            name: 'Fancy faq',
                            component_name: 'TemplateFaq',
                            props: {
                              style: {
                                type: 'string',
                                value: 'container mx-auto py-6'
                              },
                              bg_color: {
                                type: 'string',
                                value: ''
                              },
                              classes: {
                                type: 'string',
                                value: ''
                              },
                              question_style: {
                                type: 'string',
                                value: 'text-[20px] font-bold bg-red-100 p-1 rounded-t-md',
                              },
                              answer_style: {
                                type: 'string',
                                value: 'pl-4  bg-red-50 py-2',
                              },
                              elements: {
                                type: 'array',
                                value: [
                                  {
                                    id: uuidv4(),
                                    name: 'Why you use page builder ?',
                                    value: 'FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem',
                                    type: 'text',
                                    classes: ''
                                  },
                                  {
                                    id: uuidv4(),
                                    name: 'How to Create an FAQ Page ?',
                                    value: 'FAQ pages are intended as an initial support option for customers looking',
                                    type: 'text',
                                    classes: ''
                                  },
                                  {
                                    id: uuidv4(),
                                    name: 'Decide how you will organize the FAQ page',
                                    value: 'FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem',
                                    type: 'text',
                                    classes: ''
                                  },
                                  {
                                    id: uuidv4(),
                                    name: 'Include space for live support options',
                                    value: 'You could add a link that opens a new support ticket or even just list your call centers phone number at the bottom of the page. The idea is that customers shouldnt have to navigate back to your home page just to locate your companys email or phone number',
                                    type: 'text',
                                    classes: ''
                                  },
                                  {
                                    id: uuidv4(),
                                    name: 'Design your FAQ page',
                                    value: 'When customers do have questions that extend beyond the range of your FAQ page, you should have options available that directly connect them with your support team. ',
                                    type: 'text',
                                    classes: ''
                                  },
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
                        ]
                      },
                    ]
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
            name: 'Add section',
            component_name: 'TemplateAdds',
            props: {
              style: {
                type: 'string',
                value: ''
              },
              container_bg: {
                type: 'string',
                value: 'bg-blue-50'
              },
              container_class: {
                type: 'string',
                value: 'container mx-auto'
              },
              root_class: {
                type: 'string',
                value: 'bg-blue-50 flex justify-center'
              },
              classes: {
                type: 'string',
                value: 'w-[50%] text-center py-8'
              },
              heading_text: {
                type: 'string',
                value: 'Hey this ia=s a awesome heading'
              },
              description_text: {
                type: 'string',
                value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste voluptatibus? Qui tempora voluptatem, quia odio alias eveniet libero quam!'
              },
              button_text: {
                type: 'string',
                value: 'Change your button text'
              },
              button_style: {
                type: 'string',
                value: 'bg-pink-700 text-white px-4 py-2 rounded-md mt-4'
              },
              heading_style: {
                type: 'string',
                value: 'text-[20px] text-blue-500 font-bold'
              },
              description_style: {
                type: 'string',
                value: 'py-2'
              }
            },
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
                    name: 'Fancy Footer',
                    component_name: 'FancyFooter',
                    props: {
                      style: {
                        type: 'string',
                        value: 'display: flex; justify-content: start;'
                      },
                      classes: {
                        type: 'string',
                        value: 'bg-black text-white'
                      },
                      heading: {
                        type: 'string',
                        value: 'Service'
                      },
                      heading_class: {
                        type: 'string',
                        value: 'font-bold text-[20px]'
                      },
                      elements: {
                        type: 'array',
                        value: [
                          {name: 'Free domain/hosting', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
                          {name: 'No need coding', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
                          {name: 'Free dashboard', type: 'text', classes: 'text-[16px] pl-2 font-[500]'}
                        ]
                      }
                    },
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
                    name: 'Fancy Footer',
                    component_name: 'FancyFooter',
                    props: {
                      style: {
                        type: 'string',
                        value: 'display: flex; justify-content: start;'
                      },
                      classes: {
                        type: 'string',
                        value: 'bg-black text-white'
                      },
                      heading: {
                        type: 'string',
                        value: 'Service'
                      },
                      heading_class: {
                        type: 'string',
                        value: 'font-bold text-[20px]'
                      },
                      elements: {
                        type: 'array',
                        value: [
                          {name: 'Free domain/hosting', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
                          {name: 'No need coding', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
                          {name: 'Free dashboard', type: 'text', classes: 'text-[16px] pl-2 font-[500]'}
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
      },
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
          {id: uuidv4(), name: 'Home', value: '/', classes: 'font-bold'},
          {id: uuidv4(), name: 'Review', value: '/', classes: 'font-bold'},
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
          {name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold'},
          {
            name: 'Here is your sub title. You can change it any time any more',
            type: 'sub-text',
            classes: 'text-[2opx] font-bold'
          },
          {name: 'Btn text', type: 'button', classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3'},
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
          {id: uuidv4(), name: 'Home', value: '/', classes: 'font-bold'},
          {id: uuidv4(), name: 'Review', value: '/', classes: 'font-bold'},
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


  // faq

  {
    id: uuidv4(),
    name: 'Fancy faq',
    component_name: 'TemplateFaq',
    props: {
      style: {
        type: 'string',
        value: 'container mx-auto py-6'
      },
      bg_color: {
        type: 'string',
        value: ''
      },
      classes: {
        type: 'string',
        value: ''
      },
      question_style: {
        type: 'string',
        value: 'text-[20px] font-bold bg-red-100 p-1 rounded-t-md',
      },
      answer_style: {
        type: 'string',
        value: 'pl-4  bg-red-50 py-2',
      },
      elements: {
        type: 'array',
        value: [
          {
            id: uuidv4(),
            name: 'Why you use page builder ?',
            value: 'FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem',
            type: 'text',
            classes: ''
          },
          {
            id: uuidv4(),
            name: 'How to Create an FAQ Page ?',
            value: 'FAQ pages are intended as an initial support option for customers looking',
            type: 'text',
            classes: ''
          },
          {
            id: uuidv4(),
            name: 'Decide how you will organize the FAQ page',
            value: 'FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem',
            type: 'text',
            classes: ''
          },
          {
            id: uuidv4(),
            name: 'Include space for live support options',
            value: 'You could add a link that opens a new support ticket or even just list your call centers phone number at the bottom of the page. The idea is that customers shouldnt have to navigate back to your home page just to locate your companys email or phone number',
            type: 'text',
            classes: ''
          },
          {
            id: uuidv4(),
            name: 'Design your FAQ page',
            value: 'When customers do have questions that extend beyond the range of your FAQ page, you should have options available that directly connect them with your support team. ',
            type: 'text',
            classes: ''
          },
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
  //banner
  {
    id: uuidv4(),
    name: 'Awesome Banner',
    component_name: 'AwesomeBanner',
    props: {
      bg_color: {
        type: 'string',
        value: ''
      },
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
        components: [
          {
            id: uuidv4(),
            name: 'Fancy Image',
            component_name: 'FancyImage',
            props: {
              style: {
                type: 'string',
                value: 'display: flex; justify-content: start; height: 396px;'
              },
              classes: {
                type: 'string',
                value: ''
              },
            },
            components: []
          }
        ]
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
        components: [
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
                  {name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold'},
                  {
                    name: 'Here is your sub title. You can change it any time any more',
                    type: 'sub-text',
                    classes: 'text-[2opx] font-bold'
                  },
                  {name: 'Btn text', type: 'button', classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3'},
                  {name: 'Here is heading', type: 'text', classes: 'text-[34px] font-bold'},
                  {
                    name: 'Here is your sub title. You can change it any time any more',
                    type: 'sub-text',
                    classes: 'text-[2opx] font-bold'
                  },
                  {name: 'Btn text', type: 'button', classes: 'text-white bg-gray-600 px-12 py-2 rounded-md my-3'},
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
          }
        ]
      }
    ]
  },
  // Fancy image
  {
    id: uuidv4(),
    name: 'Fancy Image',
    component_name: 'FancyImage',
    props: {
      style: {
        type: 'string',
        value: 'display: flex; justify-content: start;'
      },
      classes: {
        type: 'string',
        value: ''
      },
    },
    components: []
  },
  //  Product Headline
  {
    id: uuidv4(),
    name: 'Product Headline',
    component_name: 'ProductHeadline',
    props: {
      style: {
        type: 'string',
        value: 'display: flex; justify-content: start; clip-path: polygon(49% 33%, 100% 23%, 100% 0, 0 0, 0 22%);'
      },
      container_bg: {
        type: 'string',
        value: 'bg-[#002F56] px-2 '
      },
      classes: {
        type: 'string',
        value: 'bg-black text-white'
      },
      heading: {
        type: 'string',
        value: 'Luxurious Makkah Quran'
      },
      heading_class: {
        type: 'string',
        value: 'font-bold text-center text-[36px] py-2 text-white'
      },
    },
    components: []
  },
  // footer single component
  {
    id: uuidv4(),
    name: 'Footer Section',
    component_name: 'FancyFooter',
    props: {
      style: {
        type: 'string',
        value: 'display: flex; justify-content: start;'
      },
      container_bg: {
        type: 'string',
        value: 'bg-blue-50 px-2'
      },
      classes: {
        type: 'string',
        value: 'bg-black text-white'
      },
      heading: {
        type: 'string',
        value: 'Company Logo'
      },
      heading_class: {
        type: 'string',
        value: 'font-bold text-[20px] pl-3'
      },
      elements: {
        type: 'array',
        value: [
          {name: '© 2021 Iqra Books BD. All Rights Reserved.', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
          {name: 'Terms & Conditions', type: 'text', classes: 'text-[16px] pl-2 font-[500]'},
          {name: 'Privacy Policy', type: 'text', classes: 'text-[16px] pl-2 font-[500]'}
        ]
      }
    },
    components: []
  },
  //Review Section
  {
    id: uuidv4(),
    name: 'Customer Review Section',
    component_name: 'CustomerReview',
    props: {
      style: {
        type: 'string',
        value: ''
      },
      container_bg: {
        type: 'string',
        value: 'bg-blue-50'
      },
      container_class: {
        type: 'string',
        value: 'container'
      },
      root_class: {
        type: 'string',
        value: 'bg-blue-50 flex justify-center'
      },
      classes: {
        type: 'string',
        value: 'w-[80%] text-center py-8'
      },
      heading_text: {
        type: 'string',
        value: 'কাস্টমারের মতামত দেখে নিন!'
      },
      description_text: {
        type: 'string',
        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste voluptatibus? Qui tempora voluptatem, quia odio alias eveniet libero quam!'
      },
      heading_style: {
        type: 'string',
        value: 'text-[24px] mx-2 text-black bg-yellow-400 w-full font-bold'
      },
      description_style: {
        type: 'string',
        value: 'pt-2 px-12'
      },
      review_image: {
        type: 'string',
        value: 'flex justify-center items-center pt-2 h-[300px]'
      }
    },
    components: []
  },
  // Fantastic adds
  {
    id: uuidv4(),
    name: 'Order Section',
    component_name: 'TemplateAdds',
    props: {
      style: {
        type: 'string',
        value: ''
      },
      container_bg: {
        type: 'string',
        value: 'bg-blue-50'
      },
      container_class: {
        type: 'string',
        value: 'container mx-auto'
      },
      root_class: {
        type: 'string',
        value: 'bg-blue-50 flex justify-center'
      },
      classes: {
        type: 'string',
        value: 'w-[80%] text-center py-8'
      },
      grid_class: {
        type: 'string',
        value: 'grid grid-cols-2'
      },
      heading_text: {
        type: 'string',
        value: 'Hey this ia=s a awesome heading'
      },
      description_text: {
        type: 'string',
        value: 'আরবী নির্ভূল যোগ্য বাংলা উচ্চারণ দেওয়া হয়েছে ।'
      },
      description_text_two: {
        type: 'string',
        value: 'প্রতিটি পৃষ্ঠা ১০০ জি এস এম আর্ট পেপার দিয়ে ছাপা।'
      },
      button_text: {
        type: 'string',
        value: 'এখনই অর্ডার করুন'
      },
      button_style: {
        type: 'string',
        value: 'bg-black border-2 border-yellow-500 font-[600] text-[24px] text-yellow-500 px-4 py-2 rounded-2xl mt-4'
      },
      heading_style: {
        type: 'string',
        value: 'text-[20px] text-blue-500 font-bold'
      },
      description_style: {
        type: 'string',
        value: 'py-2 text-[20px] font-[600]'
      }
    },
    components: []
  },
  //Product View Section
  {
    id: uuidv4(),
    name: 'Product Section',
    component_name: 'ProductSection',
    props: {
      style: {
        type: 'string',
        value: ''
      },
      container_bg: {
        type: 'string',
        value: 'bg-blue-50'
      },
      container_class: {
        type: 'string',
        value: 'container mx-auto'
      },
      root_class: {
        type: 'string',
        value: 'bg-blue-50 flex justify-center'
      },
      classes: {
        type: 'string',
        value: 'w-[80%] text-center py-8'
      },
      grid_class: {
        type: 'string',
        value: 'grid grid-cols-3 gap-x-12'
      },
      heading_text: {
        type: 'string',
        value: 'Hey this ia=s a awesome heading'
      },
      description_text: {
        type: 'string',
        value: 'আরবী নির্ভূল যোগ্য বাংলা উচ্চারণ দেওয়া হয়েছে ।'
      },
      description_text_two: {
        type: 'string',
        value: 'প্রতিটি পৃষ্ঠা  ১০০ জি এস এম আর্ট পেপার দিয়ে ছাপা।'
      },
      button_text: {
        type: 'string',
        value: 'এখনই অর্ডার করুন'
      },
      button_style: {
        type: 'string',
        value: 'bg-black border-2 border-yellow-500 font-[600] text-[24px] text-yellow-500 px-4 py-2 rounded-2xl mt-4'
      },
      heading_style: {
        type: 'string',
        value: 'text-[20px] text-blue-500 font-bold'
      },
      description_style: {
        type: 'string',
        value: 'py-2 text-[20px] font-[600]'
      },
      product_image: {
        type: 'string',
        value: 'flex justify-center items-center pt-2 h-[300px]'
      }
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


const drafts = ref([])

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
    return {...il, id: uuidv4()}
  })
}

const saveData = () => {
  localStorage.setItem('drafts', JSON.stringify(drafts.value))
}
</script>