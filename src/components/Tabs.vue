<template>
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
          <a
            :href="'https://m.blog.naver.com/' + row.item.blogId"
            target="_blank"
          >
            https://blog.naver.com/{{ row.item.blogId }}
          </a>
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

        <template #cell(trafficDataCreated)="row">
          {{
            row.item.trafficData
              ? dateFormat2(row.item.trafficData.start_date)
              : empty
          }}
        </template>

        <template #cell(trafficDataExpiration)="row">
          {{
            row.item.trafficData
              ? dateFormat2(row.item.trafficData.cexpiration_date)
              : empty
          }}
        </template>

        <template #cell(trafficDataTodayCount)="row">
          {{
            row.item.trafficData
              ? isNegative(row.item.trafficData.today_remain_count)
              : empty
          }}
        </template>
        <template #cell(AmountOfPayment)="row">
          {{
            row.item.AmountOfPayment
              ? numberToString(row.item.AmountOfPayment)
              : "0"
          }}
        </template>

        <template #cell(Design)="row">
          <div class="text-center">
            <font-awesome-icon
              v-if="row.item.Design"
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

        <template #cell(Traffic)="row">
          <div class="text-center">
            <font-awesome-icon
              v-if="row.item.Traffic"
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

        <template #cell(Approved)="row">
          <div class="text-center">
            <font-awesome-icon
              v-if="row.item.Approved"
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
</template>

<script>
export default {
  name: "Tabs",
  props: ["currentData", "salesItems", "orderItems"],
  data() {
    return {
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
          key: "trafficDataTodayCount",
          label: "실시간트래픽",
          thClass: "table-secondary",
        },
        {
          key: "Design",
          label: "디자인",
          thClass: "table-secondary",
        },
        {
          key: "Traffic",
          label: "트래픽",
          thClass: "table-secondary",
        },
        {
          key: "AmountOfPayment",
          label: "결제금액",
          thClass: "table-secondary",
        },
        {
          key: "Approved",
          label: "확인",
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
          key: "trafficDataCreated",
          label: "시작일",
          thClass: "table-secondary",
        },

        {
          key: "Term",
          label: "계약기간",
          thClass: "table-secondary",
        },
        {
          key: "trafficDataExpiration",
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
      filter: "",
      empty: "-",
      schStartDate: "",
      schEndDate: "",
    };
  },
  methods: {
    onRowSelected(items) {
      this.$emit("onRowSelected", items);
    },
  },
};
</script>

<style></style>
