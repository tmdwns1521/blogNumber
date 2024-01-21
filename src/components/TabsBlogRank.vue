<template>
  <b-tabs content-class="p-4" no-fade>
    <b-tab title="블로그" active>
      <div class="justify-content-between align-items-center mb-3 d-flex">
        <div class="d-flex">
          <h2 class="fw-900 m-0">블로그 랭킹 현황</h2>
        </div>
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
        @row-selected="onRowSelectedItems"
        select-mode="single"
        :sticky-header="true"
        :items="blogRankItems"
        :fields="blogRankFiled"
        class="dataTable salesTable"
        :filter="filter"
        label-sort-asc=""
        label-sort-desc=""
        label-sort-clear=""
        ref="selectableTable"
        show-empty
        emptyFilteredText="찾으시는 검색어와 일치하는 정보가 없습니다."
        emptyText="데이터 정보가 없습니다."
      >

        <!-- No -->
        <template #cell(index)="row">
          {{ row.item.index }}
        </template>
        <!-- 영역 -->
        <template #cell(type)="row">
          <span v-if="row.item.type === 0">
            VIEW
          </span>
          <span v-else>스블</span>
        </template>
        <!-- 링크 -->
        <template #cell(blog_url)="row">
          <span>
            {{ row.item.blog_url?.split(',').pop() }}
          </span>
        </template>
        <!-- 재발행 -->
        <template #cell(reissue)="row">
          <span>
            {{ row.item.blog_url?.split(',').length - 1 }}
          </span>
        </template>
        <!-- 매출 -->
        <template #cell(sales)="row">
          <span>
            {{ row.item.sales.toLocaleString() }}
          </span>
        </template>
        <!-- 연장횟수 -->
        <template #cell(extensionCount)="row">
          <span>
            {{ row.item.serviceCount - 25 }}
          </span>
        </template>
        <!-- 차수 -->
        <template #cell(gap)="row">
          <span v-if="row.item.gap > 0">
            +{{ row.item.gap }}
          </span>
          <span v-else-if="row.item.gap < 0">
            {{ row.item.gap }}
          </span>
        </template>

        <!--  check   -->
        <template #cell(checkDeposit)="row">
          <b-check @change="checkDeposit(row)" class="text-center mt-2" :checked="row.item.checkDeposit === 1"></b-check>
        </template>


        <!-- 랭크 -->
        <template #cell(rank)="row">
          <template v-if="row.item.type === 0">
            <span v-if="row.item.rank >= 6" style="background-color: red; color: white;">
              {{ row.item.rank }}위
            </span>
            <span v-else> {{ row.item.rank }}위 </span>
          </template>
          <template v-else>
            <span v-if="row.item.rank >= 4" style="background-color: red; color: white;">
              {{ row.item.rank }}위
            </span>
            <span v-else> {{ row.item.rank }}위 </span>
          </template>
        </template>

        <!-- 수집일 -->
        <template #cell(updatedAt)="row">
          <span>
            {{ row.item.updatedAt?.split(' ')[1]?.split(':').slice(0,2).join(':') }}
          </span>
        </template>


        <!-- 등록날짜 -->
        <template #cell(registration_date)="row">
          <span>
            {{ row.item.registration_date?.split(' ')[0]?.split('-').slice(1,3).join('') }}
          </span>
        </template>

        <!-- 블로그URL -->
        <template #cell(blog_url)="row">
          <a :href="row.item.blog_url?.split(',').pop()" target="_blank">
            {{ row.item.blog_url?.split('/').pop() }}
          </a>
        </template>

        <!-- 순위체크 -->
        <template #cell(individual_rank)="row">
          <b-button @click="blogRanking(row)" :disabled="row?.item?.isChecking" style="height: 30px; padding: 0;">
            {{ row?.item?.isChecking ? '체크중' : '순위체크' }}
          </b-button>
        </template>

        <!-- 카운트 -->
        <template #cell(count)="row">
          <button @click="decrement(row)">-</button>
          <span style="padding: 5px;">{{ row.item.count }}</span>
          <button @click="increment(row)">+</button>
        </template>

        <!-- 복사 -->
        <template #cell(copyData)="row">
          <b-button @click="onRowSelectedBlog(row)" style="height: 30px; padding: 0;">복사하기</b-button>
        </template>
        

      </b-table>
    </b-tab>
<!--    <b-tab title="취소">취소</b-tab>-->
<!--    <b-tab title="기타상품">기타상품</b-tab>-->
  </b-tabs>
</template>

<script>
import { MonthPicker } from "vue-month-picker";
// eslint-disable-next-line no-unused-vars
import VueClipboard from 'vue-clipboard2';
export default {
  name: "Tabs",
  props: ["currentData", "blogRankItems", "couponItems", "numberItems"],
  components: {
    MonthPicker,
  },
  data() {
    return {
      downloadLink: null,
      isEllipsis: false,
      blogRankFiled: [
        {
          key: "index",
          label: "No",
          // isRowHeader: true,
          // sortable: true,
          variant: "secondary",
          thClass: "",
          // filterByFormatted: true,
        },
        // {
        //   key: "checkDeposit",
        //   label: "입금",
        //   thClass: "table-secondary",
        // },
        {
          key: "copyData",
          label: "복사",
          sortable: false,
          thClass: "table-secondary",
        },
        {
          key: "type",
          label: "영역",
          sortable: true,
          thClass: "table-secondary",
        },
        // {
        //   key: "company_name",
        //   label: "업체명",
        //   sortable: false,
        //   thClass: "table-secondary",
        // },
        {
          key: "keyword",
          label: "키워드",
          sortable: false,
          thClass: "table-secondary",
        },
        {
          key: "updatedAt",
          label: "수집일",
          sortable: false,
          thClass: "table-secondary",
        },
        {
          key: "individual_rank",
          label: "순위체크",
          thClass: "table-secondary",
        },
        {
          key: "rank",
          label: "순위",
          sortable: true,
          thClass: "table-secondary",
        },
        {
          key: "gap",
          label: "차수",
          sortable: false,
          thClass: "table-secondary",
        },
        {
          key: "count",
          label: "카운트",
          sortable: false,
          thClass: "table-secondary",
        },
        {
          key: "blog_url",
          label: "링크",
          sortable: false,
          thClass: "table-secondary",
        },
        // {
        //   key: "count",
        //   label: "카운트",
        //   sortable: true,
        //   thClass: "table-secondary",
        // },
        // {
        //   key: "sales",
        //   label: "매출",
        //   sortable: false,
        //   thClass: "table-secondary",
        // },
        // {
        //   key: "serviceCount",
        //   label: "보장일수",
        //   sortable: true,
        //   thClass: "table-secondary",
        // },
        // {
        //   key: "extend_cnt",
        //   label: "연장횟수",
        //   sortable: true,
        //   thClass: "table-secondary",
        // },
        // {
        //   key: "reissue",
        //   label: "재발행",
        //   sortable: false,
        //   thClass: "table-secondary",
        // },
        // {
        //   key: "manager",
        //   label: "담당자",
        //   sortable: false,
        //   thClass: "table-secondary",
        // },
        {
          key: "work_detail",
          label: "작업내용",
          sortable: false,
          thClass: "table-secondary",
        },
      ],
      filter: "",
      empty: "",
      date: { from: null, to: null, month: null, monthIndex: null, year: null },
      selectedDate: null,
      monthPickerVisible: false,
      highlightedRowId: 2,
    };
  },
  methods: {
    async decrement(row) {
      const { count, id } = row.item;
      if (count === 0) return false;
      const data = {
        id,
        count: count - 1,
      }
      await this.$axios.post(`${process.env.API_URL}/blog/countUpdate`, data);
      this.$set(row.item, 'count', data.count);
    },
    async increment(row) {
      const { count, id } = row.item;
      const data = {
        id,
        count: count + 1,
      }
      await this.$axios.post(`${process.env.API_URL}/blog/countUpdate`, data);
      this.$set(row.item, 'count', data.count);
    },
    async blogRanking(row){
      // 해당 row에 대한 체크 중 상태를 토글합니다.
      this.$set(row.item, 'isChecking', true);
      try {
        const result = await this.$axios.post(`${process.env.API_URL}/blog/individual-rank`, row.item);

        let { updated_at, ranking } = result.data;
        // 성공적으로 체크를 마치면 체크 중 상태를 해제합니다.
        this.$set(row.item, 'isChecking', false);
        this.$set(row.item, 'rank', ranking);
        this.$set(row.item, 'updatedAt', updated_at);
      } catch (error) {
        console.error("체크 중 에러 발생:", error);
        // 에러가 발생하면 체크 중 상태를 해제합니다.
        this.$set(row.item, 'isChecking', false);
      }
    },
    async checkDeposit(row) {
      if (row.item.checkDeposit === 0) {
        await this.$axios.post(`${process.env.API_URL}/blog/checkDeposit`, {
          id: row.item.id,
          checkDeposit: 1,
        });
      } else {
        await this.$axios.post(`${process.env.API_URL}/blog/checkDeposit`, {
          id: row.item.id,
          checkDeposit: 0,
        });
      }
    },
    async oneMonthAgo() {
        const today = new Date();

      // 어제 날짜 계산
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);

      // 30일 전의 날짜 계산
      const thirtyDaysAgo = new Date(yesterday);
      thirtyDaysAgo.setDate(yesterday.getDate() - 30);

      // 날짜 형식 변환 함수
      // function formatDate(date) {
      //   const year = date.getFullYear();
      //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
      //   const day = date.getDate().toString().padStart(2, '0');
      //   return `${year}-${month}-${day}`;
      // }

      // 30일 전부터 어제까지의 날짜 출력
      // let currentDate = thirtyDaysAgo;
      // while (currentDate <= yesterday) {
      //   this.blogRankFiled.push({
      //     key: formatDate(currentDate),
      //     label: formatDate(currentDate),
      //     thClass: "table-secondary",
      //   },)
      //   currentDate.setDate(currentDate.getDate() + 1);
      // }

    },
    async downloadTextFile() {
    try {
      const response = await this.$axios.get(`${process.env.API_URL}/blog/download-text`, {
          responseType: 'text', // 텍스트 형식으로 데이터 받기
        });

        // 텍스트 데이터를 Blob으로 변환황
        const blob = new Blob([response.data], { type: 'text/plain' });
        const fileName = 'download.txt'; // 다운로드할 파일 이름 설정

        // 브라우저에서 파일 다운로드하기
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          // Internet Explorer 용 처리
          window.navigator.msSaveOrOpenBlob(blob, fileName);
        } else {
          // 그 외 브라우저
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = fileName;
          link.click();
        }
      } catch (error) {
        console.error('다운로드 링크를 가져오는데 실패했습니다.', error);
      }
    },
    onRowSelectedBlog(items) {
      // b-table에 추가되면됨
      //
      const textToCopy = `키워드 : ${items.item.keyword} \n순위 : ${items.item.rank}위 \n카운트 : ${items.item.count} \n링크 : ${items.item.blog_url?.split(',').pop()}`;
      this.$copyText(textToCopy);
    },
    onRowSelectedItems(items) {
      this.$emit("onRowSelectedBlog", items);
    },

    async showDate() {
      // pass
      // this.$emit("onMonthsalesData", data);
    },
    getSalesData() {
      this.$emit("getData");
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
  async mounted() {
    await this.oneMonthAgo();
  },
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

<style scoped>
.highlighted {
  background-color: yellow;
  color: brown;
}
.highlightedOrange {
  background-color: orange;
  color: white;
}
</style>





