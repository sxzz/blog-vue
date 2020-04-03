import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import api from "./api";

Vue.config.productionTip = false;

new Vue({
  router,
  api,
  render: h => h(App),
}).$mount("#app");
