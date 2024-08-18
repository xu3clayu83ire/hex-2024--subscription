<template>
    <div class="news bg-sb-primary-200">
        <div class="container">
            <div class="news-wrap py-10 py-lg-12">
                <div class="news-img-start d-none d-lg-block">
                    <img src="../../assets/images/bg-1.png" alt="">
                </div>
                <div class="d-flex justify-content-center">
                    <div class="new-text-wrap text-center">
                        <p class="new-text-desc mb-3 mb-lg-5">\ 母親節強檔活動 / </p>
                        <h2 class="fs-2 fw-bolder">家庭訂閱方案限時 7 折</h2>
                        <div class="d-flex justify-content-center">
                            <ul class="new-text-list my-6 mt-lg-5 mb-lg-9 text-sb-gray-400 fw-semibold">
                                <li><i class="bi bi-check me-3 fs-4"></i>每月最新文章無限閱讀</li>
                                <li><i class="bi bi-check me-3 fs-4"></i>專屬會員限定內容</li>
                                <li><i class="bi bi-check me-3 fs-4"></i>定期電子報</li>
                                <li><i class="bi bi-check me-3 fs-4"></i>年度精選禮物</li>
                                <li><i class="bi bi-check me-3 fs-4"></i>24 /7 優先客戶服務</li>
                                <li><i class="bi bi-check me-3 fs-4"></i>為每個成員量身打造專屬行程
                                </li>
                            </ul>
                        </div>
                        <btnPrimary :text="btnText" />
                    </div>
                </div>
                <div class="news-img-end">
                    <img src="../../assets/images/bg-2.png" class="d-none d-lg-block" alt="">
                    <img src="../../assets/images/bg-2-sm.png" class="d-lg-none" alt="">
                </div>
            </div>
            <!-- <div class="news-img-end-sm">
                <img src="../../assets/images/bg-2-sm.png" class="d-lg-none" alt="">
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '../common/buttons/btnPrimary.vue';

const btnText = ref('我想了解')

</script>

<style scoped>
/** new-text-wrap */
.news .new-text-wrap ul>li:not(:last-child) {
    margin-bottom: 1rem;
}

.news .new-text-wrap p.new-text-desc {
    color: #569573;
}

.news .new-text-wrap ul.new-text-list>li {
    display: flex;
    align-items: center;
}


.news .news-wrap {
    position: relative;
}

.news .news-wrap .news-img-start {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.news .news-wrap .news-img-end {
    position: absolute;
    bottom: 18px;
    right: -60px;
}

@media (min-width: 992px) {

    /** new-text-wrap */
    .news .new-text-wrap p.new-text-desc {
        color: #6E6B67;
        font-size: 24px;
    }

    /** news-img-end */
    .news .news-wrap .news-img-end {
        position: absolute;
        bottom: 0;
        right: 0;

    }

}
</style>