<script setup>
import { ref } from 'vue'

</script>

<template>
  <h1>HelloWord</h1>
  <button type="button" class="btn btn-primary btn-lg">我想了解</button>
  <button type="button" class="btn btn-primary btn-lg">
    馬上訂閱
    <i class="bi bi-arrow-right ms-3"></i>
  </button>
  <button type="button" class="btn btn-primary">我想了解</button>
  <button type="button" class="btn btn-primary disabled">我想了解</button>


  <br>
  <button type="button" class="btn btn-secondary btn-lg">套用</button>
  <button type="button" class="btn btn-secondary">套用</button>
  <button type="button" class="btn btn-secondary disabled">套用</button>

  <br>
  <h1 class="text-sb-primary-400">.text-sb-primary-400</h1>
  <h1 class="text-sb-primary-300">.text-sb-primary-300</h1>
  <h1 class="text-sb-primary-200">.text-sb-primary-200</h1>
  <h1 class="text-sb-primary-100">.text-sb-primary-100</h1>
  <h1 class="text-sb-accent-300">.text-sb-accent-300</h1>
  <h1 class="text-sb-accent-200">.text-sb-accent-200</h1>
  <h1 class="text-sb-accent-100">.text-sb-accent-100</h1>
  <h1 class="text-sb-info">.text-info</h1>
  <h1 class="text-sb-success">.text-success</h1>
  <h1 class="text-sb-danger">.text-danger</h1>
  <h1 class="text-sb-warning">.text-warning</h1>

  <br>
  <span class="badge bg-primary">Primary</span>
  <span class="badge badge-sb badge-sb-primary-300">#全台酒吧</span>
  <span class="badge badge-sb badge-sb-accent-300 ">
    <i class="bi bi-play-fill me-1"></i>
    編輯推薦
  </span>
</template>

<style scoped></style>