<template>
    <div class="hots">
        <div class="container py-13 py-lg-15">
            <h2 class="sb-section-title-primary mb-6 mb-lg-11">大家都在看</h2>
            <div class="row">
                <div class="col-lg-3">
                    <div class="hots-side bg-white p-6 h-100">
                        <ul>
                            <li class="mb-6">
                                <a href="#" class="active p-4 fw-bolder fs-5">．酒精路跑地圖</a>
                            </li>
                            <li class="mb-6">
                                <a href="#" class="p-4 fw-bolder fs-5">．台北拉麵圖鑑</a>
                            </li>
                            <li class="mb-6">
                                <a href="#" class="p-4 fw-bolder fs-5">．海島自由行</a>
                            </li>
                            <li class="mb-6">
                                <a href="#" class="p-4 fw-bolder fs-5">．短天數出國推薦</a>
                            </li>
                            <li class="">
                                <a href="#" class="p-4 fw-bolder fs-5">．週末露營趣 </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="bg-white p-11">
                        <div class="hots-card">
                            <div class="card-header p-6 mb-4">
                                <h3 class="text-sb-accent-200 fs-4 mb-6 fw-bolder">酒精路跑地圖</h3>
                                <ul class="">
                                    <li class="mb-5">｜城市酒吧人氣榜,盤點當紅熱門酒吧</li>
                                    <li class="mb-5">｜你要的調酒師在這裡！五月全台酒吧客座活動整理</li>
                                    <li>｜台南老宅手工酒藏,尋味百年人文釀意</li>
                                </ul>
                            </div>
                            <div class="card-body px-4 mb-4">
                                <div class="d-flex flex-wrap">
                                    <img class="me-1" :src="hots1" alt="酒精路跑地圖">
                                    <img class="me-1" :src="hots2" alt="酒精路跑地圖">
                                    <img class="me-1" :src="hots3" alt="酒精路跑地圖">
                                    <img :src="hots4" alt="酒精路跑地圖">
                                </div>
                            </div>
                            <div class="card-footer p-6">
                                <div class="align-items-center d-flex justify-content-between">
                                    <div class="my-2">
                                        <a role="button"><span class="badge sb-badge-primary me-4">#夜貓行程</span></a>
                                        <a role="button"><span
                                                class="badge sb-badge-primary me-4">#barhopping</span></a>
                                        <a role="button"><span class="badge sb-badge-primary">#全台酒吧</span></a>
                                    </div>
                                    <div class="link">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import linkPrimary from '@/components/common/linkPrimary.vue';

import hots1 from '@/assets/images/home/section-hots/lg/item1/hots-1.png';
import hots2 from '@/assets/images/home/section-hots/lg/item1/hots-2.png';
import hots3 from '@/assets/images/home/section-hots/lg/item1/hots-3.png';
import hots4 from '@/assets/images/home/section-hots/lg/item1/hots-4.png';

const linkText = ref('View More')

</script>

<style scoped lang="scss">
//@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
//@import "@/assets/styles/imports/_variables";

.hots .hots {
    &-side a {
        display: block;
        color: $sb-gray-600;

        &:hover,
        &.active {
            background-color: $sb-accent-100;
        }
    }

    &-card>.card-body img {
        max-width: 210px;
        width: 100%;
        height: 232px;
        border-radius: 4px;

        &:nth-child(1) {
            border-radius: 20px 0 4px 20px;
        }

        &:nth-child(4) {
            border-radius: 0 20px 20px 0;
        }
    }

    &-card>.card-footer .link>svg {
        vertical-align: text-bottom;
    }

}
</style>