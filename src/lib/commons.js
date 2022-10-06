export default {
  install(Vue, options) {
    Vue.mixin({
      computed: {},
      data() {
        return {};
      },
      filters: {},
      methods: {
        onCopy: function (e) {
          alert(
            "클립보드에 복사되었습니다.<br/><strong>" + e.text + "</strong>"
          );
        },
        onError: function (e) {
          alert("Failed to copy texts");
        },
        isNegative(value) {
          if (value <= 0) {
            value = "0";
          }
          return value;
        },
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
          if (typeof value === "number") {
            value = value.toLocaleString("ko-KR");
          } else {
            if (isNaN(value) === false) {
              value = parseInt(value);
              value = value.toLocaleString("ko-KR");
            } else {
              value = null;
            }
          }
          return value;
        },
      },
    });
  },
};
