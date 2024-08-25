<template>
    <div class="hotsSm">
        <div class="container py-13 py-lg-15">
            <h2 class="sb-section-title-primary mb-6 mb-lg-11">大家都在看</h2>
            <div class="row">
                <div class="col">
                    <div class="hots-content-card-sm bg-white p-4 rounded-3">
                        <div class="header mb-4">
                            <h3 class="text-sb-accent-200 fs-5 mb-3 fw-bolder">酒精路跑地圖</h3>
                            <ul class="fw-semibold lh-base">
                                <li class="mb-2 text-truncate">｜城市酒吧人氣榜,盤點當紅熱門酒吧</li>
                                <li class="mb-2 text-truncate">｜你要的調酒師在這裡！五月全台酒...</li>
                                <li class="text-truncate">｜台南老宅手工酒藏,尋味百年人文釀意</li>
                            </ul>
                        </div>
                        <div class="body mb-4">
                            <img :src="hots1sm" alt="酒精路跑地圖" width="292" height="157">
                        </div>
                        <div class="footer">
                            <div class="">
                                <div class="mb-4">
                                    <span class="badge sb-badge-primary my-2 me-2">#夜貓行程</span>
                                    <span class="badge sb-badge-primary my-2 me-2">#barhopping</span>
                                    <span class="badge sb-badge-primary my-2">#全台酒吧</span>
                                </div>
                                <div class="link text-center py-2">
                                    <linkPrimary :text="linkText" class="me-3"></linkPrimary>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#569573"
                                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hotsSm .hots-content-card-sm {
    max-width: 330px;
}

.hotsSm .hots-content-card-sm .header ul {
    letter-spacing: 0.06em;
}
</style>

<script setup>
import { ref } from 'vue'
import linkPrimary from '@/components/common/linkPrimary.vue';

import hots1sm from '@/assets/images/home/section-hots/sm/hots-1-sm.png';
import hots2sm from '@/assets/images/home/section-hots/sm/hots-2-sm.png';
import hots3sm from '@/assets/images/home/section-hots/sm/hots-3-sm.png';
import hots4sm from '@/assets/images/home/section-hots/sm/hots-4-sm.png';

const linkText = ref('View More')


</script>