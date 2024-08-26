<script setup>
import HomeArticle from '@/components/home/article.vue';
import HomeBanner from '@/components/home/banner.vue';
import HomeHots from '@/components/home/hots.vue';
import HomeHotsSm from '@/components/home/hotsSm.vue';
import HomeLife from '@/components/home/life.vue';
import HomeNews from '@/components/home/news.vue';
import HomeProject from '@/components/home/project.vue';
import HomeTheme from '@/components/home/theme.vue';
import HomeContact from '@/components/home/contact.vue';

</script>

<template>
    <main>
        <HomeBanner />
        <HomeTheme />
        <HomeArticle />
        <HomeNews />
        <HomeHots class="d-none d-lg-block" />
        <HomeHotsSm class="d-block d-lg-none" />
        <HomeLife />
        <HomeProject />
        <HomeContact />
    </main>
</template>

<style scoped></style>