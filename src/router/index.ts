import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume/ResumeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Resume/ResumeView.vue')
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: () => import( '../views/Hobbies/HobbiesView.vue')
  },
  {
    path: '/photography',
    name: 'photography',
    // route level code-splitting
    // generates a separate chunk (photography.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "photography" */ '../views/Hobbies/PhotographyView.vue')
  },
  {
    path: '/gaming',
    name: 'gaming',
    component: () => import('../views/Hobbies/GamingView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
