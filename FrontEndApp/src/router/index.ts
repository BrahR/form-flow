import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useDataStore } from "@/store";
import {useUserStore} from "@/store/user.ts";

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
    },
    {
      path: "/test",
      name: "Test",
      component: HelloWorld,
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/dashboard",
    //     name: "NotFound",
    //     meta: { isAuth: true },
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    if (userStore.getToken()) userStore.hydrate().catch(() => console.log("E"))

    if (to.meta.isAuth && !userStore.getToken()) return next({ name: "Login" })
    if (to.meta.isGuest && userStore.getToken()) return next({ name: "Dashboard" })

    return next();
})

export default router
