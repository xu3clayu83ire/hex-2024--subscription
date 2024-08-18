<template>
    <div class="banner bg-sb-primary-100">
        <div class="container py-lg-12">
            <div class="banner-wrap">
                <div class="">
                    <img src="../../assets/images/home/section-banner/banner.png" class="d-none d-lg-block img-fluid"
                        alt="">
                    <img src="../../assets/images/home/section-banner/banner-sm.png" class="d-lg-none img-fluid mx-auto"
                        alt="">
                </div>
                <div class="banner-text-wrap">
                    <div class="banner-text">
                        <p class="mb-2 mb-lg-3 text-white">獻給新世代的生活風格誌</p>
                        <h2 class="text-white fw-bolder">一起探索生活的無限可能</h2>
                        <div class="mt-5 mt-lg-6">
                            <btnPrimary :text="btnText" :icon="btnIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '../common/buttons/btnPrimary.vue';

const btnText = ref('馬上訂閱')
const btnIcon = ref(true)

</script>

<style scoped>
.banner .banner-wrap {
    position: relative;
}


/** banner-text-wrap */
.banner .banner-text-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: end;
    padding-bottom: 48px;
    text-align: center;
}

.banner .banner-text-wrap>div {
    margin: 0 auto;
}


/** banner-text */
.banner .banner-text>h2 {
    font-size: 28px;
}

@media (min-width: 992px) {

    /** banner-text */
    .banner .banner-text>p {
        font-size: 20px;
    }

    .banner .banner-text>h2 {
        font-size: 40px;
    }


    /** banner-text-wrap */
    .banner .banner-text-wrap {
        text-align: start;
        margin-left: 60px;
        padding-bottom: 0;
    }

    .banner .banner-text-wrap>div {
        margin: auto 0;
    }

}
</style>