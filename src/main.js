import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "./api";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  api,
  render: h => h(App),
}).$mount("#app");
