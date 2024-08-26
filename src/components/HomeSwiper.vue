<template>
    <h2>Hello aaa</h2>
    <swiper :pagination="{ clickable: true }" :breakpoints="{
        0: {  //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 10
        },
        992: {  //当屏幕宽度大于等于320
            slidesPerView: 2,
            spaceBetween: 10
        },
        // 768: {  //当屏幕宽度大于等于768 
        //     slidesPerView: 3,
        //     spaceBetween: 20
        // },
        // 1280: {  //当屏幕宽度大于等于1280
        //     slidesPerView: 4,
        //     spaceBetween: 30
        // }
    }" class="mySwiper">
        <swiper-slide>
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/home/section-article/articles-1-sm.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 18rem;">
                <img src="../assets/images/home/section-article/articles-1-sm.png" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </swiper-slide>
        <!-- <swiper-slide>Slide 3</swiper-slide> -->
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
    width: 18rem;
    height: 300px;
}


@media (min-width: 992px) {
    .mySwiper {
        width: 36rem;
    }
}

/* .swiper-slide {
    background-color: red;
    width: 200px;
    height: 200px;
} */
</style>