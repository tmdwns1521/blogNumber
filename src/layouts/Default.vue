<template>
  <div>
    <Header :topBanner="true" />
    <router-view />
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
