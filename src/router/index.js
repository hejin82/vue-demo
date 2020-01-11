import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/store/Store";
import ShoppingCart from "../components/store/ShoppingCart";
import Checkout from "../components/store/Checkout";
import OrderThanks from "../components/store/OrderThanks";
import Authentication from "../components/store/admin/Authentication";
import Admin from "../components/store/admin/Admin";

import dataStore from "../store";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: Checkout },
    { path: "/thanks/:id", component: OrderThanks },
    { path: "/login", component: Authentication },
    {
      path: "/admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next();
        } else {
          next("/login");
        }
      }
    },
    { path: "*", redirect: "/" }
  ]
});
