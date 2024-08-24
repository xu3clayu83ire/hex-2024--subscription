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
                    <div class="banner-text">
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

<style scoped>
.banner .banner-img-wrap {
    position: relative;
}

.banner .banner-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
}

.banner .banner-text-wrap>.banner-text {
    text-align: center;
    margin-bottom: 48px;
}

.banner .banner-text-wrap>.banner-text>p {
    font-size: 16px;
}

.banner .banner-text-wrap>.banner-text>h2 {
    font-size: 28px;
}

@media (min-width: 992px) {

    .banner .banner-text-wrap {
        justify-content: start;
        align-items: center;
    }

    .banner .banner-text-wrap>.banner-text {
        text-align: start;
        margin-left: 61px;
        margin-bottom: 0px;
    }

    .banner .banner-text-wrap>.banner-text>p {
        font-size: 20px;
    }

    .banner .banner-text-wrap>.banner-text>h2 {
        font-size: 40px;
    }

}
</style>