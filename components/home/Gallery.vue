<template>
    <section id="photo" ref="photo" class="bg-[url('/images/resources/gallery.png')] py-20 bg-cover bg-center bg-no-repeat relative z-[2]">
        <div class="max-w-[75vw] mx-auto py-10 bg-[#000]/80 rounded-md">
            <div class="text-center text-white">
                <h2 class="text-white text-7xl mb-0">
                    Michimie みちみえ
                </h2>
                <p class="mt-2 text-2xl">
                    ANY TIME IS NOODLE TIME
                </p>
            </div>
            <div class="px-5 grid grid-cols-2 gap-5">
                <div class="grid grid-cols-1 h-full gap-5">
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/2023_monki_new_1.jpg" alt="">
                    </div>
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/2023_monki_new_2.jpg" alt="">
                    </div>
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/2023_monki_new_3.jpg" alt="">
                    </div>
                </div>
                <div class="grid grid-cols-1 h-full gap-5">
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/2023_monki_new_2.jpg" alt="">
                    </div>
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/MB210903_Monki_0760-lowres.jpg" alt="">
                    </div>
                    <div>
                        <img class="w-full h-full object-cover" src="https://monkiramen.de/PHOTOS/MB210903_Monki_0333-lowres.jpg" alt="">
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
            };
        },

        mounted() {
            this.createObserver();
        },

        methods: {
            createObserver() {
                const photos = this.$refs.photo;
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.$store.dispatch('scroll/setStyle', { nav: 'nav-light' });
                        }
                    });
                });
                observer.observe(photos);
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
