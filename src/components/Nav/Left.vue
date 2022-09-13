<template>
  <nav class="left-nav">
    <b-navbar-nav>
      <b-nav-item
        to="/manage/sales"
        :class="path.includes('/sales') ? 'active' : ''"
      >
        <span class="text-black">매출관리</span>
      </b-nav-item>
      <b-nav-item
        to="/manage/order"
        :class="path.includes('/order') ? 'active' : ''"
      >
        <span class="text-black">주문관리</span>
      </b-nav-item>
    </b-navbar-nav>
  </nav>
</template>

<script>
export default {
  name: "Left",
  computed: {
    path() {
      return this.$route.path;
    },
  },
};
</script>

<style></style>
