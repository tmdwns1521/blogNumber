<template>
  <div>
    <Header :topBanner="false" />
    <b-container class="border-start border-end">
      <b-row style="min-height: 900px">
        <b-col cols="2">
          <Left />
        </b-col>
        <b-col cols="10" style="background: #f3f8f7">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
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
