<template>
    <div class="categories-carousel relative z-10">
        <div v-if="loading">
            <Loading />
        </div>
        <template v-else>
            <!-- <a-empty v-if="categories.length === 0" class="!mt-10" /> -->
            <!-- v-else -->
            <VueSlickCarousel
                key="CategoriesSlide"
                ref="SliderCarousel"
                v-bind="settings"
                @beforeChange="changeSlide"
            >
                <div v-for="category, index in categories" :key="index">
                    <div class="h-full flex flex-col justify-center text-primary-100">
                        <div class="custom-container w-full">
                            <div class="flex items-center justify-center w-full flex-wrap">
                                <div class="md:w-[500px] xl:w-[20vw]">
                                    <div class="text-center">
                                        <img class="mx-auto w-full pointer-events-none" :src="category.source" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <template #prevArrow>
                    <div slot="prev-arrow" class="absolute !h-[20vw] !w-[20vw] !top-auto !bottom-[-120%] !left-[15%] !bg-transparent rounded-full overflow-hidden">
                        <img
                            class="mx-auto w-full pointer-events-none"
                            :src="prevImage"
                            alt=""
                        >
                    </div>
                </template>
                <template #nextArrow>
                    <div slot="next-arrow" class="absolute !h-[20vw] !w-[20vw] !top-auto !bottom-[-120%] !right-[15%] !bg-transparent rounded-full overflow-hidden">
                        <img
                            class="mx-auto w-full pointer-events-none"
                            :src="nextImage"
                            alt=""
                        >
                    </div>
                </template>

                <template #customPaging>
                    <img src="https://fidalgo.qodeinteractive.com/wp-content/uploads/2023/09/h5-img1.png" alt="">
                </template>
            </VueSlickCarousel>
        </template>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    import Loading from '@/components/shared/LoadingSecond.vue';

    export default {
        components: {
            VueSlickCarousel,
            Loading,
        },

        props: {
            categories: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                prevImage: '',
                nextImage: '',
                loading: false,
                settings: {
                    speed: 1000,
                    dots: false,
                    infinite: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    fade: true,
                },
            };
        },

        watch: {
        },

        methods: {
            changeSlide(oldSlideIndex, newSlideIndex) {
                this.prevImage = this.categories[oldSlideIndex]?.source;
                this.nextImage = this.categories[newSlideIndex]?.source;
            },
        },
    };
</script>

<style lang="scss">
    .categories-carousel {
        .custom-container {
            @apply max-w-[80vw] mx-auto;
        }
        padding-left: 20px;
        padding-right: 20px;
        .slick-prev:before, .slick-next:before {
            content: '' !important;
        }
        .slick-list {
            overflow: hidden;
            padding: 0px 0px !important;
        }
        .slick-slide {
            float: left !important;
        }
        .slick-slider {
            margin: 0px -20px !important;
        }
        .slick-dots {
            display: flex !important;
            @apply absolute bottom-[50px] md:bottom-auto md:right-[5%] justify-center md:top-1/2 md:-translate-y-1/2 w-full md:w-auto h-[80px] xl:h-[110px] xxl:h-[120px];
            li {
                @apply flex flex-col mx-2.5 justify-center items-center h-full w-[80px] xl:w-[110px] xxl:w-[120px] border-[1px] border-solid border-[#b58c67] rounded-full;
                img {
                    @apply w-[60px] xl:w-[65px] xxl:w-[75px];
                }
            }
            .slick-active {
                // span {
                //     @apply w-20 bg-black-100 relative;
                // }
            }
            // li {
            //     @apply w-20 mx-1;
            // }
        }
    }
</style>
