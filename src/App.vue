<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.setAlert();
  },
  methods: {
    setAlert() {
      window.alert = async (msg = "", options) => {
        const opt = {
          okTitle: "확인",
          okVariant: "danger w-100 h-100 m-0 p-3 border-top border-1",
          headerClass: `px-4 pt-4 pb-0 border-0 text-lg-16 text-uppercase fw-700 text-center position-relative`,
          headerCloseContent: " <i class='icon icon-cancel text-18'></i>",
          headerCloseVariant: "text text-gray position-absolute modal-close",
          hideHeaderClose: false,
          titleClass: "mx-auto text-center text-16 text-lg-17",
          headerTextVariant: "danger text-lg-16",
          contentClass: "confirm border-0 fw-400",
          footerClass:
            "p-1 border-0 font-weight-bold text-center d-flex justify-content-center btn-group text-lg-14",
          centered: true,
          noCloseOnBackdrop: true,
          noStacking: true,
          id: "ALERT",
          size: "sm",
          // autoFocusButton: "ok",
          ...options,
        };
        const msgVNode = this.$createElement("div", {
          class: "mt-2",
          domProps: {
            innerHTML: `

            <section class="text-center text-17 text-lg-15">${msg}</section>
          `,
          },
        });
        return await this.$bvModal.msgBoxOk([msgVNode], opt);
      };
    },
  },
};
</script>
<style></style>
