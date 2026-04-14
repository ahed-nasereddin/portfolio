import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/about', component: () => import('../views/About.vue') },
  { path: '/projects', component: () => import('../views/Projects.vue') },
  { path: '/project-details/:id',name:'ProjectDetails', component: () => import('../views/ProjectDetails.vue') },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router