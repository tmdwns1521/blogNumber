<template>
  <div class="sales-page">
    <b-row class="justify-content-between align-items-center mb-2">
      <b-col>
        <h1 class="text-25">매출관리</h1>
      </b-col>
    </b-row>
    <b-row>
      <!-- 매출정보 -->
      <b-col cols="4">
        <div
          class="text-center h-100 bg-white border"
          style="border-radius: 10px"
        >
          <div class="d-flex align-items-center h-100">
            <div class="w-100 p-4">
              <b-card-title class="fw-900 border-bottom pb-4">
                {{ user.name }}
              </b-card-title>
              <b-row class="mt-4">
                <b-col class="text-18">
                  <strong class="">예상 총매출</strong>
                  <p class="opacity-50 m-0">
                    <span>\</span
                    >{{ user.salesPrice.predict.toLocaleString("ko-KR") }}
                  </p>
                </b-col>
                <b-col class="text-18">
                  <strong>확정 매출</strong>
                  <p class="opacity-50 m-0">
                    <span>\</span
                    >{{ user.salesPrice.confirm.toLocaleString("ko-KR") }}
                  </p>
                </b-col>
              </b-row>
              <b-row class="mt-4">
                <b-col class="text-18">
                  <strong>취소 매출</strong>
                  <p class="opacity-50 m-0">
                    <span>\</span
                    >{{ user.salesPrice.cancel.toLocaleString("ko-KR") }}
                  </p>
                </b-col>
                <b-col class="text-18">
                  <strong>합계</strong>
                  <p class="opacity-50 m-0">
                    <span>\</span
                    >{{ user.salesPrice.total.toLocaleString("ko-KR") }}
                  </p>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </b-col>
      <!-- 회원정보 -->
      <b-col cols="8">
        <table class="user-info-table bg-white">
          <tr>
            <th>담당자</th>
            <td>{{ user.name }}</td>
            <th>아이디/비번</th>
            <td>{{ user.id }} / {{ user.password }}</td>
          </tr>
          <tr>
            <th>상호명</th>
            <td>{{ user.shopName }}</td>
            <th>연락처</th>
            <td>{{ user.phone }}</td>
          </tr>
          <tr>
            <th>대표자</th>
            <td>{{ user.owner }}</td>
            <th>사업자</th>
            <td>{{ user.businessNumber }}</td>
          </tr>
          <tr>
            <th>URL</th>
            <td>{{ user.url }}</td>
            <th>이메일</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>서비스</th>
            <td>{{ user.serviceType }}</td>
            <th>주소</th>
            <td>{{ user.address }}</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>{{ user.payKind }}</td>
            <th>카드</th>
            <td>
              {{ user.cardInfo.name }} / {{ user.cardInfo.cardName }} /
              {{ user.cardInfo.cardNumber }}
            </td>
          </tr>
          <tr>
            <th>결제</th>
            <td>{{ user.payPrice }}</td>
            <th>유효기간</th>
            <td>{{ user.cardInfo.expiryDate }}</td>
          </tr>
          <tr>
            <th>개월수</th>
            <td>{{ user.payMonth }}</td>
            <th>할부개월</th>
            <td>{{ user.cardInfo.installmentMonth }}</td>
          </tr>
        </table>
      </b-col>
    </b-row>
    <b-row class="justify-content-between align-items-center my-3">
      <b-col class="text-end">
        <b-btn>수정</b-btn>
        <b-btn variant="dark" class="ms-2">완료</b-btn>
      </b-col>
    </b-row>
    <div class="bg-white"></div>
  </div>
</template>

<script>
export default {
  name: "Sales",
  data() {
    return {
      user: {
        name: "황준",
        salesPrice: {
          predict: 1078000,
          confirm: 878000,
          cancel: 178000,
          total: 2178000,
        },
        shopName: "김집사",
        owner: "김대준",
        url: "blog.naver.com/modren_vape",
        serviceType: "B 1000",
        payKind: "현대카드",
        payPrice: 297000,
        payMonth: 3,
        id: "djdj7707",
        password: "0mjdj6674626",
        phone: "010-2825-4262",
        businessNumber: "327-09-00500",
        email: "djdj7707@naver.com",
        address: "서울 양천구 신정로 11길 63 푸른마을 3단지",
        cardInfo: {
          name: "김자경",
          cardName: "현대카드",
          cardNumber: " 4033-0200-6647-2904",
          expiryDate: "05/26",
          installmentMonth: 3,
        },
      },
    };
  },
};
</script>

<style></style>
