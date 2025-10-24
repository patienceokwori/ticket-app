import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import LandingPage from '../pages/LandingPage.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Dashboard from '../pages/Dashboard.vue'
import TicketManagement from '../pages/TicketManagement.vue'


const routes = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {requiresAuth: true }
    },

    {
        path: '/tickets',
        component: TicketManagement,
        meta: { requiresAuth: true}
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('ticketapp_session')
    if (to.meta.requiresAuth && !loggedIn) next('/login')
        else next()

})

export default router