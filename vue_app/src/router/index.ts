import { useUserStore } from "@/store/user";
import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  Router,
} from "vue-router";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Dashboard from "@/views/Dashboard.vue";
import HelloWorld from "@/components/HelloWorld.vue";
// import SurveyBuild from "@/views/survey/SurveyBuild.vue";
// import SurveyDesign from "@/views/survey/SurveyDesign.vue";
// import SurveyResults from "@/views/survey/SurveyResults.vue";
// import SurveySettings from "@/views/survey/SurveySettings.vue";
// import SurveyShare from "@/views/survey/SurveyShare.vue";
import SurveyLayout from "@/components/layout/SurveyLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    meta: { requiresAuth: false },
    children: [
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Register",
        component: Register,
      },
    ],
  },
  {
    path: "/",
    redirect: "/dashboard",
    name: "Dashboard",
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "/w-:workspaceId/survey/:surveyId",
    meta: { requiresAuth: true },
    component: SurveyLayout,
    children: [
      {
        path: "",
        alias: "build",
        name: "Survey.Build",
        component: () => import("@/views/survey/SurveyBuild.vue"),
      },
      {
        path: "design",
        name: "Survey.Design",
        // component: SurveyDesign
        component: HelloWorld,
      },
      {
        path: "results",
        name: "Survey.Results",
        // component: SurveyResults
        component: HelloWorld,
      },
      {
        path: "settings",
        name: "Survey.Settings",
        // component: SurveySettings
        component: HelloWorld,
      },
      {
        path: "share",
        name: "Survey.Share",
        // component: SurveyShare
        component: HelloWorld,
      },
      {
        path: "preview",
        name: "Survey.Preview",
        // component: HelloWorld
        component: HelloWorld,
      },
      {
        path: "responses",
        name: "Survey.Responses",
        // component: HelloWorld
        component: HelloWorld,
      },
    ],
  },
  {
    path: "/view/:surveySlug",
    meta: { requiresAuth: true },
    name: "Survey.View",
    component: () => import("@/views/SurveyView.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  from.meta.isAuth = from.meta.isAuth ?? false;
  const useUser = useUserStore();
  if (useUser.getToken()) useUser.hydrate().catch(() => console.log("E"));

  if (to.meta.requiresAuth && !useUser.getToken())
    return next({ name: "Login" });
  if (!to.meta.requiresAuth && useUser.getToken())
    return next({ name: "Dashboard" });

  return next();
});

export default router as Router;
