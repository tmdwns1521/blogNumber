<template>
  <div class="order-page">
    <b-row class="justify-content-between align-items-center mb-3">
      <b-col>
        <h1 class="text-25 m-0">주문관리</h1>
      </b-col>
    </b-row>
    <div style="max-width: 1500px" class="mb-4">
      <b-row>
        <b-col>
          <b-table
            small
            head-variant="dark"
            bordered
            selectable
            select-mode="multi"
            :sticky-header="true"
            :items="orderItems"
            :fields="orderFields"
            selected-variant="white"
            class="dataTable orderTable"
            ref="orderTable"
            show-empty
            emptyText="데이터 정보가 없습니다."
          >
            <template #cell(selected)="{ rowSelected }">
              <div class="text-center">
                <font-awesome-icon
                  v-if="rowSelected"
                  icon="fa-solid fa-check"
                />
              </div>
            </template>
            <template #cell(ContractNumber)="row">
              {{ dateFormat1(row.item.ContractNumber) }}
            </template>

            <template #cell(designChk)="row">
              <div class="text-center">
                <b-form-checkbox
                  switch
                  v-model="row.item.designChk"
                ></b-form-checkbox>
              </div>
            </template>

            <template #cell(trafficChk)="row">
              <b-form-group class="text-center">
                <b-form-checkbox
                  switch
                  v-model="row.item.trafficChk"
                ></b-form-checkbox>
              </b-form-group>
            </template>

            <template #cell(etcProductChk)="row">
              <b-form-group class="text-center">
                <b-form-checkbox
                  switch
                  v-model="row.item.etcProductChk"
                ></b-form-checkbox>
              </b-form-group>
            </template>
          </b-table>
          <b-row class="justify-content-between align-items-center">
            <b-col class="">
              <b-btn @click="selectAllRows">전체 선택</b-btn>
              <b-btn @click="clearSelected">초기화</b-btn>
            </b-col>
            <b-col class="text-end">
              <b-btn variant="dark">승인</b-btn>
            </b-col>
          </b-row>
        </b-col>
        <b-col>2</b-col>
      </b-row>
    </div>
    <b-tabs content-class="p-4" no-fade>
      <b-tab title="메인" active>
        <div class="justify-content-between align-items-center mb-3 d-flex">
          <h2 class="fw-900 m-0">DATA</h2>
          <b-row class="justify-content-end align-items-center">
            <!-- 딜력 검색 Start Date -->
            <b-col cols="3">
              <b-input-group>
                <b-form-input
                  id="schStartDate"
                  v-model="schStartDate"
                  type="text"
                  placeholder="시작일"
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
            </b-col>
            <!-- 딜력 검색 End Date -->
            <b-col cols="3">
              <b-input-group>
                <b-form-input
                  id="schEndDate"
                  v-model="schEndDate"
                  type="text"
                  placeholder="종료일"
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
            </b-col>
            <!-- 검색어 -->
            <b-col cols="5">
              <b-form-group v-slot="{ ariaDescribedby }">
                <b-input-group>
                  <b-form-input
                    class="mx-2"
                    id="filter-input"
                    v-model="filter"
                    :aria-describedby="ariaDescribedby"
                    type="search"
                    placeholder="검색어"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-btn
                      @click="filter = null"
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
            </b-col>
          </b-row>
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
          class="dataTable salesTable"
          :filter="filter"
          ref="selectableTable"
          show-empty
          emptyFilteredText="찾으시는 검색어와 일치하는 정보가 없습니다."
          emptyText="데이터 정보가 없습니다."
        >
          <template #cell(index)="row">
            {{ row.item.index + 1 }}
          </template>
          <template #cell(url)="row">
            https://blog.naver.com/{{ row.item.blogId }}
          </template>
          <template #cell(email)="row">
            {{ row.item.blogId }}@naver.com
          </template>
          <template #cell(ContractNumber)="row">
            {{ dateFormat1(row.item.ContractNumber) }}
          </template>

          <template #cell(payDate)="row">
            {{ dateFormat2(row.item.ContractNumber) }}
          </template>

          <template #cell(trfficDataCreated)="row">
            {{
              row.item.trfficData
                ? dateFormat2(row.item.trfficData.created_at)
                : empty
            }}
          </template>

          <template #cell(trfficDataExpiration)="row">
            {{
              row.item.trfficData
                ? dateFormat2(row.item.trfficData.cexpiration_date)
                : empty
            }}
          </template>

          <template #cell(trfficDataTodayCount)="row">
            {{
              row.item.trfficData
                ? isNegative(row.item.trfficData.today_remain_count)
                : empty
            }}
          </template>
          <template #cell(AmountOfPayment)="row">
            {{ numberToString(row.item.AmountOfPayment) }}원
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

          <template #cell(doneChk)="row">
            <div class="text-center">
              <font-awesome-icon
                v-if="row.item.doneChk"
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
      orderFields: [
        {
          key: "selected",
          label: "선택",
          thClass: "table-secondary",
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
          key: "owner",
          label: "대표자",
          thClass: "table-secondary",
        },
        {
          key: "contractProduct",
          label: "계약상품",
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
          key: "etcProductChk",
          label: "기타상품",
          thClass: "table-secondary",
        },
      ],
      fields: [
        {
          key: "index",
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
          key: "blogId",
          label: "아이디",
          thClass: "table-secondary",
        },
        {
          key: "blogPW",
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
          key: "doneChk",
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
      orderItems: null,
      filter: "",
      currentData: {},
      newData: {
        AmountOfPayment: null,
        manager: null,
        owner: null,
        blogId: null,
        blogPW: null,
        businessName: null,
        phone: null,
        contractProduct: null,
        address: null,
        CompanyNumber: null,
        Term: null,
        installmentMonth: null,
        ApprovalNumber: null,
        Note: null,
        cardholder: null,
        creditCardCompany: null,
        creditCardNumber: null,
        CardValidityPeriod: null,
        ContractNumber: new Date().setHours(new Date().getHours() + 9),
      },
      addTag: false,
      updateTag: false,
      empty: "-",
      schStartDate: "",
      schEndDate: "",
    };
  },
  methods: {
    selectAllRows() {
      this.$refs.orderTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.orderTable.clearSelected();
    },
    onRowSelected(items) {
      this.addTag = false;
      items = items[0];
      this.currentData = { ...items };
    },
    async getSalesData() {
      const data = await this.$axios.get("/api/salesData");
      console.log(data.data);
      const datas = data.data;
      const dataList = [];
      const orderList = [];
      for (const i of datas) {
        if (i.Approved === false) {
          dataList.push(i);
          orderList.push(i);
        }
      }
      this.salesItems = dataList;
      this.orderItems = orderList;
      this.salesItems.forEach((el, index) => {
        this.$set(el, "index", index);
        console.log(el.Approved);
      });
    },
  },
  mounted() {
    this.getSalesData();
  },
  computed: {},
};
</script>

<style></style>
