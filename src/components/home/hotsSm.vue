<template>
    <div class="hotsSm">
        <div class="container py-13 py-lg-15">
            <h2 class="sb-section-title-primary mb-6 mb-lg-11">大家都在看</h2>
            <swiper :pagination="{ clickable: true }" :slides-per-view="1" :space-between="10" class="mySwiper">
                <swiper-slide v-for=" data in datas" :key="data.id">
                    <!-- card -->
                    <div class="hotsSm-card bg-white mx-auto p-4 rounded-3">
                        <div class="card-header mb-4">
                            <h3 class="text-sb-accent-200 fs-5 mb-3 fw-bolder">{{ data.title }}</h3>
                            <ul class="fw-semibold lh-base">
                                <li v-for=" (item, idx) in data.contentList" :key="idx" class="text-truncate">{{
                                    item }}</li>
                            </ul>
                        </div>
                        <div class="card-body mb-4">
                            <img :src="data.imagePath" alt="data.title" width="292" height="157">
                        </div>
                        <div class="card-footer">
                            <div class="">
                                <div class="mb-4">
                                    <a role="button">
                                        <span v-for=" (item, idx) in data.tags" :key="idx"
                                            class="badge sb-badge-primary my-2">{{ item }}</span>
                                    </a>
                                </div>
                                <div class="link text-center py-2">
                                    <linkPrimary :text="linkText" class="me-3"></linkPrimary>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#569573"
                                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- card -->
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<style scoped lang="scss">
//@import "@/assets/styles/imports/_breakpoint";
//@import "@/assets/styles/imports/_colors";
@import "@/assets/styles/imports/_variables";

.hotsSm .hotsSm {
    &-card {
        max-width: 330px;
    }

    &-card>.card-header ul {
        letter-spacing: $letter-spacing-sm;
    }

    &-card>.card-header ul>li:not(:last-child) {
        margin-bottom: 8px;
    }

    &-card>.card-footer span.sb-badge-primary:not(:last-child) {
        margin-right: 8px;
    }
}

.mySwiper {
    min-width: 324px;
    width: 100%;
    height: auto;
}
</style>

<script setup>
import { ref } from 'vue'
import linkPrimary from '@/components/common/linkPrimary.vue';

import hots1sm from '@/assets/images/home/section-hots/sm/hots-1-sm.png';
import hots2sm from '@/assets/images/home/section-hots/sm/hots-2-sm.png';
import hots3sm from '@/assets/images/home/section-hots/sm/hots-3-sm.png';
import hots4sm from '@/assets/images/home/section-hots/sm/hots-4-sm.png';
import hots5sm from '@/assets/images/home/section-hots/sm/hots-5-sm.png';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

const linkText = ref('View More')

const datas = ref([
    {
        id: 1,
        title: '酒精路跑地圖',
        imagePath: hots1sm,
        contentList: [
            '｜城市酒吧人氣榜,盤點當紅熱門酒吧',
            '｜你要的調酒師在這裡！五月全台酒...',
            '｜台南老宅手工酒藏,尋味百年人文釀意'
        ],
        tags: [
            '#夜貓行程', '#barhopping', '#全台酒吧'
        ]
    },
    {
        id: 2,
        title: '台北拉麵圖鑑',
        imagePath: hots3sm,
        contentList: [
            '｜城市酒吧人氣榜,盤點當紅熱門酒吧',
            '｜你要的調酒師在這裡！五月全台酒...',
            '｜台南老宅手工酒藏,尋味百年人文釀意'
        ],
        tags: [
            '#雞白湯', '#拉麵', '#台北美食'
        ]
    },
    {
        id: 3,
        title: '海島自由行',
        imagePath: hots4sm,
        contentList: [
            '｜私島慢活島嶼生活 - 在熱帶天堂品...',
            '｜海島漂流記 - 在陽光、沙灘和比基...',
            '｜島嶼蹤跡 - 揭開加勒比海上世外桃...'
        ],
        tags: [
            '#熱帶國家', '#海邊', '#無敵海景'
        ]
    },
    {
        id: 4,
        title: '短天數出國推薦',
        imagePath: hots5sm,
        contentList: [
            '｜72小時東京遊走 - 當個時尚東京通',
            '｜48小時曼谷遊玩全攻略 ',
            '｜三天兩夜賞櫻微醺東京'
        ],
        tags: [
            '#說走就走', '#出國玩', '#東亞'
        ]
    },
    {
        id: 5,
        title: '週末露營趣',
        imagePath: hots2sm,
        contentList: [
            '｜週末說走就走露營記',
            '｜你要的調酒師在這裡！五月全台酒...',
            '｜台南老宅手工酒藏,尋味百年人文釀意'
        ],
        tags: [
            '#戶外', '#露營控', '#凹豆'
        ]
    }
]);
</script>