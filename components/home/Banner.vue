<template>
    <section id="home" ref="home" class="relative z-[10] bg-white h-screen">
        <div class="bg-[url('/images/resources/banner.jpg')] bg-center bg-cover bg-no-repeat h-full">
            <div class="mx-auto h-full bg-white/40 backdrop-blur-[10px] overflow-hidden">
                <div class="max-w-[90vw] mx-auto flex flex-col justify-center h-full">
                    <div class="grid grid-cols-2 gap-10">
                        <div>
                            <img class="max-w-[200px] mx-auto" src="/images/logo.png" alt="">
                        </div>
                        <div>
                            <div class="relative mx-auto max-w-[28vw] h-[85vh]">
                                <div class="absolute top-15 -right-[20%]">
                                    <img class="h-[250px] w-[250px] object-cover rounded-full" src="https://monkiramen.de/MENU/menu-images-webp/59_Vegan_Spicy.webp" alt="/">
                                </div>
                                <img class="w-full h-full object-cover overflow-hidden rounded-tl-[15%] rounded-br-[15%]" src="/images/resources/banner.jpg" alt="/">
                                <div class="absolute bottom-12 -left-[50%]">
                                    <img class="h-[250px] w-[250px] object-cover rounded-full" src="https://monkiramen.de/MENU/menu-images-webp/55_Awase_Miso.webp" alt="/">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        components: {
        },

        data() {
            return {
                // categories: [{
                //     source: 'https://monkiramen.de/MENU/menu-images-webp/53_Classic_Shoyu.webp',
                // }, {
                //     source: 'https://monkiramen.de/MENU/menu-images-webp/55_Awase_Miso.webp',
                // }, {
                //     source: 'https://monkiramen.de/MENU/menu-images-webp/57_Vegan_Shoyu.webp',
                // }],
            };
        },
    };
</script>
