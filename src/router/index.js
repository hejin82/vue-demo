import Vue from "vue";
import VueRouter from "vue-router";

import Store from "../components/store/Store";
import ShoppingCart from "../components/store/ShoppingCart";
import Checkout from "../components/store/Checkout";
import OrderThanks from "../components/store/OrderThanks";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: Checkout },
    { path: "/thanks/:id", component: OrderThanks },
    { path: "*", redirect: "/" }
  ]
});
