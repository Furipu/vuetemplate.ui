import { createRouterMatcher, RouteRecordRaw } from "vue-router";
// import metricRoutes from "@/router/metric/routes";
import Home from "../views/Home.vue";
import metricRoutes from "@/router/metric/routes";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
   ...metricRoutes,
  {
    path: "*",
    redirect: { name: "metric-overview" }
  },
];
