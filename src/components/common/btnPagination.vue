<template>
    <div class="sb-pagination">
        <div class="sb-pagination-number">
            <span>1</span>
            <span>/</span>
            <span>5</span>
        </div>
        <div class="d-flex align-items-center">
            <button type="button" class="btn sb-btn-outline-secondary fs-4">
                <i class="bi bi-arrow-left"></i>
            </button>
            <hr class="sb-pagination-hr">
            <button type="button" class="btn sb-btn-outline-secondary fs-4">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>

</template>

<script setup>

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
        line-height: 1;
    }


    @media (min-width: 992px) {
        .sb-pagination {
            display: block;
        }

        .sb-pagination-number {
            margin-bottom: 32px;
        }
    }
</style>