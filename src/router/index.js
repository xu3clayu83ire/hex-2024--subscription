import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: HomeView
      },
      {
        path: '/',
        name: 'register',
        component: RegisterView
      },
    ]
  })
  
  export default router