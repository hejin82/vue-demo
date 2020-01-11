import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/store/Store";
import ShoppingCart from "../components/store/ShoppingCart";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: ShoppingCart },
    { path: "*", redirect: "/" }
  ]
});
