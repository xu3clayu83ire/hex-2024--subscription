import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TestView from '@/views/TestView.vue'

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
        path: '/test',
        name: 'test',
        component: TestView
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterView
      },
    ]
  })
  
  export default router