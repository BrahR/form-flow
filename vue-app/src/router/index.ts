import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    redirect: "/login",
    name: "Auth",
    meta: { requiresAuth: true },
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
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
        component: () => import("@/views/dashboard/Dashboard.vue"),
      },
    ],
  },
  {
    path: "/w-:workspaceId/survey/:surveyId",
    meta: { requiresAuth: true },
    component: () => import("@/layouts/SurveyLayout.vue"),
    children: [
      {
        path: "",
        alias: "build",
        name: "Survey.Build",
        component: () => import("@/views/survey/Build.vue"),
      },
      {
        path: "design",
        name: "Survey.Design",
        component: () => import("@/views/survey/Design.vue"),
      },
      {
        path: "results",
        name: "Survey.Results",
        component: () => import("@/views/survey/Results.vue"),
      },
      {
        path: "settings",
        name: "Survey.Settings",
        component: () => import("@/views/survey/Settings.vue"),
      },
      {
        path: "share",
        name: "Survey.Share",
        component: () => import("@/views/survey/Share.vue"),
      },
      {
        path: "responses",
        name: "Survey.Responses",
        component: () => import("@/views/survey/Responses.vue"),
      },
    ],
  },
  {
    path: "/view/:surveyId",
    meta: { requiresAuth: true },
    name: "Survey.Viewer",
    component: () => import("@/views/survey/Viewer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
