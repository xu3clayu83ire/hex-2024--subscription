<template>
    <a class="link-img-wrap d-block" role="button">
        <img :src="imgPath" :alt="text">
        <div class="link-img-text align-items-center d-flex justify-content-between">
            <span>{{ text }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
        </div>
        <div class="link-img-badge">
            <badgePrimary :text="badgeText"></badgePrimary>
        </div>
    </a>
</template>

<script setup>
import { ref } from 'vue'
import badgePrimary from '@/components/common/badgePrimary.vue';

const props = defineProps(['imgPath', 'text', 'badgeText'])
const imgPath = props.imgPath;
const text = props.text;
const badgeText = props.badgeText;

</script>

<style scoped lang="scss">
.link-img {
    &-wrap {
        position: relative;
    }

    &-wrap img {
        max-width: 306px;
        width: 100%;
        height: 236px;
        border-radius: 4px;
        object-fit: cover;
    }

    &-wrap:hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #212529;
        opacity: 0.4;
        border-radius: 4px;
    }

    &-text {
        z-index: 99;
        position: absolute;
        color: #fff;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 12px 12px 16px 12px;
    }

    &-badge {
        z-index: 99;
        position: absolute;
        top: -16px;
        left: 16px;
    }
}
</style>