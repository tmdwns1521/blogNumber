<template>
  <div>
    <Header :topBanner="true" />
    <router-view style="min-height: 75vh" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Nav/Header.vue";
import Footer from "@/components/Nav/Footer.vue";

export default {
  name: "Default",
  components: { Header, Footer },
};
</script>

<style></style>
