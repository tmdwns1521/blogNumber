<template>
  <div>
    <main>
      <article>1</article>
      <article>2</article>
      <article>3</article>
      <article>4</article>
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
};
</script>

<style></style>
