<template>
  <div>
    <TopBanner :show="topBanner" />
    <header class="shadow-sm py-3 position-relative">
      <b-container>
        <div class="justify-content-between align-items-center d-flex">
          <b-navbar-brand href="/">
            <img
              src="@/assets/images/logo.svg"
              alt="오늘의 픽 로고"
              :style="{ height: '50px' }"
            />
          </b-navbar-brand>
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar></b-avatar>
              <span>회원이름</span>
            </template>
            <b-dropdown-item href="/manage">관리페이지</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
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
