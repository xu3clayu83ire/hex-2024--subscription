<template>
    <div class="theme">
        <div class="container py-13 py-lg-15">
            <h2 class="sb-section-title-primary mb-6">熱門主題</h2>
            <div class="row g-2 g-lg-6">
                <div v-for=" data in datas" :key="data.id" class="col-sm-6 col-lg-3">
                    <a class="theme-item-wrap" role="button">
                        <div class="theme-item-img">
                            <img :src="data.imageLg" class="d-none d-lg-block img-fluid" alt="">
                            <img :src="data.imageSm" class="d-lg-none img-fluid mx-auto" alt="">
                        </div>
                        <div class="theme-item-overlay">
                            <p class="text-white">{{ data.text }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
// @import "@/assets/styles/imports/_colors";
// @import "@/assets/styles/imports/_variables";

.theme .theme {
    &-item-wrap {
        position: relative;
    }

    &-item-img img {
        border-radius: 20px 0px;
    }

    &-item-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover::after,
        &:focus::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: #212529;
            opacity: 0.4;
            border-radius: 20px 0px;
        }
    }

    &-item-overlay>p {
        z-index: 99;

        @include pc {
            font-size: 20px;
        }
    }
}
</style>

<script setup>
import { ref } from 'vue'

import theme1 from '@/assets/images/home/section-theme/theme-1.png';
import theme2 from '@/assets/images/home/section-theme/theme-2.png';
import theme3 from '@/assets/images/home/section-theme/theme-3.png';
import theme4 from '@/assets/images/home/section-theme/theme-4.png';
import theme5 from '@/assets/images/home/section-theme/theme-5.png';
import theme6 from '@/assets/images/home/section-theme/theme-6.png';
import theme7 from '@/assets/images/home/section-theme/theme-7.png';
import theme8 from '@/assets/images/home/section-theme/theme-8.png';
import theme1sm from '@/assets/images/home/section-theme/theme-1-sm.png';
import theme2sm from '@/assets/images/home/section-theme/theme-2-sm.png';
import theme3sm from '@/assets/images/home/section-theme/theme-3-sm.png';
import theme4sm from '@/assets/images/home/section-theme/theme-4-sm.png';
import theme5sm from '@/assets/images/home/section-theme/theme-5-sm.png';
import theme6sm from '@/assets/images/home/section-theme/theme-6-sm.png';
import theme7sm from '@/assets/images/home/section-theme/theme-7-sm.png';
import theme8sm from '@/assets/images/home/section-theme/theme-8-sm.png';

const datas = ref([
    {
        id: 1,
        text: '城市漫遊者',
        imageLg: theme1,
        imageSm: theme1sm,
    },
    {
        id: 2,
        text: '秘境尋蹤人',
        imageLg: theme3,
        imageSm: theme3sm,
    },
    {
        id: 3,
        text: '品味設計家',
        imageLg: theme5,
        imageSm: theme5sm,
    },
    {
        id: 4,
        text: '美食探險記',
        imageLg: theme8,
        imageSm: theme8sm,
    },
    {
        id: 5,
        text: '美學建築誌',
        imageLg: theme2,
        imageSm: theme2sm,
    },
    {
        id: 6,
        text: '慢活生活行',
        imageLg: theme4,
        imageSm: theme4sm,
    },
    {
        id: 7,
        text: '工藝匠心賞',
        imageLg: theme6,
        imageSm: theme6sm,
    },
    {
        id: 8,
        text: '時尚先鋒派',
        imageLg: theme7,
        imageSm: theme7sm,
    }
]);

</script>
