import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import InfoView from '../views/InfoView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    },
    {
      path: '/info',
      name: 'InfoView',
      component: InfoView
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    },
  ]
})

export default router
