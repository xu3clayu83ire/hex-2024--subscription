<template>
    <footer>
        <div class="container">
            <div class="footer-wrap row">
                <div class="col">
                    <p class="footer-text py-5 py-lg-6 text-sb-primary-400 text-center">©Vivre 2024 All right Reserved
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "@/assets/styles/imports/_breakpoint";
@import "@/assets/styles/imports/_colors";
// @import "@/assets/styles/imports/_variables";

.footer {
    &-wrap {
        border-top: 1px solid $sb-gray-300;
    }

    &-text {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;

        @include pc {
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>