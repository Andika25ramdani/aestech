import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BranchsView from "@/views/BranchsView.vue";
import HomeView from "../views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: BranchsView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/branchs",
    name: "branchs",
    component: BranchsView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
