import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/:type?',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory('todos'),
  routes,
});

export default router;
