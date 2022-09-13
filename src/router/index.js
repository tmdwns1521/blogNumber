import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import Default from "@/layouts/Default.vue";
import Manage from "@/layouts/Manage.vue";

// Views(Pages)
import Home from "@/views/Home.vue";
import Sales from "@/views/Sales.vue";
import Order from "@/views/Order.vue";

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
  {
    path: "/manage",
    component: Manage,
    redirect: "/manage/sales",
    children: [
      {
        path: "sales",
        name: "Sales",
        component: Sales,
      },
      {
        path: "order",
        name: "Order",
        component: Order,
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
