import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { BasicLayout, RouterLayout } from '@/layouts' // @ is an alias to /src
import { Forbidden, NotFound, InternalServerError } from '@/views/errors'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/Home.vue'),
        meta: { title: 'Index', icon: 'home-outlined' },
      },
      {
        path: '/errors',
        name: 'Errors',
        component: RouterLayout,
        meta: { title: 'Error', icon: 'bug-outlined' },
        children: [
          {
            path: '/errors/403',
            name: '403',
            component: Forbidden,
            meta: { title: '403' },
          },
          {
            path: '/errors/404',
            name: '404',
            component: NotFound,
            meta: { title: '404' },
          },
          {
            path: '/errors/500',
            name: '500',
            component: InternalServerError,
            meta: { title: '500' },
          },
        ],
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: 'About', icon: 'unordered-list-outlined' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
