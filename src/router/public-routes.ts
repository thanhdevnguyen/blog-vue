import { RouteConfig } from 'vue-router';
import RouterViewContainer from '@/components/RouterViewContainer.vue';

const publicRoutes: Array<RouteConfig> = [
  {
    path: '/',
    component: RouterViewContainer,
    children: [
      {
        path: '',
        name: 'Blogs',
        component: () => import(/* webpackChunkName: "public" */ '@/views/blog/Blogs.vue'),
      },
      {
        path: ':id/detail',
        name: 'blogDetail',
        component: () => import(/* webpackChunkName: "public" */ '@/views/blog/BlogDetail.vue'),
      },
    ],
  }
];

export default publicRoutes;
