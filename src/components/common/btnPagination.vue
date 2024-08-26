<template>
    <div class="sb-pagination">
        <div class="sb-pagination-number" v-if="isShowNumber">
            <span>1</span>
            <span>/</span>
            <span>5</span>
        </div>
        <div class="d-flex align-items-center">
            <button type="button" class="btn btn-outline-secondary sb-btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </button>
            <hr class="sb-pagination-hr">
            <button type="button" class="btn btn-outline-secondary sb-btn-outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </button>
        </div>
    </div>

</template>

<script setup>
const props = defineProps(['isShowNumber'])
const isShowNumber = props.isShowNumber;

</script>

<style scoped>
.sb-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sb-pagination-number {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    /* color: $sb-gray-500; */
}

.sb-pagination-number>span:not(:last-child) {
    margin-right: 10px;
}

.sb-pagination-number>span:nth-child(2) {
    color: #ADB5BD;
}

.sb-pagination-hr {
    color: #6C757D;
    width: 80px;
    margin: 0 20px;
}

.sb-btn-outline-secondary {
    padding: 4px 16px;
    color: #6C757D;
    border-color: #6C757D;
    border-radius: 100px;
}

.sb-btn-outline-secondary:hover,
.sb-btn-outline-secondary:active,
.sb-btn-outline-secondary:focus-visible {
    color: #fff;
    background-color: #6C757D;
    border-color: #6C757D;
}

@media (min-width: 1200px) {
    .sb-pagination {
        display: block;
    }

    .sb-pagination-number {
        margin-bottom: 32px;
    }
}
</style>