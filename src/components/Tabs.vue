<template>
  <b-tabs content-class="p-4" no-fade>
    <b-tab title="현황" active>
      <div class="justify-content-between align-items-center mb-3 d-flex">
        <h2 class="fw-900 m-0">충전 현황</h2>
        <b-row class="justify-content-end align-items-center">
          <!-- 달력 검색 -->
          <b-col>
            <!-- {{ date }} -->
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group class="position-relative">
                <b-form-input
                  :aria-describedby="ariaDescribedby"
                  v-model="selectedDate"
                  class="form-control"
                  type="text"
                  placeholder="월별 검색"
                  readonly
                  @click="showMonthPicker()"
                ></b-form-input>
                <month-picker
                  class="position-absolute"
                  style="z-index: 10; top: 3rem"
                  lang="ko"
                  editable-year
                  date-format="%Y년 %n"
                  no-default
                  @change="showDate"
                  v-show="monthPickerVisible"
                ></month-picker>
                <b-input-group-append>
                  <b-btn
                    @click="[clearDate(), getCurrentMonthsalesData()]"
                    variant="outline-dark"
                    style="border-radius: 0"
                    >초기화</b-btn
                  >
                </b-input-group-append>
                <b-btn
                  @click="[clearDate(), getSalesData()]"
                  variant="outline-dark"
                  >전체데이터 보기</b-btn
                >
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- 검색어 -->
          <b-col>
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group>
                <b-form-input
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
        <template #head()="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template>
        <template #cell()="data">
          <span v-clipboard:copy="data.value" v-clipboard:success="onCopy">
            {{ data.value ? data.value : empty }}
          </span>
        </template>

        <!-- No -->
        <template #cell(index)="row">
          {{ row.item.index + 1 }}
        </template>
        <!-- 계약번호 -->
        <template #cell(ContractNumber)="row">
          <span
            v-clipboard:copy="dateFormat1(row.item.ContractNumber)"
            v-clipboard:success="onCopy"
          >
            {{ dateFormat1(row.item.ContractNumber) }}
          </span>
        </template>
        <!-- 실시간트래픽 -->
        <template #cell(trafficDataTodayCount)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? isNegative(row.item.trafficData.today_remain_count)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? isNegative(row.item.trafficData.today_remain_count)
                : empty
            }}
          </span>
        </template>
        <!-- 디자인 -->
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
        <!-- 트래픽 -->
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
        <!-- 확인 -->
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
        <!-- 결제금액 -->
        <template #cell(AmountOfPayment)="row">
          <span
            v-clipboard:copy="
              row.item.AmountOfPayment
                ? numberToString(row.item.AmountOfPayment)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.AmountOfPayment
                ? numberToString(row.item.AmountOfPayment)
                : empty
            }}
          </span>
        </template>
        <!-- 이메일 -->
        <template #cell(email)="row">
          <span
            :class="{ ellipsis: isEllipsis }"
            v-clipboard:copy="row.item.blogId + '@naver.com'"
            v-clipboard:success="onCopy"
          >
            {{ row.item.blogId ? row.item.blogId + "@naver.com" : empty }}
          </span>
        </template>
        <!-- 주소 -->
        <!-- <template #head(address)="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template> -->
        <template #cell(address)="row">
          <div
            :class="{ ellipsis: isEllipsis }"
            v-clipboard:copy="row.item.address"
            v-clipboard:success="onCopy"
          >
            {{ row.item.address ? row.item.address : empty }}
          </div>
        </template>
        <!-- URL -->
        <!-- <template #head(url)="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template> -->
        <template #cell(url)="row">
          <a
            v-if="row.item.blogId"
            :class="{ ellipsis: isEllipsis }"
            :href="'https://m.blog.naver.com/' + row.item.blogId"
            target="_blank"
            v-clipboard:copy="
              row.item.blogId ? 'https://blog.naver.com/' + row.item.blogId : ''
            "
            v-clipboard:success="onCopy"
          >
            {{ "https://blog.naver.com/" + row.item.blogId }}
          </a>
          <span v-else>{{ empty }}</span>
        </template>
        <!-- 결제일 -->
        <template #cell(payDate)="row">
          <span
            v-clipboard:copy="dateFormat2(row.item.ContractNumber)"
            v-clipboard:success="onCopy"
          >
            {{ dateFormat2(row.item.ContractNumber) }}
          </span>
        </template>
        <!-- 시작일 -->
        <template #cell(trafficDataCreated)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.start_date)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.start_date)
                : empty
            }}
          </span>
        </template>
        <!-- 종료일 -->
        <template #cell(trafficDataExpiration)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.cexpiration_date)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.cexpiration_date)
                : empty
            }}
          </span>
        </template>
      </b-table>
    </b-tab>
    <b-tab title="쿠폰" active>
      <div class="justify-content-between align-items-center mb-3 d-flex">
        <h2 class="fw-900 m-0">쿠폰 현황</h2>
        <b-row class="justify-content-end align-items-center">
          <!-- 달력 검색 -->
          <b-col>
            <!-- {{ date }} -->
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group class="position-relative">
                <b-form-input
                  :aria-describedby="ariaDescribedby"
                  v-model="selectedDate"
                  class="form-control"
                  type="text"
                  placeholder="월별 검색"
                  readonly
                  @click="showMonthPicker()"
                ></b-form-input>
                <month-picker
                  class="position-absolute"
                  style="z-index: 10; top: 3rem"
                  lang="ko"
                  editable-year
                  date-format="%Y년 %n"
                  no-default
                  @change="showDate"
                  v-show="monthPickerVisible"
                ></month-picker>
                <b-input-group-append>
                  <b-btn
                    @click="[clearDate(), getCurrentMonthsalesData()]"
                    variant="outline-dark"
                    style="border-radius: 0"
                    >초기화</b-btn
                  >
                </b-input-group-append>
                <b-btn
                  @click="[clearDate(), getSalesData()]"
                  variant="outline-dark"
                  >전체데이터 보기</b-btn
                >
              </b-input-group>
            </b-form-group>
          </b-col>
          <!-- 검색어 -->
          <b-col>
            <b-form-group v-slot="{ ariaDescribedby }">
              <b-input-group>
                <b-form-input
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
        :items="couponItems"
        :fields="couponfields"
        class="dataTable salesTable"
        :filter="filter"
        ref="selectableTable"
        show-empty
        emptyFilteredText="찾으시는 검색어와 일치하는 정보가 없습니다."
        emptyText="데이터 정보가 없습니다."
      >
        <template #head()="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template>
        <template #cell()="data">
          <span v-clipboard:copy="data.value" v-clipboard:success="onCopy">
            {{ data.value ? data.value : empty }}
          </span>
        </template>

        <!-- No -->
        <template #cell(index)="row">
          {{ row.item.index + 1 }}
        </template>
        <!-- 계약번호 -->
        <template #cell(ContractNumber)="row">
          <span
            v-clipboard:copy="dateFormat1(row.item.ContractNumber)"
            v-clipboard:success="onCopy"
          >
            {{ dateFormat1(row.item.ContractNumber) }}
          </span>
        </template>
        <!-- 실시간트래픽 -->
        <template #cell(trafficDataTodayCount)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? isNegative(row.item.trafficData.today_remain_count)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? isNegative(row.item.trafficData.today_remain_count)
                : empty
            }}
          </span>
        </template>
        <!-- 디자인 -->
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
        <!-- 트래픽 -->
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
        <!-- 확인 -->
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
        <!-- 결제금액 -->
        <template #cell(AmountOfPayment)="row">
          <span
            v-clipboard:copy="
              row.item.AmountOfPayment
                ? numberToString(row.item.AmountOfPayment)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.AmountOfPayment
                ? numberToString(row.item.AmountOfPayment)
                : empty
            }}
          </span>
        </template>
        <!-- 이메일 -->
        <template #cell(email)="row">
          <span
            :class="{ ellipsis: isEllipsis }"
            v-clipboard:copy="row.item.blogId + '@naver.com'"
            v-clipboard:success="onCopy"
          >
            {{ row.item.blogId ? row.item.blogId + "@naver.com" : empty }}
          </span>
        </template>
        <!-- 주소 -->
        <!-- <template #head(address)="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template> -->
        <template #cell(address)="row">
          <div
            :class="{ ellipsis: isEllipsis }"
            v-clipboard:copy="row.item.address"
            v-clipboard:success="onCopy"
          >
            {{ row.item.address ? row.item.address : empty }}
          </div>
        </template>
        <!-- URL -->
        <!-- <template #head(url)="data">
          <div @click="isEllipsis = !isEllipsis" class="cursor-pointer">
            {{ data.label }}
          </div>
        </template> -->
        <template #cell(url)="row">
          <a
            v-if="row.item.blogId"
            :class="{ ellipsis: isEllipsis }"
            :href="'https://m.blog.naver.com/' + row.item.blogId"
            target="_blank"
            v-clipboard:copy="
              row.item.blogId ? 'https://blog.naver.com/' + row.item.blogId : ''
            "
            v-clipboard:success="onCopy"
          >
            {{ "https://blog.naver.com/" + row.item.blogId }}
          </a>
          <span v-else>{{ empty }}</span>
        </template>
        <!-- 결제일 -->
        <template #cell(payDate)="row">
          <span
            v-clipboard:copy="dateFormat2(row.item.ContractNumber)"
            v-clipboard:success="onCopy"
          >
            {{ dateFormat2(row.item.ContractNumber) }}
          </span>
        </template>
        <!-- 시작일 -->
        <template #cell(trafficDataCreated)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.start_date)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.start_date)
                : empty
            }}
          </span>
        </template>
        <!-- 종료일 -->
        <template #cell(trafficDataExpiration)="row">
          <span
            v-clipboard:copy="
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.cexpiration_date)
                : ''
            "
            v-clipboard:success="onCopy"
          >
            {{
              row.item.trafficData
                ? dateFormat2(row.item.trafficData.cexpiration_date)
                : empty
            }}
          </span>
        </template>
      </b-table>
    </b-tab>
<!--    <b-tab title="취소">취소</b-tab>-->
<!--    <b-tab title="기타상품">기타상품</b-tab>-->
  </b-tabs>
</template>

<script>
import { MonthPicker } from "vue-month-picker";

export default {
  name: "Tabs",
  props: ["currentData", "salesItems", "couponItems", "numberItems"],
  components: {
    MonthPicker,
  },
  data() {
    return {
      isEllipsis: false,
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
          key: "platform",
          label: "충전방법",
          thClass: "table-secondary",
        },
        {
          key: "afreecaId",
          label: "아프리카 아이디",
          thClass: "table-secondary",
        },
        {
          key: "platformId",
          label: "충전아이디",
          thClass: "table-secondary",
        },
        {
          key: "used_coupons",
          label: "충전쿠폰",
          thClass: "table-secondary",
        },
        {
          key: "chared_price",
          label: "충전예정금액",
          thClass: "table-secondary",
        },
        {
          key: "complete_chared_price",
          label: "충전완료금액",
          thClass: "table-secondary",
        },
        {
          key: "failed_price",
          label: "충전실패금액",
          thClass: "table-secondary",
        },
        {
          key: "success",
          label: "충전현황",
          thClass: "table-secondary",
        },
        {
          key: "createdAt",
          label: "충전일자",
          thClass: "table-secondary",
        },
        {
          key: "log",
          label: "내용",
          thClass: "table-secondary",
        },
      ],
      couponfields: [
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
          key: "serialNumber",
          label: "상품권번호",
          thClass: "table-secondary",
        },
        {
          key: "price",
          label: "가격",
          thClass: "table-secondary",
        },
        {
          key: "used",
          label: "사용여부",
          thClass: "table-secondary",
        },
        {
          key: "password",
          label: "비밀번호",
          thClass: "table-secondary",
        },
        {
          key: "normal",
          label: "정상여부",
          thClass: "table-secondary",
        },
        {
          key: "usedAt",
          label: "사용날짜",
          thClass: "table-secondary",
        },
        {
          key: "createdAt",
          label: "등록날짜",
          thClass: "table-secondary",
        },
        {
          key: "log",
          label: "오류상세",
          thClass: "table-secondary",
        },
      ],
      filter: "",
      empty: "",
      date: { from: null, to: null, month: null, monthIndex: null, year: null },
      selectedDate: null,
      monthPickerVisible: false,
    };
  },
  methods: {
    onRowSelected(items) {
      this.$emit("onRowSelected", items);
    },
    async showDate() {
      const data = await this.$axios.get(
        "http://49.247.38.210:3001/charge/chargeOnAir"
      );
      console.log(data);

      this.$emit("onMonthsalesData", data);
    },
    getSalesData() {
      this.$emit("getSalesData");
    },
    getCurrentMonthsalesData() {
      this.$emit("getCurrentMonthsalesData");
    },
    clearDate() {
      this.date = null;
      this.selectedDate = null;
      this.monthPickerVisible = false;
    },
    showMonthPicker() {
      this.monthPickerVisible = !this.monthPickerVisible;
    },
  },
  mounted() {},
  watch: {
    // eslint-disable-next-line no-unused-vars
    date(n, o) {
      // console.log(n, o);
      if (n) {
        // console.log(n);
        this.monthPickerVisible = false;
      }
    },
  },
};
</script>

<style scoped></style>
