<template>
    <h2>Hello aaa</h2>
    <swiper :modules="modules" :pagination="{ clickable: true }" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper>
</template>

<script>
import SwiperClass, { Pagination } from 'Swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            //modules: [Pagination]
        }
    }
}
</script>
<style>
.mySwiper {
    background-color: aqua;
    width: 200px;
    height: 300px;
}
</style>