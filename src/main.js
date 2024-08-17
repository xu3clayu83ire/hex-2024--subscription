import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import  'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'; 
import '@/assets/styles/all.scss';

import AOS from 'aos';
AOS.init();

const app = createApp(App)
app.use(router)
app.mount('#app')