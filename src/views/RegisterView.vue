<template>
    <div class="register">
        <div class="container px-0">
            <div class="row g-0">
                <div class="col-lg-6 mx-auto">
                    <div class="card register-card p-6 p-lg-11">
                        <div class="header mb-6 mb-lg-11">
                            <h2 class="fs-4 text-sb-accent-200 fw-bolder">註冊</h2>
                        </div>
                        <div class="body mb-6 mb-lg-11">
                            <form>
                                <div class="mb-4">
                                    <label for="accountInput" class="form-label mb-3">會員帳號</label>
                                    <input type="text" class="form-control" id="accountInput" placeholder="請輸入會員帳號">
                                </div>
                                <div class="mb-4">
                                    <label for="ppwdInput" class="form-label mb-3">密碼</label>
                                    <input type="password" class="form-control" id="ppwdInput" placeholder="請輸入密碼">
                                </div>
                                <div class="mb-6 mb-lg-11">
                                    <label for="emailInput" class="form-label mb-3">電子信箱</label>
                                    <input type="email" class="form-control" id="emailInput" placeholder="請輸入電子信箱">
                                </div>
                                <div>
                                    <btnPrimary :text="btnText" :isShowArrow="isShowArrow"
                                        class="py-3 fs-6 w-100 lh-sm" />
                                </div>
                            </form>
                        </div>
                        <div class="footer">
                            <div class="register-others d-flex mb-6 mb-lg-11">
                                <hr>
                                <p class="mx-3 text-nowrap text-sb-gray-200">或以其他方式註冊</p>
                                <hr>
                            </div>
                            <div class="mb-6 mb-lg-11">
                                <button class="btnthirdparty w-100 py-3 mb-2 text-center">
                                    <img src="../assets/images/icons-google.png" class="d-inline-block me-3" alt="">
                                    <span>使用 Google 註冊</span>
                                </button>
                                <button class="btnthirdparty w-100 py-3 text-center">
                                    <img src="../assets/images/icons-facebook.png" class="d-inline-block me-3" alt="">
                                    <span>使用 Facebook 註冊</span>
                                </button>
                            </div>
                            <div class="fw-semibold lh-base text-center">
                                <span class="">已經是會員了？ </span>
                                <a class="text-sb-accent-200" href="#">點此登入 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnText = ref('立即註冊')
const isShowArrow = ref(true)

</script>

<style scoped>
.register {
    margin: 60px 0;
}

.register .card.register-card {
    border: 1px solid #E8E3DA;
    border-radius: 0;
}

.btnthirdparty {
    border: 1px solid #F8F9FA;
    background-color: #F8F9FA;
    border: 100px;
    color: #52525B;
    border-radius: 100px;
}

.register-card .body .form-control {
    padding: 12px 16px;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    background-color: #F8F9FA;
    border: none;
    border-radius: 8px;
    letter-spacing: 0.06em;
}

.register-card .body .form-control:focus {
    box-shadow: 0 0 0 0.25rem #dee2e6;
}

.register-card .footer .register-others>hr {
    border-top: 1px solid #DEE2E6;
    width: 100%;
    margin: 0.5rem 0;
}

@media (min-width: 992px) {
    .register {
        margin: 100px 0;
    }

    .register .card.register-card {
        border-radius: 12px;
    }
}
</style>