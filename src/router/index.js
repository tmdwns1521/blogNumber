import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import Default from "@/layouts/Default.vue";

// Views(Pages)
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
