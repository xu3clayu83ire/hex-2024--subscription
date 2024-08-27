<template>
    <div class="contact">
        <div class="container">
            <div class="row py-13 py-lg-15">
                <div class="col-lg-6 mb-4">
                    <h2 class="fs-2 text-center text-lg-start fw-bolder">
                        想看什麼主題由你決定！
                    </h2>
                </div>
                <div class="col">
                    <h3 class="fs-4 fw-bold text-center text-lg-end">歡迎投稿與我們分享</h3>
                    <div class="mt-10 mt-lg-4 text-center text-lg-end">
                        <btnPrimary :text="btnText" class="footer-sb-btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnText = ref('聯絡我們')

</script>

<style scoped></style>