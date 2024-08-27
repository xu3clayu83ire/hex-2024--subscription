import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'; 
import '@/assets/styles/all.scss';

import 'bootstrap';
import AOS from 'aos';
AOS.init();

// import SwiperClass, { /* swiper modules... */ } from 'Swiper'
// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import swiper module styles
// import 'swiper/css'
// SwiperClass.use([/* swiper modules... */])


const app = createApp(App)
app.use(router)
//app.use(VueAwesomeSwiper)
app.mount('#app')