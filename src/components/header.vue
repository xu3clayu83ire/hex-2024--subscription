<template>
    <nav class="navbar navbar-expand-lg navbar-light pb-1 py-lg-0">
        <div class="container sb-navbar-border">
            <a id="navbarBrand" class="navbar-brand me-lg-10" href="#">
                <img src="../assets/images/logo-lg.svg" class="d-none d-lg-block" alt="logo">
                <img src="../assets/images/logo-sm.svg" class="d-lg-none" alt="logo">
            </a>
            <button id="mobileMenuBtn" class="sb-navbar-toggler navbar-toggler border-0 p-3 ms-auto shadow-none"
                type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
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
            <div class="offcanvas offcanvas-end my-lg-10" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close text-reset shadow-none" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        <form class="sb-navbar-search d-flex mb-6 mb-lg-0">
                            <input class="form-control" type="search" placeholder="搜尋文章" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#569573"
                                class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </form>
                    </div>
                    <ul class="navbar-nav align-items-lg-center ms-lg-auto">
                        <li class="nav-item mb-6 mb-lg-0 me-lg-5">
                            <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">所有文章</a>
                        </li>
                        <li class="nav-item mb-6 mb-lg-0 me-lg-5">
                            <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">訂閱方案</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">關於我們</a>
                        </li>
                        <li class="mt-11 mt-lg-0 ms-lg-5">
                            <RouterLink :to="{ name: 'register' }">
                                <btnPrimary :text="btnLogonText" class="w-100 fs-6 lh-sm"></btnPrimary>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- <div class="collapse navbar-collapse my-6 my-lg-10 justify-content-lg-between" id="navbarSupportedContent">
                <div>
                    <form class="sb-navbar-search d-flex mb-6 mb-lg-0">
                        <input class="form-control" type="search" placeholder="搜尋文章" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#569573"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </form>
                </div>
                <ul class="navbar-nav align-items-lg-center">
                    <li class="nav-item mb-6 mb-lg-0 me-lg-5">
                        <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">所有文章</a>
                    </li>
                    <li class="nav-item mb-6 mb-lg-0 me-lg-5">
                        <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">訂閱方案</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-3 py-lg-2 px-lg-5" href="#">關於我們</a>
                    </li>
                    <li class="mt-11 mt-lg-0 ms-lg-5">
                        <RouterLink :to="{ name: 'register' }">
                            <btnPrimary :text="btnLogonText" class="w-100 fs-6 lh-sm"></btnPrimary>
                        </RouterLink>
                    </li>
                </ul>
            </div> -->
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
//import { Collapse } from 'bootstrap';
import btnPrimary from '@/components/common/btnPrimary.vue';

const btnLogonText = ref('登入 / 註冊')

onMounted(() => {

    // const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    // mobileMenuBtn.addEventListener('click', (e) => {
    //     const btnOpen = mobileMenuBtn.querySelector('svg.open');
    //     const btnClose = mobileMenuBtn.querySelector('svg.close');
    //     btnOpen.classList?.toggle("active");
    //     btnClose.classList?.toggle("active");

    //     const isHideNavbarBrand = btnClose.classList.contains("active");
    //     const navbarBrand = document.getElementById('navbarBrand');
    //     if (isHideNavbarBrand) {
    //         navbarBrand.classList.add('d-none');
    //     } else {
    //         navbarBrand.classList.remove('d-none');
    //     }
    // });

});

</script>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
// @import "@/assets/styles/imports/_variables";

nav.navbar .sb-navbar {

    &-toggler>svg {
        display: none;

        &.active {
            display: block;
        }
    }

    &-search {
        position: relative;

        svg {
            position: absolute;
            top: 12px;
            right: 16px;
        }

        .form-control {
            border-radius: 100px;
            padding: 12px 20px;

            &:focus {
                border-color: $sb-gray-200;
                box-shadow: 0 0 0 0.25rem #e9ecef;
            }
        }
    }

    &-border {
        @include pc {
            border-bottom: 1px solid $sb-gray-300;
        }
    }
}
</style>