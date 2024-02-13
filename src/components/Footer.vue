<script setup>
    import { ref } from 'vue';
    import { NAVIGATION } from '@/constants/index.js';

    const year = ref(new Date().getFullYear());
</script>

<template>
    <footer class="footer">
        <div class="footer__container container">
            <p>&copy; {{year}} Your Company</p>
            <ul class="nav__list">
                <li v-for="(navigation, index) in NAVIGATION" :key="index" class="nav__list-item">
                    <RouterLink :to="navigation.url">{{ navigation.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    @apply bg-gray-800 text-white py-8 md:py-6 lg:mt-10;

    &__container {
        @apply flex items-center justify-between max-md:flex-col max-md:gap-10;
    }
}

.nav__list {
    @apply flex items-center gap-8 md:gap-10;

    a {
        @apply hover:underline;
    }
}
</style>