<script setup>
    import { ref } from 'vue';
    import { NAVIGATION } from '@/constants/index.js';
    import CloseIcon from '@/components/icons/CloseIcon.vue';
    import HamburgerIcon from '@/components/icons/HamburgerIcon.vue';

    const mobileMenu = ref(false);
</script>

<template>
    <header class="header">
        <div class="header__inner container">
            <RouterLink to="/">
                <img alt="Vue logo" class="logo" src="@/assets/svg/logo.svg" width="65" height="65"/>
            </RouterLink>
            <button @click="() => mobileMenu = !mobileMenu" class="md:hidden">
                <CloseIcon v-if="mobileMenu"/>
                <HamburgerIcon v-else/>
            </button>
            <nav class="nav" :class="{'active' : mobileMenu}">
                <ul class="nav__list">
                    <li v-for="(navigation, index) in NAVIGATION" :key="index" class="nav__list-item">
                        <RouterLink :to="navigation.url">{{navigation.title}}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
a {
    @apply w-fit;
}

.header {
    @apply max-md:relative border-b border-b-gray-200 md:mb-5;

    &__inner {
        @apply flex items-center py-4 lg:py-5 md:gap-10 max-md:justify-between;

        .logo {
            @apply max-md:w-[55px];
        }
    }
}

.nav {
    @apply max-md:bg-white max-md:w-full max-md:h-[calc(100vh-81px)] max-md:p-10
    max-md:absolute max-md:top-[81px] max-md:left-0 max-md:-translate-x-full
    max-md:transition-transform max-md:duration-500;

    &.active {
        @apply max-md:translate-x-0;
    }

    &__list {
        @apply flex items-center gap-10 max-md:flex-col;

        a {
            @apply hover:underline;
        }
    }
}

</style>