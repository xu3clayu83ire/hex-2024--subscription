<template>
    <div class="project bg-sb-primary-200">
        <div class="container py-13 py-lg-15">
            <div class="row">
                <div class="col-lg-6 my-auto text-center text-lg-start">
                    <div>
                        <p class="project-title-desc mb-4">今天又不知道要去哪裡了嗎？</p>
                        <h2 class="sb-section-title-primary">
                            <span class="d-block d-lg-inline">Vivre</span>給你意想不到生活風格提案
                        </h2>
                        <btnPrimary :text="btnText" :isShowArrow="isShowArrow" class="mt-6 mt-lg-10" />
                    </div>
                </div>
                <div class="col">
                    <div class="row d-none d-lg-flex">
                        <div class="col-6 mt-lg-15">
                            <linkImg :imgPath="datas[0].imagePath" :text="datas[0].title"
                                :badgeText="datas[0].badgeText" class="mb-lg-11"></linkImg>
                            <linkImg :imgPath="datas[1].imagePath" :text="datas[1].title"
                                :badgeText="datas[1].badgeText"></linkImg>
                        </div>
                        <div class="project-img-wrap col-6">
                            <linkImg :imgPath="datas[2].imagePath" :text="datas[2].title"
                                :badgeText="datas[2].badgeText" class="mb-lg-11"></linkImg>
                            <linkImg :imgPath="datas[3].imagePath" :text="datas[3].title"
                                :badgeText="datas[3].badgeText"></linkImg>
                        </div>
                    </div>
                    <swiper :pagination="{ clickable: true }" :breakpoints="{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 24
                        },
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 24
                        },
                    }" class="mySwiper mt-14 d-block d-lg-none">
                        <swiper-slide v-for=" (item, idx) in datas" :key="item.id" class="mySwiperSlide mt-auto">
                            <linkImg :imgPath="datas[idx].imagePath" :text="datas[idx].title"
                                :badgeText="datas[idx].badgeText" class="mb-lg-11"></linkImg>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';
import linkImg from '@/components/common/linkImg.vue';

import projects1 from '@/assets/images/home/section-project/projects-1.png';//山女孩的健行筆記
import projects2 from '@/assets/images/home/section-project/projects-2.png';//親子露營要帶什麼？
import projects3 from '@/assets/images/home/section-project/projects-3.png';//適合溜小孩的海邊景點推薦
import projects4 from '@/assets/images/home/section-project/projects-4.png';//質感房間改造攻略！

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

const btnText = ref('馬上訂閱')
const isShowArrow = ref(true)

const datas = ref([
    {
        id: 1,
        title: '親子露營要帶什麼？',
        imagePath: projects2,
        badgeText: '人氣行程'
    },
    {
        id: 2,
        title: '質感房間改造攻略！',
        imagePath: projects4,
        badgeText: '編輯推薦'
    },
    {
        id: 3,
        title: '山女孩的健行筆記',
        imagePath: projects1,
        badgeText: '編輯推薦'
    },
    {
        id: 4,
        title: '適合溜小孩的海邊景點推薦',
        imagePath: projects3,
        badgeText: '熱門文章'
    }
])
</script>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
// @import "@/assets/styles/imports/_variables";

.project .project {
    &-title-desc {
        color: $sb-gray-400;

        @include pc {
            font-size: 20px;
            font-weight: 900;
        }
    }
}

.mySwiper {
    max-width: 360px;
    min-width: 306px;
    width: 100%;
}

.mySwiperSlide {
    max-width: 306px;
    height: 252px;
    margin-top: auto;
}
</style>