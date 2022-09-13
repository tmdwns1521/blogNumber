<template>
  <div>
    <TopBanner :show="topBanner" />
    <header class="shadow-sm py-3 position-relative">
      <b-container>
        <b-navbar-brand href="/">
          <img
            src="@/assets/images/logo.svg"
            alt="오늘의 픽 로고"
            :style="{ height: '50px' }"
          />
        </b-navbar-brand>
      </b-container>
    </header>
  </div>
</template>

<script>
import TopBanner from "@/components/Banner/TopBanner.vue";
export default {
  name: "Header",
  components: { TopBanner },
  props: {
    topBanner: Boolean,
  },
};
</script>

<style></style>
