<script setup>
import { ref } from 'vue'
import btnPrimary from '@/components/common/btnPrimary.vue';
import linkPrimary from '@/components/common/linkPrimary.vue';
import btnPagination from '@/components/common/btnPagination.vue';
</script>

<template>

  <h2 class="sb-section-title-primary">大家都在看</h2>
  <br>
  <span class="badge sb-badge-primary">#夜貓行程</span>
  <br>
  <btnPrimary text="登入 / 註冊"></btnPrimary>
  <br>
  <btnPrimary text="馬上訂閱" isShowArrow="true" class="fw-bolder fs-5"></btnPrimary>
  <br>
  <linkPrimary text="Read More" class="fs-5"></linkPrimary>
  <br>
  <linkPrimary text="View More" class=""></linkPrimary>
  <br>
  <btnPagination></btnPagination>
  <br>
</template>

<style scoped></style>