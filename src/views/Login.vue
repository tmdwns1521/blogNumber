<template>
  <div class="w-30 my-5 m-auto d-flex align-items-center">
    <b-container>
      <h1 class="text-center mb-5">관리자 로그인</h1>
      <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(login)">
          <div>
            <validation-provider
              name="아이디"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group id="name-input-group" class="mb-3">
                <b-form-input
                  id="name-input"
                  name="name-input"
                  v-model="input.id"
                  placeholder="아이디"
                  :state="getValidationState(validationContext)"
                  aria-describedby="name-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="name-input-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <validation-provider
              name="비밀번호"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group id="company-input-group" class="mb-3">
                <b-form-input
                  id="company-input"
                  name="company-input"
                  v-model="input.password"
                  placeholder="비밀번호"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="company-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="company-input-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <b-btn
              type="submit"
              pill
              class="mt-4 w-100 border-0 shadow-sm"
              style="background: #00eadc; font-weight: bold; font-size: 24px"
              >로그인</b-btn
            >
<!--            <b-btn-->
<!--              @click="$router.push('/signup')"-->
<!--              pill-->
<!--              class="mt-4 w-100 border-0 shadow-sm"-->
<!--              style="-->
<!--                border: 1px solid #00eadc !important;-->
<!--                color: #00eadc;-->
<!--                background: #fff;-->
<!--                font-weight: bold;-->
<!--                font-size: 24px;-->
<!--              "-->
<!--              >회원가입</b-btn-->
<!--            >-->
          </div>
        </b-form>
      </validation-observer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        id: null,
        password: null,
      },
    };
  },
  methods: {
    async login() {
      // console.log("로그인");
      const data = await this.$axios.post(
        "http://49.247.32.231:5000/api/login",
        this.input
      );

      // console.log(data);

      if (data.data.token) {
        this.$store.dispatch("setToken", data.data.token);
        this.$store.dispatch("setServiceId", this.input.id);
        // this.$store.dispatch("setRole", data.data.role);
        //    this.$store.dispatch("setName", data.data.name);
        this.$router.push("/");
      } else {
        window.alert(data.data.result);
      }
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>

<style></style>
