import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import AxiosPlugin from "vue-axios-cors";
import commons from "./lib/commons";

// Style
import "normalize.css";
import "@/assets/style/common.scss";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Bootstrap
Vue.use(BootstrapVue);
// FontAwesome
library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(commons);

Vue.config.productionTip = false;

Vue.use(AxiosPlugin);

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "http://49.247.32.231:5000/api";
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     if (error.message == "Network Error") {
//       alert("서버와의 통신에 실패했습니다.");
//     }
//     return Promise.reject(error);
//   }
// );

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
