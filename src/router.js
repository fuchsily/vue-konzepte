import { createRouter, createWebHistory } from 'vue-router';

import Home from "@/components/views/HomePage.vue";
import About from "@/components/views/AboutPage.vue";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
