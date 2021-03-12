import Vue from 'vue'
import VueRouter from 'vue-router'
import publicRoutes from '@/router/public-routes';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    ...publicRoutes,
    {
      path: '/*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "portal" */ '@/views/404/Error404.vue'),
    },
  ],
})

export default router;
