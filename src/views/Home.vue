<template>
  <div>
    <main>
      <article>1</article>
      <article>2</article>
      <!-- main 3 -->
      <article class="main-3">
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
                  진짜 광고는 오늘의 픽이 책임지겠습니다.
                </span>
              </b-col>
            </b-row>
          </div>
        </b-container>
      </article>
      <!-- main 4 -->
      <article class="main-4">
        <b-container class="py-5">
          <p class="text-center text-white fw-600 text-30 mb-4">
            마케팅이 더 쉬워지는 오늘의 픽 솔루션
          </p>
          <div class="text-center btns">
            <b-btn
              pill
              @click="activeBtn = 'btn1'"
              :class="{ active: activeBtn === 'btn1' }"
              >마케팅 대시보드</b-btn
            >
            <b-btn
              pill
              class="mx-4"
              @click="activeBtn = 'btn2'"
              :class="{ active: activeBtn === 'btn2' }"
              >광고소재 센터</b-btn
            >
            <b-btn
              pill
              @click="activeBtn = 'btn3'"
              :class="{ active: activeBtn === 'btn3' }"
              >정기리포트</b-btn
            >
          </div>
          <div class="contents">
            <article :class="{ 'd-block': activeBtn === 'btn1' }">
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
            <article :class="{ 'd-block': activeBtn === 'btn2' }">
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
            <article :class="{ 'd-block': activeBtn === 'btn3' }">
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
        <b-container class="py-5">
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
              <b-btn pill>상담 신청하기 ></b-btn>
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
              <b-btn pill>상담 신청하기 ></b-btn>
            </li>
            <li>
              <div class="q">
                <span>Q.</span> 우선 1회만 진행하고 싶어요. 단기 계약도 되나요?
              </div>
              <div class="a">
                <span>A</span> 당연히 가능해요. 상품에 따라 컨설팅을
                도와드리겠습니다.
              </div>
              <b-btn pill>상담 신청하기 ></b-btn>
            </li>
          </ul>
        </b-container>
      </article>
    </main>
    <BottomBanner />
  </div>
</template>

<script>
import BottomBanner from "@/components/Banner/BottomBanner.vue";
export default {
  name: "Home",
  components: { BottomBanner },
  data() {
    return {
      activeBtn: "btn1",
    };
  },
};
</script>

<style></style>
