<template>
    <div class="article">
        <div class="container py-13 py-xl-15">
            <h2 class="sb-section-title-primary mb-6 d-block d-xl-none">精選文章</h2>
            <div class="row">
                <div class="col-xl-3 order-1 order-xl-0">
                    <div class="d-xl-flex flex-column h-100 justify-content-xl-between">
                        <h2 class="sb-section-title-primary d-xl-block d-none">精選文章</h2>
                        <btnPagination :isShowNumber="isShowNumber"></btnPagination>
                    </div>
                </div>
                <div class="col-xl-9">
                    <swiper :pagination="{ clickable: true }" :breakpoints="{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 0
                        },
                    }" class="mySwiper row mb-11 mb-xl-0">
                        <swiper-slide class="col-xl-6" v-for=" data in datas" :key="data.id">
                            <!-- card -->
                            <div class="article-card mx-0 mb-4 mx-auto">
                                <div class="article-card-header mb-6">
                                    <img :src="data.imageLg" class="d-none d-lg-block" :alt="data.text">
                                    <img :src="data.imageSm" class="d-lg-none mx-auto" :alt="data.text">
                                </div>
                                <div class="article-card-body mb-6">
                                    <h3 class="fw-bolder fs-5 mb-2">
                                        <a role="button" class="sb-link-primary">{{ data.text }}</a>
                                    </h3>
                                    <p class="fs-6 fw-semibold lh-base text-sb-gray-400">
                                        {{ data.content }}
                                    </p>
                                </div>
                                <div class="article-card-footer pb-6 d-flex justify-content-between align-items-center">
                                    <linkPrimary :text="linkText" class="fs-4 py-2"></linkPrimary>
                                    <div>
                                        <span class="badge sb-badge-primary" v-if="data.tag">{{ data.tag }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- card -->
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
@import "@/assets/styles/imports/_variables";

.article .article {
    &-card {
        max-width: 324px;
        margin: 0 auto;
        border-bottom: 1px solid $sb-gray-500;

        @include pc {
            max-width: 404px;
        }
    }

    &-card-header>img {
        width: 100%;
        height: 192px;
    }

    &-card-header>img:hover {
        filter: opacity(0.7);
        cursor: pointer;
    }

    &-card-body>p {
        letter-spacing: $letter-spacing-sm;
    }
}


.mySwiper {
    width: 100%;
    height: auto;

    @include pc {
        /* max-width: 856px; */
        margin-left: auto;
    }
}
</style>

<script setup>
import { ref } from 'vue'
import btnPagination from '@/components/common/btnPagination.vue';
import linkPrimary from '@/components/common/linkPrimary.vue';

import articles1 from '@/assets/images/home/section-article/articles-1.png';
import articles1sm from '@/assets/images/home/section-article/articles-1-sm.png';
import articles2 from '@/assets/images/home/section-article/articles-2.png';
import articles2sm from '@/assets/images/home/section-article/articles-2-sm.png';

import SwiperClass from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

const linkText = ref('Read More')
const isShowNumber = ref(true)

const datas = ref([
    {
        id: 1,
        text: '私人島嶼的露營奇遇記',
        imageLg: articles1,
        imageSm: articles1sm,
        content: '遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧..',
        tag: ''
    },
    {
        id: 2,
        text: '窺探米其林三星主廚的絕密手藝',
        imageLg: articles2,
        imageSm: articles2sm,
        content: '在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,沉浸其中,品嘗人...',
        tag: '會員專屬'
    },
])

</script>