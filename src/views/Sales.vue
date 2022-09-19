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
                <b-card-title class="fw-900" v-if="currentData.manager">
                  {{ currentData.manager }}
                </b-card-title>
                <b-card-title class="opacity-50" v-else> 담당자 </b-card-title>
              </b-col>
              <b-col class="text-18 border-end">
                <strong class="">예상 총매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                  <!-- {{ currentData.salesPrice.predict.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>확정 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                  <!-- {{ currentData.salesPrice.confirm.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>취소 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                  <!-- {{ currentData.salesPrice.cancel.toLocaleString("ko-KR") }} -->
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>합계</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
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
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.manager"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.manager"></b-form-input>
                  </template>
                </b-td>
                <b-th>상호명</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.businessName"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.businessName"></b-form-input>
                  </template>
                </b-td>
                <b-th>대표자</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.owner"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.owner"></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>URL</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      disabled
                      v-model="currentData.blogId"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      disabled
                      v-model="newData.blogId"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>아이디</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.blogId"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.blogId"></b-form-input>
                  </template>
                </b-td>
                <b-th>비밀번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.blogPW"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.blogPW"></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>사업자등록번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.CompanyNumber"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.CompanyNumber"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>연락처</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.phone"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="newData.phone"></b-form-input>
                  </template>
                </b-td>
                <b-th>이메일</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      disabled
                      v-model="currentData.blogId"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      disabled
                      v-model="newData.blogId"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>주소</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.address"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.address"
                    ></b-form-input> </template
                ></b-td>
                <b-th>결제방법</b-th>
                <b-td>
                  <!-- <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.cardData.creditCardCompany"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.cardData.creditCardCompany"
                    ></b-form-input> </template
                > -->
                </b-td>
                <b-th>결제금액</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.AmountOfPayment"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.AmountOfPayment"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>카드사</b-th>
                <b-td>
                  <!-- <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.cardData.creditCardCompany"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.cardData.creditCardCompany"
                    ></b-form-input>
                  </template> -->
                </b-td>
                <b-th>카드소유자</b-th>
                <b-td>
                  <!-- <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.cardData.cardholder"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.cardData.cardholder"
                    ></b-form-input> </template
                > -->
                </b-td>
                <b-th>카드번호</b-th>
                <b-td>
                  <!-- <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.cardData.creditCardNumber"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.cardData.creditCardNumber"
                    ></b-form-input> </template
                > -->
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>카드유효기간</b-th>
                <b-td>
                  <!-- <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.cardData.CardValidityPeriod"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.cardData.CardValidityPeriod"
                    ></b-form-input> </template
                > -->
                </b-td>
                <b-th>카드승인번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.ApprovalNumber"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.ApprovalNumber"
                    ></b-form-input> </template
                ></b-td>
                <b-th>할부개월</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.installmentMonth"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.installmentMonth"
                    ></b-form-input> </template
                ></b-td>
              </b-tr>
              <b-tr>
                <b-th>계약기간</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.Term"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.Term"
                    ></b-form-input> </template
                ></b-td>
                <b-th>계약상품</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.contractProduct"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.contractProduct"
                    ></b-form-input> </template
                ></b-td>
                <b-th>비고</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="currentData.Note"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.Note"
                    ></b-form-input> </template
                ></b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <!-- 신규등록일 때 -->
              <template v-if="addTag == true">
                <b-btn variant="dark" class="ms-2" @click="addData()"
                  >등록완료</b-btn
                >
                <b-btn class="ms-2" @click="addCancel()">취소</b-btn>
              </template>
              <!-- 수정일 때 -->
              <template v-else-if="updateTag == true">
                <b-btn variant="dark" class="ms-2" @click="updateData()"
                  >수정완료</b-btn
                >
                <b-btn class="ms-2" @click="updateCancel()">취소</b-btn>
              </template>
              <!-- 기본 -->
              <template v-else>
                <b-btn variant="dark" class="ms-2" @click="addTag = true"
                  >신규등록</b-btn
                >
                <b-btn
                  class="ms-2"
                  @click="updateTag = true"
                  :disabled="isEmpty(currentData)"
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
          class="dataTable"
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
                : "-"
            }}
          </template>

          <template #cell(trfficDataExpiration)="row">
            {{
              row.item.trfficData
                ? dateFormat2(row.item.trfficData.cexpiration_date)
                : "-"
            }}
          </template>

          <template #cell(trfficDataTodayCount)="row">
            {{
              row.item.trfficData ? row.item.trfficData.today_remain_count : "-"
            }}
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
      filter: "",
      currentData: {},
      newData: {
        ContractNumber: null,
        manager: null,
        businessName: null,
        owner: null,
        // trfficData: {},
        blogId: null,
        blogPw: null,
        CompanyNumber: null,
        phone: null,
        // Email: null,
        address: null,
        // cardData: {},
        AmountOfPayment: null,
        ApprovalNumber: null,
        installmentMonth: null,
        Term: null,
        contractProduct: null,
        Note: null,
      },
      addTag: false,
      updateTag: false,
      empty: "-",
      schStartDate: "",
      schEndDate: "",
    };
  },
  methods: {
    // 신규등록 완료
    async addData() {
      let form = {
        AmountOfPayment: "10000",
        manager: "민경재",
        owner: "김한솔",
        blogId: "celkey",
        blogPW: "tmdwns1521",
        businessName: "롯데리아",
        phone: "010-2524-4865",
        contractProduct: "B 1000",
        address: "서울시 관악구 ",
        CompanyNumber: "회사명",
        Term: "3",
        installmentMonth: "3",
        ApprovalNumber: "3",
        Note: "정상",
        cardholder: "김부각",
        creditCardCompany: "현대카드",
        creditCardNumber: "4022-4498-4848-1848",
        CardValidityPeriod: "07/28",
        ContractNumber: new Date().setHours(new Date().getHours() + 9),
      };

      const data = await this.$axios.post("/api/saleData", form);
      console.log(data);
      // const isAllEmpty = (object) =>
      //   !Object.values(object).every((x) => x !== null && x !== "");

      // if (isAllEmpty(this.newData)) {
      //   window.alert("필수 값들을 모두 입력해주세요.", {
      //     title: "필수 값 미입력",
      //   });
      // } else {
      //   this.addTag = false;
      // }
      window.alert("신규등록 성공");
      this.addTag = false;
      this.getSalesData();
    },
    // 신규등록 취소
    addCancel() {
      this.addTag = false;
    },
    // 수정 완료
    async updateData() {
      window.alert("수정 성공");
      this.updateTag = false;
    },
    // 수정 취소
    updateCancel() {
      this.salesItems.forEach((el) => {
        if (this.currentData._id === el._id) {
          this.currentData = { ...el };
        }
      });
      this.updateTag = false;
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
      for (const i of datas) {
        if (i.Approved === false) {
          dataList.push(i);
        }
      }
      this.salesItems = dataList;
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
