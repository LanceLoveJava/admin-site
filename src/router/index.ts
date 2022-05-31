import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import('@/views/layout/index.vue'),
    redirect: '/home',
    meta: {
      auth: true,
    },
    children: [
      {
        path: "home",
        component: () => import('@/views/home.vue'),
        name: "Home",
        meta: {
          title: '首页',
          auth: true,
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登入',
      auth: false,
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
