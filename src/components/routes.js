import { createWebHistory, createRouter } from "vue-router";
import HeaderC from "./pages/Header.vue";
const routes = [
  {
    name: "/",
    path: "/",
  },
  {
    name: "home",
    path: "/Home",
    component: HeaderC,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
