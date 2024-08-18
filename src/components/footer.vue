<template>
    <footer class="bg-sb-primary-100">
        <div class="container">
            <div class="row py-10 py-lg-12 g-4 g-lg-0">
                <div class="col-lg-6">
                    <h2 class="fs-2 fw-bolder text-center text-lg-start">
                        想看什麼主題由你決定！
                    </h2>
                </div>
                <div class="col">
                    <div class="text-center text-lg-end">
                        <p class="fs-4">歡迎投稿與我們分享</p>
                        <div class="mt-8 mt-lg-4">
                            <button class="btn-logon btn btn-primary" type="button">聯絡我們</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer-end-text">
                <div class="col">
                    <p class="py-5 py-lg-6 text-sb-primary-400 text-center">©Vivre 2024 All right Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer-end-text {
    border-top: 1px solid #ADB5BD;
}

.footer-end-text>p {
    font-weight: 400;
}

@media (min-width: 992px) {
    .footer-end-text>p {
        font-weight: 600;
    }

}
</style>