<template>
  <div>
    <Header :topBanner="false" />
    <div class="m-auto">
      <b-row class="m-0">
        <b-col cols="2">
          <Left />
        </b-col>
        <b-col
          cols="10"
          style="background: #f3f8f7; min-height: 75vh"
          class="p-4"
        >
          <router-view />
        </b-col>
      </b-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Left from "@/components/Nav/Left.vue";
import Footer from "@/components/Nav/Footer.vue";
import Header from "../components/Nav/Header.vue";

export default {
  name: "Management",
  components: { Left, Header, Footer },
};
</script>

<style></style>
