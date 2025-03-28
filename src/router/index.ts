import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import NoContentPage from '@/views/NoContentPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: NoContentPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
