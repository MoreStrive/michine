<template>
    <div class="fixed z-[11] w-max right-10 top-5">
        <nav :class="[classify.nav]">
            <div>
                <ul class="flex flex-col gap-2">
                    <li class="text-2xl font-semibold">
                        <a class="transition-all duration-300" href="#home">HOME</a>
                    </li>
                    <li class="text-2xl font-semibold">
                        <a class="transition-all duration-300" href="#menu">MENU</a>
                    </li>
                    <!-- <li class="text-2xl font-semibold">
                        <a href="#photo">PHILOSOPHIE</a>
                    </li> -->
                    <li class="text-2xl font-semibold">
                        <a class="transition-all duration-300" href="#photo">PHOTOS</a>
                    </li>
                    <li class="text-2xl font-semibold">
                        <a class="transition-all duration-300" href="#hours">HOURS</a>
                    </li>
                    <li class="text-2xl font-semibold">
                        <a class="transition-all duration-300" href="">IMPRINT</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data() {
            return {

            };
        },

        computed: {
            ...mapState('scroll', ['classify']),
        },

        watch: {
            classify() {
                console.log(this.classify);
            },
        },
    };
</script>

<style lang="scss" scoped>
.nav-dark {
    & a {
        @apply text-black-100 #{!important};
    }
}
.nav-light {
    & a {
        @apply text-brand-100 #{!important};
    }
}
</style>
