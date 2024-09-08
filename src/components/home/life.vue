<template>
    <div class="life">
        <div class="container py-13 py-lg-15">
            <div class="row mb-6 mb-lg-11">
                <div class="col">
                    <div class="d-flex justify-content-lg-between">
                        <h2 class="sb-section-title-primary">品味生活</h2>
                        <btnPagination class="d-none d-lg-block"></btnPagination>
                    </div>
                </div>
            </div>
            <div class="row g-6">
                <div v-for=" data in datas" :key="data.id" class="col-lg-4">
                    <!-- card -->
                    <div class="life-card">
                        <div class="card-header mb-6 mb-lg-10">
                            <h2>{{ data.title }}</h2>
                        </div>
                        <div class="card-body  mb-6 mb-lg-10">
                            <div class="mb-6 mb-lg-10">
                                <img :src="data.imageLg" class="d-lg-block d-none" :alt="data.title">
                                <img :src="data.imageSm" class="d-lg-none" :alt="data.title">
                            </div>
                            <ul>
                                <li v-for=" (item, idx) in data.contentList" :key="idx"><a role="button"
                                        class="sb-link-primary">{{ item }}</a></li>
                            </ul>
                        </div>
                        <div class="card-footer text-center">
                            <linkPrimary :text="linkText" class="me-3"></linkPrimary>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#569573"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </div>
                    </div>
                    <!-- card -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
// @import "@/assets/styles/imports/_variables";

.life .life {
    &-card {
        max-width: 351px;
        margin: 0 auto;

        @include pc {
            max-width: 416px;
        }
    }

    &-card>.card-header>h2 {
        font-size: 40px;
        line-height: 1.2;
        font-weight: 900;
        color: $sb-primary-400;

        @include pc {
            font-size: 52px;
            line-height: 1.5;
        }
    }

    &-card>.card-body img {
        max-width: 351px;
        width: 100%;
        height: 192px;
        border-radius: 4px;
    }

    &-card>.card-body ul>li {

        &:not(:last-child) {
            margin-bottom: 20px;
        }

        @include pc {
            font-size: 20px;
        }
    }

    &-card>.card-footer svg {
        vertical-align: text-bottom;
    }
}
</style>

<script setup>
import { ref } from 'vue'
import btnPagination from '@/components/common/btnPagination.vue';
import linkPrimary from '@/components/common/linkPrimary.vue';

import life1 from '@/assets/images/home/section-life/life-1.png';
import life2 from '@/assets/images/home/section-life/life-2.png';
import life3 from '@/assets/images/home/section-life/life-3.png';
import life1sm from '@/assets/images/home/section-life/life-1-sm.png';
import life2sm from '@/assets/images/home/section-life/life-2-sm.png';
import life3sm from '@/assets/images/home/section-life/life-3-sm.png';

const linkText = ref('View More')

const datas = ref([
    {
        id: 1,
        title: '食.',
        imageLg: life1,
        imageSm: life1sm,
        contentList: [
            '｜米其林三星主廚的那些絕活傳奇',
            '｜探秘成都的地道川味秘技與魅力',
            '｜義大利釀酒師對於酒的堅持執著'
        ]
    },
    {
        id: 2,
        title: '藝.',
        imageLg: life2,
        imageSm: life2sm,
        contentList: [
            '｜解構教主級時裝設計大師的獨特美學',
            '｜當代攝影師鏡頭中的光影離奇',
            '｜帶你穿縮中世紀，夏季文藝復興展'
        ]
    },
    {
        id: 3,
        title: '旅.',
        imageLg: life3,
        imageSm: life3sm,
        contentList: [
            '｜遠離喧囂,偶探巴塔哥尼亞終界',
            '｜東京深度六區,帶你細品極簡魅力',
            '｜專賣奇珍異寶的東歐地下夜市'
        ]
    },
])

</script>
