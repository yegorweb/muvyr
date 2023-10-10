// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
      path: '/',
      name: 'Muvyr',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Muvyr.vue'),
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/excursions',
        name: 'Excursions',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Excursions.vue'),
      },
      {
        path: '/excursions',
        name: 'Excursions',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Excursions.vue'),
      },
      {
        path: '/transport-rent',
        name: 'TransportRent',
        component: () => import(/* webpackChunkName: "home" */ '@/views/TransportRent.vue'),
      },
      {
        path: '/property-rent',
        name: 'PropertyRent',
        component: () => import(/* webpackChunkName: "home" */ '@/views/PropertyRent.vue'),
      },
      {
        path: '/milk',
        name: 'Milk',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Milk.vue'),
      },
      {
        path: '/wedding',
        name: 'Wedding',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Wedding.vue'),
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Events.vue'),
      },
      {
        path: '/investors',
        name: 'Investors',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Investors.vue'),
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Contacts.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
