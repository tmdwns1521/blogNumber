import Vue from "vue";
import VueRouter from "vue-router";

// Layouts
import Default from "@/layouts/Default.vue";
import Manage from "@/layouts/Manage.vue";

// Views(Pages)
import Sales from "@/views/Sales.vue";
import Order from "@/views/Order.vue";
import Place from "@/views/Place.vue";
import Number from "@/views/Number.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/",
        name: "Login",
        component: Login,
        meta: { isLogin: true },
      },
      // {
      //   path: "/admin",
      //   name: "Login",
      //   component: Login,
      //   meta: { isLogin: true },
      // },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
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
        meta: { requiresAuth: true },
      },
      {
        path: "order",
        name: "Order",
        component: Order,
        meta: { requiresAuth: true, roleSuper: "A" },
      },
      {
        path: "place",
        name: "Place",
        component: Place,
        meta: { requiresAuth: true, roleSuper: "A" },
      },
      {
        path: "number",
        name: "Number",
        component: Number,
        meta: { requiresAuth: true, roleSuper: "B" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isUser = localStorage.getItem("token");
  const isSuper = store.state.role;
  const roleSuper = to.meta.roleSuper;

  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (!isUser) {
  //     window.alert("관리자만 접근할수있습니다.");
  //     next("/");
  //     return;
  //   }
  //   next();
  // }
  if (to.matched.some((record) => record.meta.isLogin)) {
    if (isUser) {
      // alert('로그인상태입니다');
      next("/manage");
      return;
    }
    next();
  }
  // if (roleSuper) {
  //   if (!isSuper) {
  //     // console.log(roleSuper)
  //     // console.log(isSuper);
  //     alert("접근불가");
  //     next("/manage");
  //     return;
  //   }
  //   next();
  // }
  next();
});

export default router;
