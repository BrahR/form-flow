import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "@/stores/user.ts";

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
    path: "/view/:surveyLink",
    meta: { requiresAuth: true },
    name: "Survey.Viewer",
    component: () => import("@/views/survey/Viewer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _from, next) => {
  const user = useUserStore();
  if (user.token) user.hydrate().catch(() => console.log("E"));

  if (to.meta.requiresAuth && !user.token) return next({ name: "Login" });
  if (!to.meta.requiresAuth && user.token) return next({ name: "Dashboard" });

  return next();
});

export default router;
