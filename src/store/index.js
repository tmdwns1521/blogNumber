import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // serviceId: null,
    // name: null,
    role: null,
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token === null ? false : true;
    },
    isSuper(state) {
      return state.role === "A" ? true : false;
    },
  },
  mutations: {
    setToken(state, _token) {
      state.token = _token;
      localStorage.setItem("token", JSON.stringify(_token));
      axios.defaults.headers.common["Authorization"] = _token;
    },
    // setServiceId(state, _serviceId) {
    //   state.serviceId = _serviceId;
    //   localStorage.setItem("serviceId", JSON.stringify(_serviceId));
    // },
    setRole(state, _role) {
      state.role = _role;
      // localStorage.setItem("role", JSON.stringify(_role));
    },
    // setName(state, _name) {
    //   state.name = _name;
    //   localStorage.setItem("name", JSON.stringify(_name));
    // },
    logout() {
      localStorage.clear();
      axios.defaults.headers.common["Authorization"] = undefined;
      location.replace("/");
    },
  },
  actions: {
    setToken: ({ commit }, _token) => {
      commit("setToken", _token);
    },
    // setServiceId: ({ commit }, _serviceId) => {
    //   commit("setServiceId", _serviceId);
    // },
    setRole: ({ commit }, _role) => {
      commit("setRole", _role);
    },
    // setName: ({ commit }, _name) => {
    //   commit("setName", _name);
    // },
    logout: ({ commit }) => {
      commit("logout");
    },
  },
  modules: {},
});
