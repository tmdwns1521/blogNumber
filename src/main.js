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
import "./assets/style/header.css";
import "./assets/style/main_3.css";
import "./assets/style/Number.css";
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
// Validation
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate";
import ko from "vee-validate/dist/locale/ko.json";
import * as rules from "vee-validate/dist/rules";

// Install VeeValidate rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize("ko", ko);

// Install VeeValidate components globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

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

// Clipboard
import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

// Month Picker
import { MonthPicker } from "vue-month-picker";
import { MonthPickerInput } from "vue-month-picker";
Vue.use(MonthPicker);
Vue.use(MonthPickerInput);

new Vue({
  router,
  store,
  // methods: {
  //   async mySize() {
  //     const isToken = localStorage.getItem("token");
  //     const tokenData = JSON.parse(isToken);

  //     const data = await this.$axios.post(
  //       "http://49.247.32.231:5000/api/MySize",
  //       { userToken: tokenData }
  //     );
  //     console.log("mySize: ", data.data.Size);
  //     this.$store.dispatch("setRole", data.data.Size);
  //   },
  // },
  // mounted() {
  //   this.mySize();
  // },
  created() {
    const isToken = localStorage.getItem("token");
    if (isToken) {
      const tokenData = JSON.parse(isToken);
      this.$store.dispatch("setToken", tokenData);
    }
    const isServiceId = localStorage.getItem("serviceId");
    if (isServiceId) {
      const serviceIdData = JSON.parse(isServiceId);
      this.$store.dispatch("setServiceId", serviceIdData);
    }
    // const isRole = localStorage.getItem("role");
    // if (isRole) {
    //   const roleData = JSON.parse(isRole);
    //   this.$store.dispatch("setRole", roleData);
    // }
    // const isName = localStorage.getItem("name");
    // if (isName) {
    //   const nameData = JSON.parse(isName);
    //   this.$store.dispatch("setName", nameData);
    // }
  },
  render: (h) => h(App),
}).$mount("#app");
