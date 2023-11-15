import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import SurveyBuild from "@/views/survey/SurveyBuild.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {useUserStore} from "@/store/user.ts";
import SurveyDesign from "@/views/survey/SurveyDesign.vue";
import SurveyResults from "@/views/survey/SurveyResults.vue";
import SurveySettings from "@/views/survey/SurveySettings.vue";
import SurveyLayout from "@/components/layout/SurveyLayout.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/auth",
        redirect: "/login",
        name: "Auth",
        meta: {requiresAuth: false},
        children: [
            {
                path: "/login",
                name: "Login",
                component: Login
            },
            {
                path: "/register",
                name: "Register",
                component: Register
            },
        ]
    },
    {
        path: "/",
        redirect: "/dashboard",
        name: "Dashboard",
        meta: {requiresAuth: true},
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: Dashboard
            }
        ]
    },
    {
        path: "/survey/:id",
        meta: {requiresAuth: true},
        component: SurveyLayout,
        children: [
            {
                path: "",
                alias: "build",
                name: "Survey.Build",
                component: SurveyBuild
            },
            {
                path: "design",
                name: "Survey.Design",
                component: SurveyDesign
            },
            {
                path: "results",
                name: "Survey.Results",
                component: SurveyResults
            },
            {
                path: "settings",
                name: "Survey.Settings",
                component: SurveySettings
            },
            {
                path: "share",
                name: "Survey.Share",
                component: SurveySettings
            },
            {
                path: "preview",
                name: "Survey.Preview",
                component: HelloWorld
            },
            {
                path: "responses",
                name: "Survey.Responses",
                component: HelloWorld
            },
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

    if (to.meta.requiresAuth && !useUser.getToken()) return next({name: "Login"})
    if (!to.meta.requiresAuth && useUser.getToken()) return next({name: "Dashboard"})

    return next();
})

export default router
