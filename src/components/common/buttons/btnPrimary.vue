<template>
    <div>
        <button type="button" class="btn btn-sb btn-primary">
            {{ text }}
            <i v-if="isShow" class="bi bi-arrow-right ms-3"></i>
        </button>
    </div>
</template>

<script setup>

const props = defineProps(['text', 'icon'])
const text = props.text;
const isShow = props.icon;

</script>

<style scoped>
.btn-sb {
    padding: 12px 20px;
}

.btn-primary {
    color: #fff !important;
    background-color: #569573 !important;
    border: none !important;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
}

.btn-primary>i {
    font-size: 1.25rem;
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

    .btn-sb {
        padding: 16px 24px;
    }

    .btn-primary {
        font-size: 1.25rem;
        font-weight: 900;
    }

    .btn-primary>i {
        font-size: 1.5rem;
    }
}
</style>