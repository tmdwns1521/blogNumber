<template>
  <div>
    <TopBanner :show="topBanner" class="topBanner" />
    <header class="shadow-sm position-relative" >
      <b-container>
        <div class="justify-content-between align-items-center d-flex logoCenter">
          <b-navbar-brand href="/">
            <img
              src="@/assets/images/today-logo.png"
              alt="오늘부터 마케팅 로고"
              :style="{ height: '100px'}"
            />
          </b-navbar-brand>
          <b-nav-item-dropdown right v-if="$store.getters.isLogin">
            <template #button-content>
              <b-avatar></b-avatar>
              <span>{{ $store.state.serviceId }}</span>
            </template>
            <b-dropdown-item href="/manage">관리페이지</b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()"
              >로그아웃</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <!-- <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar></b-avatar>
              <span>회원이름</span>
            </template>
            <b-dropdown-item href="/manage">관리페이지</b-dropdown-item>
            <b-dropdown-item href="#">로그아웃</b-dropdown-item>
          </b-nav-item-dropdown> -->
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
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style></style>
