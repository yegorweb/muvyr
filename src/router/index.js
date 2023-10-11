// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useRouter } from 'vue-router'
import Default from '@/layouts/default/Default.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'Muvyr',
        component: () => import('@/views/Muvyr.vue'),
      },
      {
        path: 'info',
        name: 'Info',
        component: () => import('@/views/Info.vue')
      },
      {
        path: 'excursions',
        name: 'Excursions',
        component: () => import('../views/Excursions.vue'),
      },
      {
        path: 'transport-rent',
        name: 'TransportRent',
        component: () => import('@/views/TransportRent.vue'),
      },
      {
        path: 'property-rent',
        name: 'PropertyRent',
        component: () => import('@/views/PropertyRent.vue'),
      },
      {
        path: 'milk',
        name: 'Milk',
        component: () => import('@/views/Milk.vue'),
      },
      {
        path: 'wedding',
        name: 'Wedding',
        component: () => import('@/views/Wedding.vue'),
      },
      {
        path: 'events',
        name: 'Events',
        component: () => import('@/views/Events.vue'),
      },
      {
        path: 'investors',
        name: 'Investors',
        component: () => import('@/views/Investors.vue'),
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts.vue'),
      },
      {
        path: 'property-page',
        name: 'PropertyPage',
        component: () => import('@/views/PropertyPage.vue')
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/Admin/Index.vue'),
        beforeEnter: () => {
          if (localStorage.getItem('isAuth') == 'false' || !localStorage.getItem('isAuth'))
            useRouter().push('/auth')
        },
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
          },
          {
            path: 'product-form',
            name: 'ProductForm',
            component: () => import('@/views/Admin/ProductForm.vue')
          },
          {
            path: 'product',
            name: 'Product',
            component: () => import('@/views/Admin/Product.vue')
          },
          {
            path: 'excursions',
            name: 'AdminExcursions',
            component: () => import('@/views/Admin/Excursions.vue')
          },
          {
            path: 'transport-rent',
            name: 'AdminTransportRent',
            component: () => import('@/views/Admin/TransportRent.vue')
          },
          {
            path: 'weddings',
            name: 'AdminWeddings',
            component: () => import('@/views/Admin/Weddings.vue')
          },
          {
            path: 'event',
            name: 'event',
            component: () => import('@/views/Admin/Event.vue')
          }
        ]
      },
      {
        path: 'auth',
        name: 'Auth',
        component: () => import('@/views/Auth.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
