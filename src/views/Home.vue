<template>
  <div>
    <main>
      <!-- main 0 -->
      <article class="main-0 d-none d-lg-block">
        <b-container class="h-100">
          <b-row class="align-items-center h-100">
            <b-col class="text-white">
              <p class="fw-600 text-30 mb-5">
                오늘부터 마케팅에서 네이버 블로그 상위노출로 <br />바이럴 홍보와
                판매를 한번에 도와드립니다.
              </p>
              <span class="d-block mb-4"
                >검색하는 잠재고객에게 매장을 알리고 <br />리뷰/후기를 노출해
                가게의 신뢰도를 높여보세요.</span
              >
              <b-btn pill class="mb-5 startBtn" @click="upDown()">무료로 광고 시작하기
                <font-awesome-icon icon="fa-solid fa-chevron-right"
              /></b-btn>
              <span class="d-block">상위노출 효과를 직접 경험하세요!</span>
            </b-col>
            <b-col cols="5">
              <div class="bg-white p-5" :class="{ shake: disabled }" style="border-radius: 20px">
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
                      <b-btn type="submit" class="mt-4 w-100 border-0 m-ConappBtn">무료 상담 신청하기</b-btn>
                    </div>
                  </b-form>
                </validation-observer>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </article>

      <article class="main-0 d-lg-none d-block mobile">
        <div class="bg text-center text-white d-flex align-items-center justify-content-center">
          <div style="padding: 40px 0;">
            <p class="fw-600 mb-3">
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
        <div class="bg-white valibox" :class="{ shake: disabled }" style="padding: 10%;">
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
                <b-btn type="submit" pill class="mt-4 w-100 border-0 shadow-sm m-ConappBtn">무료 상담 신청하기</b-btn>
              </div>
            </b-form>
          </validation-observer>
        </div>
      </article>
      <!-- main 1 -->
      <article class="main-1">
        <b-container class="py-5" fluid style="margin-top: 10px;">
          <p class="text-center fw-600 text-40 d-none d-lg-block" style="margin-bottom: 30px;">
            수년간 국내 대형 브랜드부터 소형 브랜드까지
          </p>
          <p class="text-center fw-600 text-26 mb-4 d-block d-lg-none">
            수년간 국내 대형 브랜드부터 <br />소형 브랜드까지
          </p>
          <span class="d-block text-center text-20 d-none d-lg-block" style="padding-bottom: 35px;"
            >약 5000개 이상의 소상공인 업체와 프랜차이즈 본사에서 오늘부터 마케팅을
            이용하고 있습니다.</span
          >
          <span class="d-block text-center d-block d-lg-none pb-4 text15"
            >약 5000개 이상의 소상공인 업체와 프랜차이즈 본사에서<br />
            오늘부터 마케팅을 이용하고 있습니다.</span>
          <div class="logo_banner1 logo_banner"></div>
          <div class="logo_banner2 logo_banner"></div>
        </b-container>
      </article>
      <!-- main 2 -->
      <article class="main-2">
        <b-container class="py-5" fluid>
          <p class="text-center fw-600 text-40 mb-4 d-none d-lg-block">
            검색결과 상위에 노출되어 보다 많은 <br />잠재고객에게 가게를
            알려보세요.
          </p>
          <p class="text-center fw-600 text-20 mb-4 d-block d-lg-none">
            검색결과 상위에 노출되어<br />
            보다 많은 잠재고객에게 가게를 알려보세요.
          </p>
          <span class="d-block text-center text-16"
            >상위노출이 어려운 키워드에서도 노출이 가능한지 <br />오늘부터 마케팅
            인플루언서들의 검증된 실력을 직접 확인해보세요.</span
          >
          <div class="text-center btns" style="margin-top: 60px; margin-bottom: 90px;">
            <b-btn
              style="padding: 8px 2%"
              pill
              class="m-2"
              @click="activeBtn = 'btn1'" 
              :class="{ active: activeBtn === 'btn1' }"
              >맛집
            </b-btn>
            <b-btn
              style="padding: 8px 2%"
              pill
              class="m-2"
              @click="activeBtn = 'btn2'"
              :class="{ active: activeBtn === 'btn2' }"
              >카페
            </b-btn>
            <b-btn style="padding: 8px 2%"
              pill
              class="m-2"
              @click="activeBtn = 'btn3'"
              :class="{ active: activeBtn === 'btn3' }"
              >음식명
            </b-btn>
            <b-btn
              style="padding: 8px 2%"
              pill
              class="m-2"
              @click="activeBtn = 'btn4'"
              :class="{ active: activeBtn === 'btn4' }"
              >미용실/네일샵
            </b-btn>
            <b-btn
              style="padding: 8px 2%"
              pill
              class="m-2"
              @click="activeBtn = 'btn5'"
              :class="{ active: activeBtn === 'btn5' }"
              >제품
            </b-btn>
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
          <div class="contents d-block d-lg-none" style="overflow-x:scroll;">
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

      <article class="Main3">
        <div class="Main3Div">
          <p>광고, 홍보를 어떻게 해야할지 모르는 대표님들, 직원관리도 힘드신데 대표님은 일만 하세요. <mark>진짜 광고</mark>는 <mark>오늘부터 마케팅</mark>이 <mark>책임</mark>지겠습니다.</p>
          <p>브랜드의 성장 가능성을 열고, 매출 상승의 가속화를직접 경험하세요.</p>
          <figure>
            <img src="../assets/images/main_3_1.png" alt="바이럴 마케팅 이미지">
            <figcaption>
              <p>1. 바이럴 마케팅</p>
              <span class="main3_bar"></span>
              <p>바이러스(Virus)처럼 퍼진다는 의미를 가진 바이럴(Viral)은 끊임없이 전달되는 마케팅 기법입니다. 블로그나 카페, SNS등 매체를 통해 널리 확산하는 방식의
                  소문을 통해 홍보되는 방식으로 자연스럽게 홍보할 수 있는 방법이 있는 마케팅입니다. 적은 비용으로 효과적인 매출 상승을 도와주고 매체를 통해 빠르게 전달되는 효과를 추구합니다. 
                  업종과 서비스에 맞는 매체 활용으로 다양한 소식들이나 홍보 내용을 연령, 성별 상관없이 최적화된 타겟을 대상으로 노출할 수 있습니다.</p>
            </figcaption>
          </figure>

          <figure>
            <img src="../assets/images/main_3_2.png" alt="블로그 마케팅 이미지">
            <figcaption>
              <p>2. 블로그 마케팅</p>
              <span class="main3_bar"></span>
              <p>바이럴 마케팅의 한 종류입니다. 블로그는 네이버 블로그 / 다음 블로그 / 카카오 티스토리 등 다양한 블로그 매체가 존재합니다. 목적에 따라서 그 활용도가 달라지고 마케팅 목적의 블로그는 주로 네이버 블로그가 활용됩니다.
                1~3분 정도의 가시적이고 빠른 정보전달을 목적으로 후기나 확실한 타켓의 홍보효과를 기대할 수 있습니다. 브랜딩이나 마케팅의 다양한 목적으로 이용가능합니다.</p>
            </figcaption>
          </figure>

          <figure>
              <img src="../assets/images/main_3_3.png" alt="SNS 마케팅 이미지">
            <figcaption>
              <p>3. SNS 마케팅</p>
              <span class="main3_bar"></span>
              <p>흔히들 알고계시는 스폰서광고나 플루언서 마케팅등 다양한 기법의 마케팅 활용이 가능합니다. 업종이나 서비스에 맞춰서 효과를 극대화 할 수 있는 마케팅이고
                  사진이라는 가시적이고 담백한 정보와 짧은 영상으로 확실한 임팩트를 전달하는게 가능합니다. 주로 후기성의 목적으로의 마케팅 활용에 효과적입니다.</p>
            </figcaption>
            
          </figure>

          <figure>
              <img src="../assets/images/main_3_4.png" alt="플레이스 이미지">
            <figcaption class="main3_scroll4R main3_right">
              <p>4. 플레이스</p>
              <span class="main3_bar"></span>
              <p>네이버의 지도 컨텐츠로서 오프라인 매장의 정보를 노출합니다. 다양한 업체정보를 한눈에 전달이 가능하고 여러 업체를 비교하고 빠르게 정보를 얻을 수 있습니다. 
                근처에 있는 곳부터 멀리있는 곳까지쉽게 서치로 원하는 정보를 얻을 수 있습니다.</p>
            </figcaption>
          </figure>
        </div>
      </article>

      <!-- main 4 -->
      <article class="main-4">
        <div>
          <b-container class="py-5">
            <p class="text-center text-white fw-600 text-40 mb-4">
              마케팅이 더 쉬워지는 오늘부터 마케팅 솔루션
            </p>
            <div class="text-center btns main4-btn">
              <b-btn
                style="padding: 10px 2%"
                pill
                class="mx-2"
                @click="activeBtn2 = 'btn1'"
                :class="{ active: activeBtn2 === 'btn1' }"
                >마케팅 대시보드</b-btn
              >
              <b-btn
                style="padding: 10px 2%"
                pill
                class="mx-2"
                @click="activeBtn2 = 'btn2'"
                :class="{ active: activeBtn2 === 'btn2' }"
                >광고소재 센터</b-btn
              >
              <b-btn
                style="padding: 10px 2%"
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
                    <h1 class="contents-text text-30 mb-4">
                      진행한 모든 광고의 <br />
                      성과 데이터를 한 곳에서!
                    </h1>
                    <p class="m-0 contents-text text-20">
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
                    <h1 class="contents-text text-30 mb-4">
                      소재 제작 요청과 <br />
                      데이터 분석을 더 간편하게
                    </h1>
                    <p class="m-0 contents-text text-20">
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
                    <h1 class="contents-text text-30 mb-4">
                      다양한 데이터 인사이트를 <br />
                      쉽고 친절하게
                    </h1>
                    <p class="m-0 contents-text text-20">
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
        </div>
      </article>
      <!-- main 5 -->
      <article class="main-5">
        <b-container class="py-5 d-none d-lg-block">
          <p class="text-center text-white text-40" style="margin-bottom: 30px;">
            퍼포먼스 마케팅이 궁금하신가요? <br />언제든지 문의 주세요.
          </p>
          <ul>
            <li>
              <div class="q" style="font-size: 25px;"><span>Q.</span> 비용은 얼마정도 드나요?</div>
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
              <div class="q" style="font-size: 25px;">
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
              <div class="q" style="font-size: 25px;">
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
    <div class="bottomText">
      <div>
        <p>어제까지 낸 수수료<br><mark>오늘부터</mark> 안 내두 돼</p>
        <div>
          <button onclick="window.scrollTo(0,0);">무료 상담신청 ↑</button>
        </div>
      </div>
      
    </div>
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
