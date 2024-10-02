<template>
    <VueSlickCarousel
        ref="SliderCarousel"
        v-bind="settingsCarousel"
    >
        <!-- TEMPLATE -->
        <slot />
        <!-- ACTIONS -->
        <template #prevArrow>
            <template v-if="$slots['custom-prev-arrow']">
                <slot name="custom-prev-arrow" />
            </template>
            <template v-else>
                <div slot="prev-arrow" class="absolute !top-[110%] !left-[30%] sm:!left-[35%] lg:!left-[44%] !flex !flex-col !items-center !justify-center !w-12 !h-12 rounded-full !text-center !bg-primary-900 hover:!text-primary-900 !border-[2px] !border-solid !border-primary-900 !text-white duration-300 hover:!bg-white">
                    <i class="fas fa-chevron-left  text-3xl" />
                </div>
            </template>
        </template>
        <template #nextArrow>
            <template v-if="$slots['custom-next-arrow']">
                <slot name="custom-next-arrow" />
            </template>
            <template v-else>
                <div slot="next-arrow" class="absolute !top-[110%] !right-[30%] sm:!right-[35%] lg:!right-[44%] !flex !flex-col !items-center !justify-center !w-12 !h-12 rounded-full !text-center !bg-primary-900 hover:!text-primary-900 !border-[2px] !border-solid !border-primary-900 !text-white duration-300 hover:!bg-white">
                    <i class="fas fa-chevron-right  text-3xl" />
                </div>
            </template>
        </template>
        <template #customPaging>
            <template v-if="$slots.paging">
                <slot name="paging" />
            </template>
            <template v-else>
                <div slot="custom-paging">
                    <span class="block mx-auto w-20 h-1 rounded-full bg-white duration-300" />
                </div>
            </template>
        </template>
    </VueSlickCarousel>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';

    export default {
        components: {
            VueSlickCarousel,
        },

        props: {
            settings: {
                type: Object,
                default: () => {},
            },
            loading: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                defaultSetings: {
                    speed: 500,
                    dots: false,
                    infinite: true,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    responsive: [],
                },
            };
        },

        computed: {
            settingsCarousel() {
                return this.settings ? Object.assign(this.defaultSetings, this.settings) : this.defaultSetings;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .slick-prev:before, .slick-next:before {
        content: '' !important;
    }
    .slick-list {
        overflow: hidden;
        padding: 0px 0px !important;
    }
    .slick-slide {
        float: left !important;
        padding: 0px 5px !important;
    }
    .slick-slider {
        margin: 0px -20px !important;
    }
    .slick-dots {
        bottom: -6px;
        .slick-active {
            span {
                @apply w-20 bg-black-100 relative;
            }
        }
        li {
            @apply w-20 mx-1;
        }
    }

    .loading_carousel {
        width: 120px;
        height: 22px;
        border-radius: 40px;
        color: #1877f2;
        border: 2px solid;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }

    .loading_carousel::before {
        content: "";
        position: absolute;
        margin: 2px;
        width: 14px;
        top: 0;
        bottom: 0;
        left: -20px;
        border-radius: inherit;
        background: currentColor;
        box-shadow: -10px 0 12px 3px currentColor;
        clip-path: polygon(0 5%, 100% 0,100% 100%,0 95%,-30px 50%);
        animation: loadingCarousel 1s infinite linear;
    }

    @keyframes loadingCarousel {
        100% { left: calc(100% + 20px) }
    }
</style>
