<template>
    <button type="button" class="btn sb-btn sb-btn-primary">
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
.btn.sb-btn {
    padding: 12px 20px;
}

.btn.sb-btn-primary {
    color: #fff;
    background-color: #569573;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
    display: flex;
    align-items: center;
}

.btn.sb-btn-primary>i {
    font-size: 20px;
    line-height: 1;
}

.btn.sb-btn-primary:hover,
.btn.sb-btn-primary:focus,
.btn.sb-btn-primary:active,
.btn.sb-btn-primary.active {
    color: #fff;
    background-color: #406c55;
    border: none;
}

.btn.sb-btn-primary.disabled {
    background-color: #e9ecef;
    border: none;
}


@media (min-width: 992px) {
    .btn.sb-btn {
        padding: 16px 24px;
    }

    .btn.sb-btn-primary {
        font-size: 20px;
        line-height: 24px;
    }

    .btn.sb-btn-primary>i {
        font-size: 24px;
        line-height: 1;
    }
}
</style>