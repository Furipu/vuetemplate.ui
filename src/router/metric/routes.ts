import { createRouterMatcher, RouteRecordRaw } from "vue-router";

const metricRoutes: RouteRecordRaw[] = [
  {
    path: "/metric-overview",
    name: "metric-overview",
    component: () =>
      import(
        /* webpackChunkName: "metric-overview" */ "@/views/metric/metric-overview.vue"
      ),
  },
];

export default metricRoutes;
