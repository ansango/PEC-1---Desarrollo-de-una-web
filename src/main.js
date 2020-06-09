import "babel-polyfill";
import Vue from "vue";
import FontAwesome from "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  FontAwesome,
  render: (h) => h(App),
}).$mount("#app");
