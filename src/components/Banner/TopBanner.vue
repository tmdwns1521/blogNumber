<template>
  <div class="top-banner banner" v-if="show">
    <b-container class="h-100">
      <b-row class="h-100 m-auto align-items-center">
        <b-col class="text-center text-lg-start" lg="4">
        </b-col>
        <b-col class="bg-img d-none d-lg-block"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  props: {
    show: Boolean,
  },
};
</script>

<style></style>
