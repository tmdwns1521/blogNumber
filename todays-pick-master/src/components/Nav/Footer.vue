<template>
  <div class="footer">
    <!-- PC -->
    <b-container class="d-none d-lg-block py-5">
      <b-row class="align-items-center">
        <b-col>
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h1 class="text-25 fw-900 m-0">오늘부터 마케팅</h1>
            <!-- <b-nav-item-dropdown right v-if="$store.getters.isLogin">
          <template #button-content>
            <b-avatar></b-avatar>
            <span>{{ $store.state.serviceId }}</span>
          </template>
          <b-dropdown-item href="/manage">관리페이지</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">로그아웃</b-dropdown-item>
        </b-nav-item-dropdown> -->
            <b-btn
              v-if="$store.getters.isLogin === false"
              @click="login()"
              variant="link"
              class="text-secondary text-decoration-none"
            >
              관리자
            </b-btn>
          </div>
          <div class="d-flex" style="gap: 20px">
            <p>
              <span class="fw-900">대표</span>
              민경재
            </p>
            <p>
              <span class="fw-900">상호</span>
              엔에스엠(NSM)
            </p>
            <p>
              <span class="fw-900">사업자등록번호</span>
              417-16-97188
            </p>
            <p>
              <span class="fw-900">주소</span>
              서울시 영등포구 경인로 775, 1동 215호(에이스하이테크시티)
            </p>
          </div>
          <span>© 오늘부터 마케팅. All rights reserved.</span>
        </b-col>
      </b-row>
    </b-container>
    <!-- Mobile -->
    <b-container class="d-lg-none d-block py-3">
      <h1 class="text-20 fw-900 pb-2">오늘부터 마케팅</h1>
      <p class="m-0">
        <span class="fw-900">대표</span>
        민경재
      </p>
      <p class="m-0">
        <span class="fw-900">사업자등록번호</span>
        417-16-97188
      </p>
      <p>
        <span class="fw-900">주소</span>
        서울시 영등포구 경인로 775, 1동 215호(에이스하이테크시티)
      </p>
      <span>© 오늘부터 마케팅. All rights reserved.</span>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
