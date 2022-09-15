<template>
  <div class="sales-page">
    <b-row class="justify-content-between align-items-center mb-3">
      <b-col>
        <h1 class="text-25 m-0">매출관리</h1>
      </b-col>
    </b-row>
    <div style="max-width: 1500px">
      <!-- 담당자 매출정보 -->
      <b-row class="mb-4">
        <b-col>
          <div
            class="text-center h-100 bg-white border p-4"
            style="border-radius: 10px"
          >
            <b-row class="justify-content-between align-items-center">
              <b-col class="text-18 border-end">
                <b-card-title class="fw-900">
                  {{ currentData.name }}
                </b-card-title>
              </b-col>
              <b-col class="text-18 border-end">
                <strong class="">예상 총매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span
                  >{{ currentData.salesPrice.predict.toLocaleString("ko-KR") }}
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>확정 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span
                  >{{ currentData.salesPrice.confirm.toLocaleString("ko-KR") }}
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>취소 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span
                  >{{ currentData.salesPrice.cancel.toLocaleString("ko-KR") }}
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>합계</strong>
                <p class="opacity-50 m-0">
                  <span>\</span
                  >{{ currentData.salesPrice.total.toLocaleString("ko-KR") }}
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <!-- 확인/수정/등록 데이터정보 -->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>담당자</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.name }}</div>
                </b-td>
                <b-th>상호명</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.shopName }}</div>
                </b-td>
                <b-th>대표자</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.owner }}</div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>URL</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.url }}</div></b-td
                >

                <b-th>아이디</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.userId }}</div></b-td
                >
                <b-th>비밀번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.password }}</div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>사업자등록번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.businessNumber }}</div></b-td
                >
                <b-th>연락처</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.phone }}</div></b-td
                >
                <b-th>이메일</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.email }}</div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>주소</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.address }}</div></b-td
                >
                <b-th>결제방법</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.payKind }}</div></b-td
                >
                <b-th>결제금액</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>
                    {{ currentData.payPrice.toLocaleString("ko-KR") }} 원
                  </div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>카드사</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.cardInfo.cardName }}</div></b-td
                >
                <b-th>카드소유자</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.cardInfo.name }}</div></b-td
                >
                <b-th>카드번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.cardInfo.cardNumber }}</div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>카드유효기간</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.cardInfo.expiryDate }}</div></b-td
                >
                <b-th>카드승인번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>
                    {{ currentData.cardInfo.approvalNumber }}
                  </div></b-td
                >
                <b-th>할부개월</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>
                    {{ currentData.cardInfo.installmentMonth }} 개월
                  </div></b-td
                >
              </b-tr>
              <b-tr>
                <b-th>계약기간</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.payMonth }} 개월</div></b-td
                >
                <b-th>계약상품</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.serviceType }}</div></b-td
                >
                <b-th>비고</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.name"
                  ></b-form-input>
                  <div v-else>{{ currentData.contents }}</div></b-td
                >
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <template v-if="newDataShow == true">
                <b-btn variant="dark" class="ms-2" @click="newDataDone()"
                  >완료</b-btn
                >
                <b-btn class="ms-2" @click="newDataShow = false">취소</b-btn>
              </template>
              <template v-else>
                <b-btn variant="dark" class="ms-2" @click="newDataStart()"
                  >신규등록</b-btn
                >
                <b-btn class="ms-2">수정</b-btn>
              </template>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <b-tabs content-class="p-4" no-fade>
      <b-tab title="메인" active>
        <div class="justify-content-between align-items-center mb-3 d-flex">
          <h2 class="fw-900 m-0">DATA</h2>
          <div>
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
          </div>
        </div>
        <b-table
          head-variant="dark"
          bordered
          responsive
          hover
          :sticky-header="true"
          :items="items"
          :fields="fields"
          class="dataTable"
          :filter="filter"
          :filter-included-fields="filterOn"
        >
          <template #cell(payPrice)="row">
            {{ row.item.payPrice.toLocaleString("ko-KR") }}
          </template>
          <template #cell(design)="row">
            <div class="text-center">
              <font-awesome-icon
                v-if="row.item.design"
                class="fa-xl text-success"
                icon="fa-solid fa-circle-check"
              />
              <font-awesome-icon
                v-else
                style="color: #ced4da"
                class="fa-xl"
                icon="fa-solid fa-circle-xmark"
              />
            </div>
          </template>
          <template #cell(traffic)="row">
            <div class="text-center">
              <font-awesome-icon
                v-if="row.item.traffic"
                class="fa-xl text-success"
                icon="fa-solid fa-circle-check"
              />
              <font-awesome-icon
                v-else
                style="color: #ced4da"
                class="fa-xl"
                icon="fa-solid fa-circle-xmark"
              />
            </div>
          </template>
          <template #cell(done)="row">
            <div class="text-center">
              <font-awesome-icon
                v-if="row.item.done"
                class="fa-xl text-success"
                icon="fa-solid fa-circle-check"
              />
              <font-awesome-icon
                v-else
                style="color: #ced4da"
                class="fa-xl"
                icon="fa-solid fa-circle-xmark"
              />
            </div>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="완료">완료</b-tab>
      <b-tab title="취소">취소</b-tab>
      <b-tab title="기타상품">기타상품</b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Sample from "@/lib/sample.js";
export default {
  name: "Sales",
  data() {
    return {
      currentData: {
        id: 1,
        number: 220728,
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
        payDate: "2022/03/01",
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
          approvalNumber: 123454,
          installmentMonth: 3,
        },
        startDate: "2022/03/01",
        endDate: "2022/06/01",
        design: false,
        traffic: true,
        done: true,
        contents: "비고내용",
      },
      fields: [
        {
          key: "id",
          label: "No",
          // isRowHeader: true,
          // sortable: true,
          variant: "secondary",
          thClass: "",

          // filterByFormatted: true,
        },
        {
          key: "number",
          label: "계약번호",
          thClass: "table-secondary",
        },
        {
          key: "name",
          label: "담당자",
          thClass: "table-secondary",
        },
        {
          key: "shopName",
          label: "상호명",
          stickyColumn: true,
          thClass: "table-secondary",
          tdClass: "table-primary",
        },
        {
          key: "owner",
          label: "대표자",
          thClass: "table-secondary",
        },
        {
          key: "phone",
          label: "연락처",
          thClass: "table-secondary",
        },
        {
          key: "businessNumber",
          label: "사업자등록번호",
          thClass: "table-secondary",
        },
        {
          key: "email",
          label: "이메일",
          thClass: "table-secondary",
        },
        {
          key: "address",
          label: "주소",
          thClass: "table-secondary",
        },
        {
          key: "url",
          label: "URL",
          thClass: "table-secondary",
        },
        {
          key: "userId",
          label: "아이디",
          thClass: "table-secondary",
        },
        {
          key: "password",
          label: "비밀번호",
          thClass: "table-secondary",
        },
        {
          key: "serviceType",
          label: "계약상품",
          thClass: "table-secondary",
        },
        {
          key: "design",
          label: "디자인",
          thClass: "table-secondary",
        },
        {
          key: "traffic",
          label: "트래픽",
          thClass: "table-secondary",
        },
        {
          key: "startDate",
          label: "시작일",
          thClass: "table-secondary",
        },
        {
          key: "payPrice",
          label: "결제금액",
          thClass: "table-secondary",
        },
        {
          key: "done",
          label: "확인",
          thClass: "table-secondary",
        },
        {
          key: "payMonth",
          label: "계약기간",
          thClass: "table-secondary",
        },
        {
          key: "endDate",
          label: "종료일",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.name",
          label: "카드소유자",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.cardName",
          label: "카드사",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.cardNumber",
          label: "카드번호",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.expiryDate",
          label: "카드유효기간",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.approvalNumber",
          label: "카드승인번호",
          thClass: "table-secondary",
        },
        {
          key: "cardInfo.installmentMonth",
          label: "할부개월",
          thClass: "table-secondary",
        },
        {
          key: "payDate",
          label: "결제일",
          thClass: "table-secondary",
        },
        {
          key: "contents",
          label: "비고",
          thClass: "table-secondary",
        },
      ],
      items: Sample.items,
      filter: "",
      filterOn: [],
      newDataShow: false,
      newData: {
        name: null,
      },
    };
  },
  methods: {
    // 신규등록 시작
    newDataStart() {
      this.newDataShow = true;
      this.newData = {};
    },
    // 신규등록 완료
    newDataDone() {
      this.newDataShow = false;
      console.log(this.newData);
    },
  },
};
</script>

<style></style>
