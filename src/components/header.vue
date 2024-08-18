<template>
    <nav class="navbar navbar-expand-lg bg-sb-primary-100 pb-1">
        <div class="container navbar-border-bottom">
            <a id="navbarBrand" class="navbar-brand py-0 me-lg-8" href="#">
                <img src="../assets/images/logo-lg.svg" class="d-none d-lg-block" alt="logo">
                <img src="../assets/images/logo-sm.svg" class="d-lg-none" alt="logo">
            </a>
            <button id="mobileMenuBtn" class="navbar-toggler border-0 p-3 ms-auto" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000"
                    class="open active bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000" class="close bi bi-x"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-lg-between" id="navbarSupportedContent">
                <div class="navbar-search mb-6 mb-lg-0">
                    <form>
                        <input class="form-control rounded-5" type="search" placeholder="搜尋文章" aria-label="Search">
                    </form>
                </div>
                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item mb-6 mb-lg-0">
                        <a class="nav-link" href="">所有文章</a>
                    </li>
                    <li class="nav-item mb-6 mb-lg-0">
                        <a class="nav-link" href="">訂閱方案</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">關於我們</a>
                    </li>
                    <li class="mt-9 mt-lg-0">
                        <div>
                            <btnPrimary :text="btnText" class="fw-bold fs-6" />
                            <!-- <a class="btn-logon btn btn-primary w-100" type="button">登入 / 註冊</a> -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Collapse } from 'bootstrap';
import btnPrimary from '../components/common/buttons/btnPrimary.vue';

const btnText = ref('登入 / 註冊')

onMounted(() => {

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    mobileMenuBtn.addEventListener('click', (e) => {
        const btnOpen = mobileMenuBtn.querySelector('svg.open');
        const btnClose = mobileMenuBtn.querySelector('svg.close');
        btnOpen.classList?.toggle("active");
        btnClose.classList?.toggle("active");

        const isHideNavbarBrand = btnClose.classList.contains("active");
        const navbarBrand = document.getElementById('navbarBrand');
        if (isHideNavbarBrand) {
            navbarBrand.classList.add('d-none');
        } else {
            navbarBrand.classList.remove('d-none');
        }
    });

});

</script>

<style scoped>
a.nav-link {
    font-weight: 700;
    padding: 12px;
    /**44px */
    line-height: 1.2;
}

button.navbar-toggler>svg {
    display: none;
}

button.navbar-toggler>svg.active {
    display: block;
}

@media (min-width: 992px) {

    li.nav-item:not(:last-child) {
        margin-bottom: 0;
        padding: 0;
        margin-right: 1.25rem;
    }

    a.nav-link {
        padding: 2.75rem 0;
        /**44px */
    }

    .navbar-border-bottom {
        border-bottom: 1px solid #ADB5BD;
    }

}

/* .navbar-collapse.collapse.show {
    height: 100vh;
} */
</style>