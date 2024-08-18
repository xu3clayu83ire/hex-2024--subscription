<script setup>
import HomeArticle from '@/components/home/article.vue';
import HomeBanner from '@/components/home/banner.vue';
import HomeHots from '@/components/home/hots.vue';
import HomeLife from '@/components/home/life.vue';
import HomeNews from '@/components/home/news.vue';
import HomeProject from '@/components/home/project.vue';
import HomeTheme from '@/components/home/theme.vue';

</script>

<template>
    <main>
        <HomeBanner />
        <HomeTheme />
        <HomeArticle />
        <HomeNews />
        <HomeHots />
        <HomeLife />
        <HomeProject />
    </main>
</template>

<style scoped></style>