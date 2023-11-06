import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import { useDataStore } from "@/store";

const routes: RouteRecordRaw[] = [
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        meta: { isGuest: true },
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            },
        ]
    },
    {
        path: "/",
        redirect: "/dashboard",
        name: "Dashboard",
        meta: { isAuth: true },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useDataStore();

    if (to.meta.isAuth && !store.getToken()) return next({ name: "Login" })
    if (to.meta.isGuest && store.getToken()) return next({ name: "Dashboard" })

    return next();
})

export default router
