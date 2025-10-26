import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

import Landing from '@/pages/Landing.vue'
import Login from '@/pages/Login.vue'
import Signup from '@/pages/Signup.vue'
import Dashboard from '@/pages/Dashboard.vue'
import Tickets from '@/pages/TicketManagement.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/tickets', component: Tickets, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let resolved = false
router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  if (!requiresAuth) return next()
  if (resolved) {
    const user = auth.currentUser
    return requiresAuth && !user ? next('/login') : next()
  }
  onAuthStateChanged(auth, (user) => {
    resolved = true
    if (requiresAuth && !user) next('/login')
    else next()
  })
})

export default router
