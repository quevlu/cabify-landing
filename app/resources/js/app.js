import Vue from "vue";
import App from "./app/app.component.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import "./mixins";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
