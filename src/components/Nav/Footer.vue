<template>
  <div class="footer">
    <!-- PC -->
    <b-container class="w-50 d-none d-lg-block py-5">
      <h1 class="text-25 fw-900 pb-2">오늘의 픽</h1>
      <div class="d-flex" style="gap: 20px">
        <p>
          <span class="fw-900">대표</span>
          민경재
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
      <span>© 오늘의 픽. All rights reserved.</span>
    </b-container>
    <!-- Mobile -->
    <b-container class="d-lg-none d-block py-3">
      <h1 class="text-20 fw-900 pb-2">오늘의 픽</h1>
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
      <span>© 오늘의 픽. All rights reserved.</span>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
