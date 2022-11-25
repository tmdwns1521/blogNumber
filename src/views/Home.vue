<template>
  <div>
    <main>
      <!-- main 0 -->
      <article class="main-0 d-none d-lg-block">
        <b-container class="h-100">
          <b-row class="align-items-center h-100">
            <b-col class="text-white"
              ><p class="fw-600 text-30 mb-5">
                오늘부터 마케팅에서 네이버 블로그 상위노출로 <br />바이럴 홍보와
                판매를 한번에 도와드립니다.
              </p>
              <span class="d-block mb-4"
                >검색하는 잠재고객에게 매장을 알리고 <br />리뷰/후기를 노출해
                가게의 신뢰도를 높여보세요.</span
              >
              <b-btn pill class="mb-5 startBtn" @click="upDown()"
                >무료로 광고 시작하기
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></b-btn>
              <span class="d-block">상위노출 효과를 직접 경험하세요!</span>
            </b-col>
            <b-col cols="5">
              <div
                class="bg-white p-5 shadow"
                :class="{ shake: disabled }"
                style="border-radius: 20px"
              >
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                  <b-form @submit.prevent="handleSubmit(submit)">
                    <div>
                      <validation-provider
                        name="성함"
                        :rules="{ required: true, min: 1 }"
                        v-slot="validationContext"
                      >
                        <b-form-group id="name-input-group" class="mb-3">
                          <b-form-input
                            id="name-input"
                            name="name-input"
                            v-model="input.name"
                            placeholder="성함 *"
                            :state="getValidationState(validationContext)"
                            aria-describedby="name-input-feedback"
                          ></b-form-input>
                          <b-form-invalid-feedback id="name-input-feedback">{{
                            validationContext.errors[0]
                          }}</b-form-invalid-feedback>
                        </b-form-group>
                      </validation-provider>
                      <validation-provider
                        name="업체명"
                        :rules="{ required: true, min: 1 }"
                        v-slot="validationContext"
                      >
                        <b-form-group id="company-input-group" class="mb-3">
                          <b-form-input
                            id="company-input"
                            name="company-input"
                            v-model="input.company"
                            placeholder="업체명 *"
                            :state="getValidationState(validationContext)"
                            aria-describedby="company-input-feedback"
                          ></b-form-input>
                          <b-form-invalid-feedback
                            id="company-input-feedback"
                            >{{
                              validationContext.errors[0]
                            }}</b-form-invalid-feedback
                          >
                        </b-form-group>
                      </validation-provider>
                      <validation-provider
                        name="연락처"
                        :rules="{
                          required: true,
                          integer: true,
                          min: 9,
                          max: 11,
                        }"
                        v-slot="validationContext"
                      >
                        <b-form-group id="tel-input-group" class="mb-3">
                          <b-form-input
                            id="tel-input"
                            name="tel-input"
                            type="tel"
                            v-model="input.phone"
                            placeholder="전화번호 *"
                            maxlength="11"
                            :state="getValidationState(validationContext)"
                            aria-describedby="tel-input-feedback"
                          ></b-form-input>
                          <b-form-invalid-feedback id="tel-input-feedback">{{
                            validationContext.errors[0]
                          }}</b-form-invalid-feedback>
                        </b-form-group>
                      </validation-provider>
                    </div>
                    <div>
                      <validation-provider
                        name="개인정보취급방침 이용동의"
                        :rules="{ required: true }"
                        v-slot="validationContext"
                      >
                        <b-form-checkbox-group
                          :state="getValidationState(validationContext)"
                          v-model="check"
                          id="check-input"
                        >
                          <b-form-checkbox
                            value="개인정보취급방침 이용동의"
                            class="d-flex align-items-center"
                          >
                            <span class="ms-2"
                              >개인정보 수집 이용 및 마케팅 활용 전체 동의
                            </span>
                          </b-form-checkbox>
                          <!-- <b-btn v-b-modal.check variant="link">
                            [자세히보기]
                          </b-btn> -->
                          <b-form-invalid-feedback id="check-input-feedback">{{
                            validationContext.errors[0]
                          }}</b-form-invalid-feedback>
                        </b-form-checkbox-group>
                      </validation-provider>
                      <b-btn
                        type="submit"
                        pill
                        class="mt-4 w-100 border-0 shadow-sm"
                        style="
                          background: #00eadc;
                          font-weight: bold;
                          font-size: 24px;
                        "
                        >무료 상담 신청하기</b-btn
                      >
                    </div>
                  </b-form>
                </validation-observer>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </article>
      <article class="main-0 d-lg-none d-block mobile">
        <div
          class="bg text-center text-white d-flex align-items-center justify-content-center"
        >
          <div>
            <p class="fw-600 text-20 mb-3">
              오늘부터 마케팅에서 네이버 블로그 상위노출로 <br />바이럴 홍보와 판매를
              한번에 도와드립니다.
            </p>
            <span class="d-block text-14 mb-3"
              >검색하는 잠재고객에게 매장을 알리고 <br />리뷰/후기를 노출해
              가게의 신뢰도를 높여보세요.</span
            >
            <b-btn pill class="mb-3 startBtn" @click="upDown()"
              >무료로 광고 시작하기
              <font-awesome-icon icon="fa-solid fa-chevron-right"
            /></b-btn>
            <span class="d-block text-14"
              >상위노출 효과를 직접 경험하세요!</span
            >
          </div>
        </div>
        <div class="bg-white p-5 shadow" :class="{ shake: disabled }" style="">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(submit)">
              <div>
                <validation-provider
                  name="성함"
                  :rules="{ required: true, min: 1 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="name-input-group" class="mb-3">
                    <b-form-input
                      id="name-input"
                      name="name-input"
                      v-model="input.name"
                      placeholder="성함 *"
                      :state="getValidationState(validationContext)"
                      aria-describedby="name-input-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="name-input-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="업체명"
                  :rules="{ required: true, min: 1 }"
                  v-slot="validationContext"
                >
                  <b-form-group id="company-input-group" class="mb-3">
                    <b-form-input
                      id="company-input"
                      name="company-input"
                      v-model="input.company"
                      placeholder="업체명 *"
                      :state="getValidationState(validationContext)"
                      aria-describedby="company-input-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="company-input-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="연락처"
                  :rules="{
                    required: true,
                    integer: true,
                    min: 9,
                    max: 11,
                  }"
                  v-slot="validationContext"
                >
                  <b-form-group id="tel-input-group" class="mb-3">
                    <b-form-input
                      id="tel-input"
                      name="tel-input"
                      type="tel"
                      v-model="input.phone"
                      placeholder="전화번호 *"
                      maxlength="11"
                      :state="getValidationState(validationContext)"
                      aria-describedby="tel-input-feedback"
                    ></b-form-input>
                    <b-form-invalid-feedback id="tel-input-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
              </div>
              <div>
                <validation-provider
                  name="개인정보취급방침 이용동의"
                  :rules="{ required: true }"
                  v-slot="validationContext"
                >
                  <b-form-checkbox-group
                    :state="getValidationState(validationContext)"
                    v-model="check"
                    id="check-input"
                  >
                    <b-form-checkbox
                      value="개인정보취급방침 이용동의"
                      class="d-flex align-items-center"
                    >
                      <span class="ms-2"
                        >개인정보 수집 이용 및 마케팅 활용 전체 동의
                      </span>
                    </b-form-checkbox>
                    <!-- <b-btn v-b-modal.check variant="link">
                            [자세히보기]
                          </b-btn> -->
                    <b-form-invalid-feedback id="check-input-feedback">{{
                      validationContext.errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-checkbox-group>
                </validation-provider>
                <b-btn
                  type="submit"
                  pill
                  class="mt-4 w-100 border-0 shadow-sm"
                  style="
                    background: #00eadc;
                    font-weight: bold;
                    font-size: 24px;
                  "
                  >무료 상담 신청하기</b-btn
                >
              </div>
            </b-form>
          </validation-observer>
        </div>
      </article>
      <!-- main 1 -->
      <article class="main-1">
        <b-container class="py-5" fluid>
          <p class="text-center fw-600 text-30 mb-2 d-none d-lg-block">
            수년간 국내 대형 브랜드부터 소형 브랜드까지
          </p>
          <p class="text-center fw-600 text-26 mb-4 d-block d-lg-none">
            수년간 국내 대형 브랜드부터 <br />소형 브랜드까지
          </p>
          <span class="d-block text-center d-none d-lg-block"
            >약 5000개 이상의 소상공인 업체와 프랜차이즈 본사에서 오늘부터 마케팅을
            이용하고 있습니다.</span
          >
          <span class="d-block text-center d-block d-lg-none pb-4"
            >약 5000개 이상의 소상공인 업체와 프랜차이즈 본사에서<br />
            오늘부터 마케팅을 이용하고 있습니다.</span
          >
          <div class="logo_banner1 logo_banner"></div>
          <div class="logo_banner2 logo_banner"></div>
        </b-container>
      </article>
      <!-- main 2 -->
      <article class="main-2">
        <b-container class="py-5" fluid>
          <p class="text-center fw-600 text-30 mb-4 d-none d-lg-block">
            검색결과 상위에 노출되어 보다 많은 <br />잠재고객에게 가게를
            알려보세요.
          </p>
          <p class="text-center fw-600 text-26 mb-4 d-block d-lg-none">
            검색결과 상위에 노출되어<br />
            보다 많은 잠재고객에게 가게를 알려보세요.
          </p>
          <span class="d-block text-center"
            >상위노출이 어려운 키워드에서도 노출이 가능한지 <br />오늘부터 마케팅
            인플루언서들의 검증된 실력을 직접 확인해보세요.</span
          >
          <div class="text-center btns my-5">
            <b-btn
              pill
              class="m-2"
              @click="activeBtn = 'btn1'"
              :class="{ active: activeBtn === 'btn1' }"
              >맛집</b-btn
            >
            <b-btn
              pill
              class="m-2"
              @click="activeBtn = 'btn2'"
              :class="{ active: activeBtn === 'btn2' }"
              >카페</b-btn
            >
            <b-btn
              pill
              class="m-2"
              @click="activeBtn = 'btn3'"
              :class="{ active: activeBtn === 'btn3' }"
              >음식명</b-btn
            >
            <b-btn
              pill
              class="m-2"
              @click="activeBtn = 'btn4'"
              :class="{ active: activeBtn === 'btn4' }"
              >미용실/네일샵</b-btn
            >
            <b-btn
              pill
              class="m-2"
              @click="activeBtn = 'btn5'"
              :class="{ active: activeBtn === 'btn5' }"
              >제품</b-btn
            >
          </div>
          <div class="contents d-none d-lg-block">
            <article :class="{ 'd-block': activeBtn === 'btn1' }">
              <img
                src="@/assets/images/main_2_famous.png"
                class="w-100"
                alt=""
              />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn2' }">
              <img src="@/assets/images/main_2_cafe.png" class="w-100" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn3' }">
              <img src="@/assets/images/main_2_food.png" class="w-100" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn4' }">
              <img src="@/assets/images/main_2_shop.png" class="w-100" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn5' }">
              <img
                src="@/assets/images/main_2_product.png"
                class="w-100"
                alt=""
              />
            </article>
          </div>
          <div class="contents d-block d-lg-none overflow-scroll">
            <article :class="{ 'd-block': activeBtn === 'btn1' }">
              <img src="@/assets/images/main_2_famous.png" class="" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn2' }">
              <img src="@/assets/images/main_2_cafe.png" class="" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn3' }">
              <img src="@/assets/images/main_2_food.png" class="" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn4' }">
              <img src="@/assets/images/main_2_shop.png" class="" alt="" />
            </article>
            <article :class="{ 'd-block': activeBtn === 'btn5' }">
              <img src="@/assets/images/main_2_product.png" class="" alt="" />
            </article>
          </div>
        </b-container>
      </article>
      <!-- main 3 -->
      <article class="main-3 d-none d-lg-block">
        <b-container class="py-5">
          <div class="m-auto text-center">
            <b-row>
              <b-col cols="4">
                <p>
                  마케팅 경험이 전무하다면 <br />
                  디지털 마케팅 자동화 솔루션 <br />더 쉽게 광고를 셋팅 합니다.
                </p>
                <span
                  >고객님의 눈높이에 맞춘 1:1 설계, <br />꼭 필요한 요소만 알기
                  쉽게 제공합니다.</span
                >
              </b-col>
              <b-col class="bg-secondary bg-img img1"></b-col>
            </b-row>
            <b-row>
              <b-col class="bg-secondary bg-img img2"></b-col>
              <b-col>
                <p>
                  어떤 브랜드/제품/업장이라도 <br />
                  항상 최고의 효율을 낼 수 있는 <br />
                  맞춤 솔루션.
                </p>
                <span>
                  마케팅 전문 담당(AE)가 원팀이 되어 <br />
                  24/7 사업의 매출 성장을 도와드립니다.
                </span>
              </b-col>
              <b-col class="bg-secondary bg-img img3"></b-col>
            </b-row>
            <b-row>
              <b-col class="bg-secondary bg-img img4"></b-col>
              <b-col cols="4">
                <p>
                  브랜드의 성장 가능성을 열어드리고, <br />
                  매출 상승의 가속화를 <br />
                  직접 경험하세요.
                </p>
                <span>
                  직원관리도 힘드신데 대표님은 일만 하세요. <br />
                  진짜 광고는 오늘부터 마케팅이 책임지겠습니다.
                </span>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </article>
      <article class="main-3 d-block d-lg-none mobile">
        <slick :options="main3">
          <img src="https://picsum.photos/1024/480/?image=21" alt="" />
          <img src="https://picsum.photos/1024/480/?image=22" alt="" />
          <img src="https://picsum.photos/1024/480/?image=23" alt="" />
          <img src="https://picsum.photos/1024/480/?image=24" alt="" />
        </slick>
      </article>
      <!-- main 4 -->
      <article class="main-4">
        <b-container class="py-5">
          <p class="text-center text-white fw-600 text-30 mb-4">
            마케팅이 더 쉬워지는 오늘부터 마케팅 솔루션
          </p>
          <div class="text-center btns">
            <b-btn
              pill
              class="mx-2"
              @click="activeBtn2 = 'btn1'"
              :class="{ active: activeBtn2 === 'btn1' }"
              >마케팅 대시보드</b-btn
            >
            <b-btn
              pill
              class="mx-2"
              @click="activeBtn2 = 'btn2'"
              :class="{ active: activeBtn2 === 'btn2' }"
              >광고소재 센터</b-btn
            >
            <b-btn
              pill
              class="mx-2"
              @click="activeBtn2 = 'btn3'"
              :class="{ active: activeBtn2 === 'btn3' }"
              >정기리포트</b-btn
            >
          </div>
          <div class="contents">
            <article :class="{ 'd-block': activeBtn2 === 'btn1' }">
              <b-row class="align-items-center">
                <b-col>
                  <h1 class="text-white text-30 mb-4">
                    진행한 모든 광고의 <br />
                    성과 데이터를 한 곳에서!
                  </h1>
                  <p class="m-0 text-white text-20">
                    실시간 제공되는 광고 집행 데이터 <br />필요할 때 언제나
                    원하는 방식으로 비교해 보세요.
                  </p>
                </b-col>
                <b-col class="bg-img">
                  <img src="@/assets/images/main_4_btn1.svg" alt="" />
                </b-col>
              </b-row>
            </article>
            <article :class="{ 'd-block': activeBtn2 === 'btn2' }">
              <b-row class="align-items-center">
                <b-col>
                  <h1 class="text-white text-30 mb-4">
                    소재 제작 요청과 <br />
                    데이터 분석을 더 간편하게
                  </h1>
                  <p class="m-0 text-white text-20">
                    한눈에 보이는 고효율 소재와 상세 데이터 <br />신규 소재
                    제작도 쉽고 빠르게 요청하세요.
                  </p>
                </b-col>
                <b-col class="bg-img">
                  <img src="@/assets/images/main_4_btn2.svg" alt="" />
                </b-col>
              </b-row>
            </article>
            <article :class="{ 'd-block': activeBtn2 === 'btn3' }">
              <b-row class="align-items-center">
                <b-col>
                  <h1 class="text-white text-30 mb-4">
                    다양한 데이터 인사이트를 <br />
                    쉽고 친절하게
                  </h1>
                  <p class="m-0 text-white text-20">
                    데이터의 제공보다 더 중요한 데이터 해석 <br />담당 AE의
                    코멘트로 매주 확인하세요.
                  </p>
                </b-col>
                <b-col class="bg-img">
                  <img src="@/assets/images/main_4_btn3.svg" alt="" />
                </b-col>
              </b-row>
            </article>
          </div>
        </b-container>
      </article>
      <!-- main 5 -->
      <article class="main-5">
        <b-container class="py-5 d-none d-lg-block">
          <p class="text-center text-white text-30 mb-4">
            퍼포먼스 마케팅이 궁금하신가요? <br />언제든지 문의 주세요.
          </p>
          <ul>
            <li>
              <div class="q"><span>Q.</span> 비용은 얼마정도 드나요?</div>
              <div class="a">
                <span>A</span> 10만 원 대부터 시작하여 각 상품마다 비용이 다르기
                때문에 자세한 비용은 상담을 통해 안내해드리겠습니다.
              </div>
              <b-btn pill @click="goToTop()"
                >상담 신청하기
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></b-btn>
            </li>
            <li>
              <div class="q">
                <span>Q.</span> 자세히 상담받고 싶어요, 방문 상담 가능한가요?
              </div>
              <div class="a">
                <span>A</span> 전국 어디든 방문 상담해드립니다. (도서산간지역,
                강원 제외) 고민은 시간만 늦출 뿐! 지금 바로 무료 상담을
                신청하세요.
              </div>
              <b-btn pill @click="goToTop()"
                >상담 신청하기
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></b-btn>
            </li>
            <li>
              <div class="q">
                <span>Q.</span> 우선 1회만 진행하고 싶어요. 단기 계약도 되나요?
              </div>
              <div class="a">
                <span>A</span> 당연히 가능해요. 상품에 따라 컨설팅을
                도와드리겠습니다.
              </div>
              <b-btn pill @click="goToTop()"
                >상담 신청하기
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></b-btn>
            </li>
          </ul>
        </b-container>
        <b-container class="d-lg-none d-block"> </b-container>
      </article>
    </main>
    <BottomBanner />
    <Check />
  </div>
</template>

<script>
import BottomBanner from "@/components/Banner/BottomBanner.vue";
import Check from "@/components/Modal/Check.vue";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

export default {
  name: "Home",
  components: { BottomBanner, Check, Slick },
  data() {
    return {
      main3: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      },
      activeBtn: "btn1",
      activeBtn2: "btn1",
      input: {
        name: null,
        phone: null,
        company: null,
      },
      check: [],
      disabled: false,
    };
  },
  methods: {
    goToTop() {
      window.scrollTo(0, 0);
    },
    async submit() {
      console.log("신청완료");
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    upDown() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 1000);
    },
  },
  watch: {
    check(n, o) {
      if (o.length == 0) {
        this.$bvModal.show("check");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#check-input {
  #check-input-feedback {
    display: block;
    margin: 0;
  }
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
