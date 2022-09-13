<template>
  <div class="sales-page">
    <b-row class="justify-content-between align-items-center mb-3">
      <b-col>
        <h1 class="text-25 m-0">매출관리</h1>
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
            <th>아이디/비밀번호</th>
            <td>{{ user.userId }} / {{ user.password }}</td>
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
            <th>사업자등록번호</th>
            <td>{{ user.businessNumber }}</td>
          </tr>
          <tr>
            <th>URL</th>
            <td>{{ user.url }}</td>
            <th>이메일</th>
            <td>{{ user.email }}</td>
          </tr>
          <tr>
            <th>계약상품</th>
            <td>{{ user.serviceType }}</td>
            <th>주소</th>
            <td>{{ user.address }}</td>
          </tr>
          <tr>
            <th>결제방법</th>
            <td>{{ user.payKind }}</td>
            <th>카드 정보</th>
            <td>
              {{ user.cardInfo.name }} / {{ user.cardInfo.cardName }} /
              {{ user.cardInfo.cardNumber }}
            </td>
          </tr>
          <tr>
            <th>결제금액</th>
            <td>{{ user.payPrice }}</td>
            <th>카드 유효기간</th>
            <td>{{ user.cardInfo.expiryDate }}</td>
          </tr>
          <tr>
            <th>계약기간</th>
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
    <div class="bg-white border p-4" style="border-radius: 10px">
      <b-row class="justify-content-between align-items-center mb-3">
        <b-col>
          <h2 class="fw-900 m-0">DATA</h2>
        </b-col>
        <!-- <b-col>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-input-group>
              <b-form-input
                class="mx-2"
                id="filter-input"
                v-model="filter"
                :aria-describedby="ariaDescribedby"
                type="search"
                placeholder="검색어를 입력하세요."
              ></b-form-input>
              <b-input-group-append>
                <b-btn
                  @click="filter = ''"
                  :disabled="!filter"
                  variant="outline-dark"
                  >초기화</b-btn
                >
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col> -->
      </b-row>
      <div>
        <b-table
          head-variant="dark"
          bordered
          responsive
          :sticky-header="true"
          :items="items"
          :fields="fields"
        >
          <template #cell(design)="row">
            <b-form-group>
              <b-form-checkbox v-model="row.item.design"></b-form-checkbox>
            </b-form-group>
          </template>
          <template #cell(traffic)="row">
            <b-form-group>
              <b-form-checkbox v-model="row.item.traffic"></b-form-checkbox>
            </b-form-group>
          </template>
          <template #cell(done)="row">
            <b-form-group>
              <b-form-checkbox v-model="row.item.done"></b-form-checkbox>
            </b-form-group>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Sample from "@/lib/sample.js";
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
        userId: "djdj7707",
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
      fields: [
        {
          key: "id",
          label: "No",
          // stickyColumn: true,
          // isRowHeader: true,
          variant: "secondary",
          sortable: false,
          thClass: "text-nowrap ",
          tdClass: "text-nowrap",
          // filterByFormatted: true,
        },
        {
          key: "number",
          label: "계약번호",
          // stickyColumn: true,
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "name",
          label: "담당자",
          // stickyColumn: true,
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "shopName",
          label: "상호명",
          stickyColumn: true,
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "owner",
          label: "대표자",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "phone",
          label: "연락처",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "businessNumber",
          label: "사업자등록번호",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "email",
          label: "이메일",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "address",
          label: "주소",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "url",
          label: "URL",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "userId",
          label: "아이디",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "password",
          label: "비밀번호",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "serviceType",
          label: "계약상품",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "design",
          label: "디자인",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "traffic",
          label: "트래픽",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "startDate",
          label: "시작일",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "payPrice",
          label: "결제금액",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "done",
          label: "확인",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "payMonth",
          label: "계약기간",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "endDate",
          label: "종료일",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "cardInfo.name",
          label: "카드소유자",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "cardInfo.cardName",
          label: "카드사",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
        {
          key: "cardInfo.cardNumber",
          label: "카드번호",
          thClass: "text-nowrap table-secondary",
          tdClass: "text-nowrap",
        },
      ],
      items: Sample.items,
    };
  },
  methods: {},
};
</script>

<style></style>
