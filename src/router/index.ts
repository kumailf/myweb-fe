import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chatgpt',
      name: 'chatgpt',
      component: () => import('../views/ChatgptView.vue')
    },
    {
      path: '/eat',
      name: 'eat',
      component: () => import('../views/EatView.vue')
    },
    {
      path: '/geneimg',
      name: 'geneimg',
      component: () => import('../views/GeneImage.vue')
    },
    {
      path: '/ytbdownload',
      name: 'ytbdownload',
      component: () => import('../views/YtbDownloadView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/draw',
      name: 'draw',
      component: () => import('../views/DrawView.vue')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('../views/Recommend.vue')
    }
  ]
})

export default router
