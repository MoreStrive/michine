<template>
    <section id="menu" ref="menu" class="bg-second-100 pb-20 px-5 sm:px-0">
        <div>
            <div class="sticky will-change-transform top-[-1px] z-[1] bg-second-100 pb-3">
                <div class="relative sm:max-w-[75vw] mx-auto border-b-[2px] border-solid pb-3 pt-5 sm:mb-5 flex items-center justify-between gap-4">
                    <h2 class="text-3xl mb-0 ml-5 font-normal flex-1">
                        Michimie みちみえ | Menu
                    </h2>

                    <div class="w-1/2">
                        <ul class="flex items-center justify-center flex-wrap gap-2 mb-0 ml-auto mr-10 max-w-[600px]">
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">LUNCH</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">STARTERS</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">SALADS</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">TSUKE-UDON</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">MAIN DISHES</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">RAMEN</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">TOPPINGS</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">DESSERTS</a>
                            </li>
                            <li class="text-2xl font-normal">
                                <a class="hover:!text-brand-100 transition-all duration-200" href="">PDF Menu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="relative sm:max-w-[75vw] mx-auto">
                <div class="flex">
                    <div class="w-[50%]">
                        <div v-if="isMenuVisible" class="sticky top-52 left-[10%] hidden sm:block w-[28vw] h-[500px] object-cover bg-contain bg-no-repeat bg-[url('https://monkiramen.de/MENU/menu-images-webp/11_Tori_Don.webp')]" />
                    </div>
                    <div class="w-[50%] pr-5">
                        <div class="grid grid-cols-1 gap-10">
                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>

                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>

                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>

                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>

                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>

                            <article class="group cursor-pointer flex items-start gap-5">
                                <div class="hidden sm:flex flex-col justify-center items-center w-15 h-15 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                    <span class="text-2xl font-bold">15</span>
                                </div>
                                <div class="flex-1">
                                    <div class="flex justify-between mb-2 sm:mb-0">
                                        <div class="flex items-center gap-2">
                                            <div class="sm:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer group-hover:bg-black-100 group-hover:text-white transition-all duration-300">
                                                <span class="text-2xl font-bold">15</span>
                                            </div>
                                            <div class="text-3xl font-semibold">
                                                KARE DON*
                                            </div>
                                        </div>
                                        <div class="hidden sm:block font-semibold text-3xl">
                                            13 €
                                        </div>
                                    </div>
                                    <div class="text-2xl font-normal mt-2 space-y-1">
                                        Japanisches Curry mit Hähnchenschnitzel, <br>
                                        Karotten und Kartoffeln
                                        <br>
                                        <span class="italic">Japanese curry with chicken cutlet, <br>
                                            carrots and potatoes</span>
                                        <br>
                                        *gepökelt <br>
                                        <span class="italic">*salted</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                currentElement: null,
                isMenuVisible: true,
            };
        },

        mounted() {
            this.createObserver();
        },

        methods: {
            setCurrentElement(element) {
                this.currentElement = element;
            },

            createObserver() {
                const menu = this.$refs.menu;
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.isMenuVisible = true;
                            this.$store.dispatch('scroll/setStyle', { nav: 'nav-dark' });
                        } else {
                            this.isMenuVisible = false;
                        }
                    });
                });
                observer.observe(menu);
            },
        },
    };
</script>
