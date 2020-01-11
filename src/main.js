import Vue from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.filter("currency", value =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    value
  )
);

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
