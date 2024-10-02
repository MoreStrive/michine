<template>
    <div>
        <Banner :categories="categories" />
        <!-- <About /> -->
        <Menu />
        <Gallery />
        <Hours />
    </div>
</template>

<script>
    // import Nav from '@/components/layout/Nav.vue';
    import Menu from '@/components/home/Menu.vue';
    // import About from '@/components/home/About.vue';
    import Banner from '@/components/home/Banner.vue';
    import Hours from '@/components/home/Hours.vue';
    import Gallery from '@/components/home/Gallery.vue';

    export default {
        components: {
            // Nav,
            Menu,
            // About,
            Banner,
            Hours,
            Gallery,
        },

        data() {
            return {
                categories: [{
                    source: 'https://monkiramen.de/MENU/menu-images-webp/53_Classic_Shoyu.webp',
                }, {
                    source: 'https://monkiramen.de/MENU/menu-images-webp/55_Awase_Miso.webp',
                }, {
                    source: 'https://monkiramen.de/MENU/menu-images-webp/57_Vegan_Shoyu.webp',
                }],
            };
        },
    };
</script>
