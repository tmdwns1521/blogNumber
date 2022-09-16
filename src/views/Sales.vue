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
                  {{ currentData.manager ? currentData.manager : "-" }}
                </b-card-title>
              </b-col>
              <b-col class="text-18 border-end">
                <strong class="">예상 총매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <!-- {{ currentData.salesPrice.predict.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>확정 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <!-- {{ currentData.salesPrice.confirm.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>취소 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <!-- {{ currentData.salesPrice.cancel.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>합계</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <!-- {{ currentData.salesPrice.total.toLocaleString("ko-KR") }} -->
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
                    v-model="newData.manager"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.manager"
                    v-model="currentData.manager"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
                <b-th>상호명</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.businessName"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.businessName"
                    v-model="currentData.businessName"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
                <b-th>대표자</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.owner"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.owner"
                    v-model="currentData.owner"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>URL</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.trfficData.blog"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.trfficData"
                    v-model="currentData.trfficData.blog"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
                <b-th>아이디</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.blogId"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.blogId"
                    v-model="currentData.blogId"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
                <b-th>비밀번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.blogPw"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.blogPw"
                    v-model="currentData.blogPw"
                    :disabled="!editDataAbled"
                  ></b-form-input>
                  <b-form-input v-else disabled></b-form-input>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>사업자등록번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.CompanyNumber"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.CompanyNumber"
                    v-model="currentData.CompanyNumber"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>연락처</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.phone"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.phone"
                    v-model="currentData.phone"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>이메일</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.Email"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.Email"
                    v-model="currentData.Email"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
              </b-tr>
              <b-tr>
                <b-th>주소</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.address"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.address"
                    v-model="currentData.address"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>결제방법</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.cardData.creditCardCompany"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.cardData"
                    v-model="currentData.cardData.creditCardCompany"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>결제금액</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.AmountOfPayment"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.AmountOfPayment"
                    v-model="currentData.AmountOfPayment"
                    :disabled="!editDataAbled"
                  >
                    원 </b-form-input
                  ><b-form-input v-else disabled></b-form-input>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>카드사</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.cardData.creditCardCompany"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.cardData"
                    v-model="currentData.cardData.creditCardCompany"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
                <b-th>카드소유자</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.cardData.cardholder"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.cardData"
                    v-model="currentData.cardData.cardholder"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>카드번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.cardData.creditCardNumber"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.cardData"
                    v-model="currentData.cardData.creditCardNumber"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
              </b-tr>
              <b-tr>
                <b-th>카드유효기간</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.cardData.CardValidityPeriod"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.cardData"
                    v-model="currentData.cardData.CardValidityPeriod"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>카드승인번호</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.ApprovalNumber"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.ApprovalNumber"
                    v-model="currentData.ApprovalNumber"
                    :disabled="!editDataAbled"
                  >
                  </b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
                <b-th>할부개월</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.installmentMonth"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.installmentMonth"
                    v-model="currentData.installmentMonth"
                    :disabled="!editDataAbled"
                  >
                  </b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
              </b-tr>
              <b-tr>
                <b-th>계약기간</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.Term"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.Term"
                    v-model="currentData.Term"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>계약상품</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.contractProduct"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.contractProduct"
                    v-model="currentData.contractProduct"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>

                <b-th>비고</b-th>
                <b-td>
                  <b-form-input
                    v-if="newDataShow == true"
                    v-model="newData.Note"
                  ></b-form-input>
                  <b-form-input
                    v-else-if="currentData.Note"
                    v-model="currentData.Note"
                    :disabled="!editDataAbled"
                  ></b-form-input
                  ><b-form-input v-else disabled></b-form-input
                ></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <template v-if="newDataShow == true">
                <b-btn variant="dark" class="ms-2" @click="newDataDone()"
                  >등록완료</b-btn
                >
                <b-btn class="ms-2" @click="newDataShow = false">취소</b-btn>
              </template>
              <template v-else-if="editDataAbled == true">
                <b-btn
                  variant="dark"
                  class="ms-2"
                  @click="editDataAbled = false"
                  >수정완료</b-btn
                >
                <b-btn class="ms-2" @click="editDataAbled = false">취소</b-btn>
              </template>
              <template v-else>
                <b-btn variant="dark" class="ms-2" @click="newDataStart()"
                  >신규등록</b-btn
                >
                <b-btn class="ms-2" @click="editDataAbled = !editDataAbled"
                  >수정</b-btn
                >
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
            <!-- 딜력 검색 Start Date -->
            <b-input-group>
              <b-form-input
                id="schStartDate"
                v-model="schStartDate"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  v-model="schStartDate"
                  button-only
                  right
                  locale="ko"
                  aria-controls="schStartDate"
                  hide-header
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>
            <!-- 딜력 검색 End Date -->
            <b-input-group>
              <b-form-input
                id="schEndDate"
                v-model="schEndDate"
                type="text"
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  v-model="schEndDate"
                  button-only
                  right
                  locale="ko"
                  aria-controls="schEndDate"
                  hide-header
                ></b-form-datepicker>
              </b-input-group-append>
            </b-input-group>
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
                    style="
                      border-top-left-radius: 0;
                      border-bottom-left-radius: 0;
                    "
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
          selectable
          select-mode="single"
          @row-selected="onRowSelected"
          :sticky-header="true"
          :items="salesItems"
          :fields="fields"
          class="dataTable"
          :filter="filter"
          ref="selectableTable"
        >
          <!-- 계약번호 -->
          <template #cell(ContractNumber)="row">
            {{ dateFormat1(row.item.ContractNumber) }}
          </template>
          <!-- 결제일 -->
          <template #cell(payDate)="row">
            {{ dateFormat2(row.item.ContractNumber) }}
          </template>
          <!-- 시작일 -->
          <template #cell(trfficDataCreated)="row">
            {{ dateFormat2(row.item.trfficData.created_at) }}
          </template>
          <!-- 종료일 -->
          <template #cell(trfficDataExpiration)="row">
            {{ dateFormat2(row.item.trfficData.cexpiration_date) }}
          </template>
          <!-- 실시간트래픽 -->
          <template #cell(trfficDataTodayCount)="row">
            {{ row.item.trfficData.today_remain_count }}
          </template>
          <template #cell(AmountOfPayment)="row">
            {{ numberToString(parseInt(row.item.AmountOfPayment)) }}원
          </template>
          <template #cell(designChk)="row">
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
          <template #cell(trafficChk)="row">
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
export default {
  name: "Sales",
  data() {
    return {
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
          key: "ContractNumber",
          label: "계약번호",
          thClass: "table-secondary",
        },
        {
          key: "manager",
          label: "담당자",
          thClass: "table-secondary",
        },
        {
          key: "businessName",
          label: "상호명",
          stickyColumn: true,
          thClass: "table-secondary",
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
          key: "CompanyNumber",
          label: "사업자등록번호",
          thClass: "table-secondary",
        },
        {
          key: "Email",
          label: "이메일",
          thClass: "table-secondary",
        },
        {
          key: "address",
          label: "주소",
          thClass: "table-secondary",
        },
        {
          key: "trfficData.blog",
          label: "URL",
          thClass: "table-secondary",
        },
        {
          key: "blogId",
          label: "아이디",
          thClass: "table-secondary",
        },
        {
          key: "blogPw",
          label: "비밀번호",
          thClass: "table-secondary",
        },
        {
          key: "contractProduct",
          label: "계약상품",
          thClass: "table-secondary",
        },
        {
          key: "trfficDataTodayCount",
          label: "실시간트래픽",
          thClass: "table-secondary",
        },
        {
          key: "designChk",
          label: "디자인",
          thClass: "table-secondary",
        },
        {
          key: "trafficChk",
          label: "트래픽",
          thClass: "table-secondary",
        },
        {
          key: "trfficDataCreated",
          label: "시작일",
          thClass: "table-secondary",
        },
        {
          key: "AmountOfPayment",
          label: "결제금액",
          thClass: "table-secondary",
        },
        {
          key: "done",
          label: "확인",
          thClass: "table-secondary",
        },
        {
          key: "Term",
          label: "계약기간",
          thClass: "table-secondary",
        },
        {
          key: "trfficDataExpiration",
          label: "종료일",
          thClass: "table-secondary",
        },
        {
          key: "cardData.cardholder",
          label: "카드소유자",
          thClass: "table-secondary",
        },
        {
          key: "cardData.creditCardCompany",
          label: "카드사",
          thClass: "table-secondary",
        },
        {
          key: "cardData.creditCardNumber",
          label: "카드번호",
          thClass: "table-secondary",
        },
        {
          key: "cardData.CardValidityPeriod",
          label: "카드유효기간",
          thClass: "table-secondary",
        },
        {
          key: "ApprovalNumber",
          label: "카드승인번호",
          thClass: "table-secondary",
        },
        {
          key: "installmentMonth",
          label: "할부개월",
          thClass: "table-secondary",
        },
        {
          key: "payDate",
          label: "결제일",
          thClass: "table-secondary",
        },
        {
          key: "Note",
          label: "비고",
          thClass: "table-secondary",
        },
      ],
      salesItems: null,
      filter: "",
      currentData: {
        manager: null,
        businessName: null,
        owner: null,
        trfficData: {
          // blog: null,
        },
        blogId: null,
        blogPw: null,
        CompanyNumber: null,
        phone: null,
        Email: null,
        address: null,
        cardData: {
          // creditCardCompany: null,
          // cardholder: null,
          // creditCardNumber: null,
          // CardValidityPeriod: null,
        },
        AmountOfPayment: null,
        ApprovalNumber: null,
        installmentMonth: null,
        Term: null,
        contractProduct: null,
        Note: null,
      },
      newDataShow: false,
      newData: {
        manager: null,
        businessName: null,
        owner: null,
        trfficData: {
          // blog: null,
          // blog_validate: null,
          // cexpiration_date: null,
          // created_at: null,
          // day_total_count: null,
          // start_date: null,
          // today_remain_count: null,
          // updatedAt: null,
          // updated_at: null,
        },
        blogId: null,
        blogPw: null,
        CompanyNumber: null,
        phone: null,
        Email: null,
        address: null,
        cardData: {
          // creditCardCompany: null,
          // cardholder: null,
          // creditCardNumber: null,
          // CardValidityPeriod: null,
        },
        AmountOfPayment: null,
        ApprovalNumber: null,
        installmentMonth: null,
        Term: null,
        contractProduct: null,
        Note: null,
      },
      editDataAbled: false,
      schStartDate: "",
      schEndDate: "",
    };
  },
  methods: {
    // 신규등록 시작
    newDataStart() {
      this.newDataShow = true;
    },
    // 신규등록 완료
    newDataDone() {
      this.newDataShow = false;
      console.log(this.newData);
    },
    onRowSelected(items) {
      this.newDataShow = false;
      items = items[0];
      this.currentData = { ...items };
    },
    async salesData() {
      const data = await this.$axios.get("/api/salesData");
      console.log(data.data);
      this.salesItems = data.data;
    },
  },
  mounted() {
    this.salesData();
  },
  computed: {},
};
</script>

<style></style>
