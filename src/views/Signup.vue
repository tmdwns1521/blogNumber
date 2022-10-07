<template>
  <div class="w-30 my-5 m-auto d-flex align-items-center">
    <b-container>
      <h1 class="text-center mb-5">관리자 회원가입</h1>
      <validation-observer ref="observer" v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(signup)">
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
              vid="password"
              v-slot="validationContext"
            >
              <b-form-group id="pwd-input-group" class="mb-3">
                <b-form-input
                  id="pwd-input"
                  name="pwd-input"
                  v-model="input.password"
                  placeholder="비밀번호"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="pwd-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="pwd-input-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <validation-provider
              name="비밀번호 확인"
              :rules="{ required: true, confirmed: 'password' }"
              v-slot="validationContext"
            >
              <b-form-group id="pwdChk-input-group" class="mb-3">
                <b-form-input
                  id="pwdChk-input"
                  name="pwdChk-input"
                  v-model="passwordCheck"
                  placeholder="비밀번호 확인"
                  type="password"
                  :state="getValidationState(validationContext)"
                  aria-describedby="pwdChk-input-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="pwdChk-input-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <b-btn
              type="submit"
              pill
              class="mt-4 w-100 border-0 shadow-sm"
              style="background: #00eadc; font-weight: bold; font-size: 24px"
              >회원가입</b-btn
            >
          </div>
        </b-form>
      </validation-observer>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      input: {
        id: null,
        password: null,
      },
      passwordCheck: null,
    };
  },
  methods: {
    async signup() {
      // console.log("회원가입");
      // const data = await this.$axios.post(
      //   "http://49.247.32.231:5000/api/login",
      //   this.input
      // );
      // console.log(data);
      // if (data.data.token) {
      //   this.$store.dispatch("setToken", data.data.token);
      //   this.$store.dispatch("setServiceId", this.input.id);
      //   // this.$store.dispatch("setRole", data.data.role);
      //   //    this.$store.dispatch("setName", data.data.name);
      //   this.$router.push("/manage");
      // } else {
      //   window.alert(data.data.result);
      // }
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>

<style></style>
