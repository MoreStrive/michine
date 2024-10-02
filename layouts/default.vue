<template>
    <div class="relative">
        <!-- <div class="inline-block fixed top-3 left-3 z-50">
            <img class="max-w-[120px] mx-auto" src="/images/logo.png" alt="">
        </div> -->
        <Nav />
        <nuxt />
    </div>
</template>

<script>
    import Nav from '@/components/layout/Nav.vue';
    // import TheSidebar from '@/components/layout/TheSidebar.vue';
    // import TheHeader from '@/components/layout/TheHeader.vue';
    // import TheFooter from '@/components/layout/TheFooter.vue';

    export default {
        components: {
            Nav,
            // TheSidebar,
            // TheHeader,
            // TheFooter,
        },
    };
</script>
