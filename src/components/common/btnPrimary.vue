<template>
    <button type="button" class="btn sb-btn sb-btn-primary">
        {{ text }}
        <svg v-if="isShowArrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-arrow-right ms-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
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

.btn.sb-btn>svg {
    vertical-align: text-bottom;
}

.btn.sb-btn-primary {
    color: #fff;
    background-color: #569573;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;

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

    .btn.sb-btn-primary>svg {
        width: 24px;
        height: 24px;
    }
}
</style>