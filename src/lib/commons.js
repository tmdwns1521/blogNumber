export default {
  install(Vue, options) {
    Vue.mixin({
      computed: {},
      data() {
        return {};
      },
      filters: {},
      methods: {
        isEmpty(param) {
          return Object.keys(param).length === 0;
        },
        dateFormat1(value) {
          value = value.substring(0, 10).replaceAll("-", "");
          return value;
        },
        dateFormat2(value) {
          value = value.substring(0, 10).replaceAll("-", "/");
          return value;
        },
        numberToString(value) {
          value = value.toLocaleString("ko-KR");
          return value;
        },
      },
    });
  },
};
