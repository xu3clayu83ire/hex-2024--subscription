<template>
    <button type="button" class="btn sb-btn btn-primary">
        {{ text }}
        <i v-if="isShowArrow" class="bi bi-arrow-right ms-3"></i>
    </button>
</template>

<script setup>

const props = defineProps(['text', 'isShowArrow'])
const text = props.text;
const isShowArrow = props.isShowArrow;

</script>

<style scoped>
.sb-btn {
    padding: 12px 20px;
}

.btn-primary {
    color: #fff !important;
    background-color: #569573 !important;
    border: none !important;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
}

.btn-primary>i {
    font-size: 20px;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active {
    color: #fff !important;
    background-color: #406c55 !important;
    border: none !important;
}

.btn-primary.disabled {
    background-color: #e9ecef !important;
    border: none !important;
}


@media (min-width: 992px) {
    .sb-btn {
        padding: 16px 24px;
    }

    .btn-primary>i {
        font-size: 24px;
    }
}
</style>