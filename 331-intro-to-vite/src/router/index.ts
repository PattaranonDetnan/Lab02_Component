import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetailView from '@/views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // example: when you are on http://localhost:5173/ this site it will save in your browser's history
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route)=>({page: parseInt(route.query.page?.toString() ||
'1')})
    },
    {
      path:'/event/:id',
      name:'event-detail-view',
      component: EventDetailView,
      props:true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
   
  ]
})

export default router
