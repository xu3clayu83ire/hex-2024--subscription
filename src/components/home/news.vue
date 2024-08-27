<template>
    <div class="news">
        <div class="bg-sb-primary-200 overflow-hidden">
            <div class="container py-13 py-lg-15">
                <div class="news-wrap">
                    <div class="d-flex justify-content-center">
                        <div class="news-content-wrap text-center">
                            <p class="news-title-desc mb-3 mb-lg-5">\ 母親節強檔活動 / </p>
                            <h2 class="sb-section-title-primary mb-6 mb-lg-5">家庭訂閱方案限時 7 折</h2>
                            <div class="d-flex justify-content-center">
                                <ul class="news-content-list mb-6 mb-lg-11 text-start">
                                    <li><i class="bi bi-check me-3"></i>每月最新文章無限閱讀</li>
                                    <li><i class="bi bi-check me-3"></i>專屬會員限定內容</li>
                                    <li><i class="bi bi-check me-3"></i>定期電子報</li>
                                    <li><i class="bi bi-check me-3"></i>年度精選禮物</li>
                                    <li><i class="bi bi-check me-3"></i>24 /7 優先客戶服務</li>
                                    <li><i class="bi bi-check me-3"></i>為每個成員量身打造專屬行程</li>
                                </ul>
                            </div>
                            <btnPrimary :text="btnText" />
                        </div>
                    </div>
                    <div class="news-img-start">
                        <img src="../../assets/images/bg-1.png" alt="">
                    </div>
                    <div class="news-img-end">
                        <img src="../../assets/images/bg-2-sm.png" alt="">
                    </div>
                    <div class="news-img-end-lg">
                        <img src="../../assets/images/bg-2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnText = ref('我想了解')

</script>
<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
@import "@/assets/styles/imports/_variables";

.news .news {
    &-wrap {
        position: relative;
    }

    &-title-desc {
        color: $sb-accent-200;

        @include pc {
            color: $sb-primary-400;
            font-size: 24px;
            font-weight: 900;
        }
    }

    &-content-list li {
        color: $sb-gray-400;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: $letter-spacing-sm;

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    &-img-end {
        position: absolute;
        bottom: -55px;
        right: -60px;

        @include pc {
            display: none;
        }
    }

    &-img-end-lg {
        display: none;

        @include pc {
            display: block;
            position: absolute;
            bottom: -90px;
            right: 0;
        }
    }

    &-img-start {
        display: none;

        @include pc {
            display: block;
            position: absolute;
            bottom: -90px;
            left: 0;
        }
    }

}
</style>