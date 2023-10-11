// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Muvyr',
        component: () => import('@/views/Muvyr.vue'),
      },
      {
        path: '/excursions',
        name: 'Excursions',
        component: () => import('@/views/Excursions.vue'),
      },
      {
        path: '/excursions',
        name: 'Excursions',
        component: () => import('@/views/Excursions.vue'),
      },
      {
        path: '/transport-rent',
        name: 'TransportRent',
        component: () => import('@/views/TransportRent.vue'),
      },
      {
        path: '/property-rent',
        name: 'PropertyRent',
        component: () => import('@/views/PropertyRent.vue'),
      },
      {
        path: '/milk',
        name: 'Milk',
        component: () => import('@/views/Milk.vue'),
      },
      {
        path: '/wedding',
        name: 'Wedding',
        component: () => import('@/views/Wedding.vue'),
      },
      {
        path: '/events',
        name: 'Events',
        component: () => import('@/views/Events.vue'),
      },
      {
        path: '/investors',
        name: 'Investors',
        component: () => import('@/views/Investors.vue'),
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/Admin/Index.vue'),
        children: [
          {
            path: '',
            name: 'Property',
            component: () => import('@/views/Admin/Property.vue')
          },
          {
            path: 'property-form',
            name: 'PropertyForm',
            component: () => import('@/views/Admin/PropertyForm.vue')
          }
        ]
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
