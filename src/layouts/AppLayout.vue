<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <Header/>
    <main class="container">
        <slot/>
    </main>
    <Footer/>
</template>

<style scoped lang="scss">
.container {
    @apply lg:min-h-[calc(100vh-229px)] lg:flex;
}
</style>