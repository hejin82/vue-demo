import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("currency", value =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  )
);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
