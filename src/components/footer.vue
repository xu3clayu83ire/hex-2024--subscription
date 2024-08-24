<template>
    <footer>
        <div class="container">
            <div class="row py-13 py-lg-15">
                <div class="col-lg-6 mb-4">
                    <h2 class="fs-2 text-center text-lg-start fw-bolder">
                        想看什麼主題由你決定！
                    </h2>
                </div>
                <div class="col">
                    <h3 class="fs-4 fw-bold text-center text-lg-end">歡迎投稿與我們分享</h3>
                    <div class="mt-10 mt-lg-4">
                        <btnPrimary :text="btnText" class="footer-sb-btn-primary" />
                    </div>
                </div>
            </div>
            <div class="footer-buttom row ">
                <div class="col">
                    <p class="py-5 py-lg-6 text-sb-primary-400 text-center">©Vivre 2024 All right Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnText = ref('聯絡我們')

</script>

<style scoped>
.footer-sb-btn-primary {
    margin: 0 auto;
}

.footer-buttom {
    border-top: 1px solid #ADB5BD;
}

.footer-buttom p {
    font-weight: 400;
    line-height: 24px;
}


@media (min-width: 992px) {
    .footer-buttom p {
        font-weight: 600;
        line-height: 24px;
    }

    .footer-sb-btn-primary {
        margin-right: 0;
        margin-left: auto;
    }

}
</style>