import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import Survey from "@/views/Survey.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {useUserStore} from "@/store/user.ts";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    meta: {isGuest: true},
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
    meta: {isAuth: true},
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: "/survey",
        name: "Survey",
        component: Survey,
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  from.meta.isAuth = from.meta.isAuth ?? false
  const useUser = useUserStore()
  if (useUser.getToken()) useUser.hydrate().catch(() => console.log("E"))

  if (to.meta.isAuth && !useUser.getToken()) return next({name: "Login"})
  if (to.meta.isGuest && useUser.getToken()) return next({name: "Dashboard"})

  return next();
})

export default router
