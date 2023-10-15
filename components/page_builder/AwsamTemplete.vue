<template>
    <section>
        <!-- header section -->
        <nav>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 py-2 items-center">
                <!-- logo -->
                <div>
                    <div class="">
                        <h1 class="text-[30px] font-bold"><span>P</span><span class="text-pink-400"> .Academy</span></h1>
                    </div>
                </div>
                <!-- nav item -->
                <div class="flex justify-end gap-x-4 items-center">
                    <nuxt-link class="font-bold text-[20px]" to="/">Home</nuxt-link>
                    <nuxt-link class="font-bold text-[20px]" to="/about">About</nuxt-link>
                    <nuxt-link class="font-bold text-[20px]" to="/contact">Contact</nuxt-link>
                </div>
            </div>
        </nav>
        <!-- banner section -->
        <section class="bg-blue-50">
            <div class="container mx-auto py-16 px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 items-end gap-x-6">
                    <div>
                        <img class="rounded-md" src="/photo-1575936123452-b67c3203c357.jpeg" alt="">
                    </div>
                    <div>
                        <div>
                            <h1 class="text-[36px] font-bold">This is an fantastic landing page</h1>
                            <p class="text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste excepturi
                                odit deleniti
                                debitis,
                                quibusdam labore! Incidunt cupiditate dolorum id? Tempore.</p>
                        </div>
                        <div>
                            <h1 class="text-[36px] font-bold">This is an fantastic landing page</h1>
                            <p class="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit
                                veritatis labore quod
                                quae
                                provident natus, eaque nulla, sed blanditiis voluptates suscipit voluptatum eum iste dolorum
                                ipsum! Libero, commodi enim!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- faq section -->
        <section>
            <div class="container mx-auto py-6">
                <div>
                    <div class="py-2">
                        <h1 class="text-[20px] font-bold bg-red-100 p-1 rounded-t-md">Why you use page builder</h1>
                        <p class="pl-4  bg-red-50 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
                            unde.</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-[20px] font-bold bg-red-100 p-1 rounded-t-md">Why you use page builder</h1>
                        <p class="pl-4  bg-red-50 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
                            unde. Lorem
                            ipsum dolor sit
                            amet, consectetur adipisicing elit. Consectetur, sapiente.</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-[20px] font-bold bg-red-100 p-1 rounded-t-md">Why you use page builder</h1>
                        <p class="pl-4  bg-red-50 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
                            unde. Lorem
                            ipsum dolor sit amet
                            consectetur adipisicing elit. Vitae, quam eius saepe tenetur atque delectus reprehenderit
                            eligendi ducimus expedita voluptatibus.</p>
                    </div>
                    <div class="py-2">
                        <h1 class="text-[20px] font-bold bg-red-100 p-1 rounded-t-md">Why you use page builder</h1>
                        <p class="pl-4 pt-1 bg-red-50 py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
                            unde. Lorem
                            ipsum, dolor sit
                            amet consectetur adipisicing elit. Voluptatem repellat, ducimus quisquam commodi ipsam aliquid
                            corrupti placeat non qui repellendus, ipsa expedita iste nisi rerum repudiandae, assumenda sequi
                            fuga molestias.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- adds section -->
        <section class="bg-blue-50">
            <div class="container mx-auto">
                <div class="flex justify-center">
                    <div class="w-[50%] text-center py-8">
                        <h1 class="text-[20px] text-blue-500 font-bold">Hey this a awsam web page.</h1>
                        <p class="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, iste
                            voluptatibus? Qui tempora voluptatem, quia odio alias eveniet libero quam!</p>
                        <button class="bg-pink-700 text-white px-4 py-2 rounded-md mt-4">Check it out here</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- card section -->
        <section>
            <div class="container mx-auto py-6">
                <div>
                    <h1 class="text-[28px] font-bold">Our fantastic feature...</h1>
                    <div class="py-4">
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                            <div class="text-center bg-green-100 py-6 px-2 rounded-md">
                                <h1 class="pb-2 text-[18px] font-bold">Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est, id accusamus veniam
                                    dolor ut odio fuga quae autem soluta nulla, tempora corrupti tenetur ab quasi, quaerat
                                    facilis delectus dolore!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- footer section -->
        <section class="bg-black text-white px-2">
            <div class="container mx-auto pr-2 py-6">
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <h1 class="text-[20px] font-bold">Our services</h1>
                        <div class="pl-2 pt-1">
                            <li>Home delivery</li>
                            <li>Cash on delivery</li>
                            <li>Product exchange</li>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div>
                            <h1 class="text-[20px] font-bold">Our products</h1>
                            <div class="pl-2 pt-1">
                                <li>Landing page builder</li>
                                <li>Add custom domain</li>
                                <li>Make your won web side</li>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div>
                            <h1 class="text-[20px] font-bold">We are in here</h1>
                            <div class="pl-2 pt-1">
                                <li><nuxt-link to="https://www.facebook.com">Facebook</nuxt-link> </li>
                                <li> <nuxt-link to="https://www.youtube.com">Youtube</nuxt-link> </li>
                                <li> <nuxt-link to="https://www.linkedin.com">Linkedin</nuxt-link></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
<script setup></script>
<style>
li {
    text-decoration: none;
    list-style: none;
}
</style>