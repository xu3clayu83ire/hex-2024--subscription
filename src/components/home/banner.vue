<template>
    <div class="banner">
        <div class="container py-lg-15">
            <div class="banner-img-wrap">
                <div class="">
                    <img src="../../assets/images/home/section-banner/banner.png" class="d-none d-lg-block img-fluid"
                        alt="">
                    <img src="../../assets/images/home/section-banner/banner-sm.png" class="d-lg-none img-fluid mx-auto"
                        alt="">
                </div>
                <div class="banner-text-wrap">
                    <div>
                        <p class="mb-2 mb-lg-3 text-white">獻給新世代的生活風格誌</p>
                        <h2 class="mb-5 mb-lg-6 text-white fw-bolder">一起探索生活的無限可能</h2>
                        <btnPrimary :text="btnText" :isShowArrow="isShowArrow" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnText = ref('馬上訂閱')
const isShowArrow = ref(true)

</script>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
//@import "@/assets/styles/imports/_colors";
//@import "@/assets/styles/imports/_variables";

.banner .banner {
    &-img-wrap {
        position: relative;
    }

    &-text-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: end;

        @include pc {
            justify-content: start;
            align-items: center;
        }
    }

    &-text-wrap>div {
        text-align: center;
        margin-bottom: 48px;

        @include pc {
            text-align: start;
            margin-left: 61px;
            margin-bottom: 0px;
        }
    }

    &-text-wrap>div>p {
        @include pc {
            font-size: 20px;
        }
    }

    &-text-wrap>div>h2 {
        font-size: 28px;

        @include pc {
            font-size: 40px;
        }
    }
}
</style>