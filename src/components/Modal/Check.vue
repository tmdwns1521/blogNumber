<template>
  <!-- 개인정보취급방침이용동의 -->
  <b-modal
    id="check"
    scrollable
    centered
    title="개인정보취급방침이용동의"
    title-class="fw-900"
    hide-footer
  >
    <p class="" v-for="i in 10" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
      ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
      ac, vestibulum at eros.
    </p>
  </b-modal>
</template>

<script>
export default {
  name: "check",
};
</script>

<style lang="scss"></style>
