<template>
  <div class="sales-page">
    <!-- 매출관리 -->
    <!-- <b-row class="justify-content-between align-items-center mb-3">
      <b-btn variant="dark" class="ms-2" @click="logout()"
                  >로그아웃</b-btn
                >
    </b-row> -->
    <div style="max-width: 1850px; position: sticky; top: 0px; z-index: 99; background-color: #f8f9fa;">
      <!-- 블로그 URL 추가 -->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>업체명</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input v-model="placeRankInfo.company_name" :disabled="!addTag"></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="currentData[0].company_name" :disabled="!updateTag"></b-form-input>
                  </template>
                </b-td>
                <b-th>키워드</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input v-model="placeRankInfo.keyword" :disabled="!addTag"></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="currentData[0].keyword" :disabled="!updateTag"></b-form-input>
                  </template>
                </b-td>
                <b-th>지도번호</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="placeRankInfo.placeNumber" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].placeNumber" :disabled="!updateTag"></b-textarea>
                  </template>
                </b-td>
                <b-th>작업내용</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="placeRankInfo.work_detail" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].work_detail" :disabled="!updateTag"></b-textarea>
                  </template>
                </b-td>
              </b-tr>
              <!-- 계좌이체 -->
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <!-- 신규등록일 때 -->
              <template v-if="addTag === true">
                <b-btn variant="dark" class="ms-2" @click="addData()"
                  >등록완료</b-btn
                >
                <b-btn class="ms-2" variant="danger" @click="addCancel()"
                  >취소</b-btn
                >
              </template>
              <!-- 수정일 때 -->
              <template v-else-if="updateTag === true">
                <b-btn variant="dark" class="ms-2" @click="addNew()"
                  >신규등록</b-btn
                >
                <b-btn variant="dark" class="ms-2" @click="updateData()"
                  >수정완료</b-btn
                >
                <b-btn
                  class="ms-2"
                  variant="danger"
                  @click="extend()"
                  v-if="is_extend"
                  >연장하기</b-btn
                >
                <b-btn
                  class="ms-2"
                  variant="danger"
                  @click="remove()"
                  >삭제</b-btn
                >
                <b-btn class="ms-2" variant="danger" @click="updateCancel()"
                  >취소</b-btn
                >
              </template>
              <!-- 기본 -->
              <template v-else>
                <b-btn variant="dark" class="ms-2" @click="addNew()"
                  >신규등록</b-btn
                >
<!--                <b-btn-->
<!--                  class="ms-2"-->
<!--                  @click="updateTag = true"-->
<!--                  :disabled="isEmpty(currentData)"-->
<!--                  >수정</b-btn-->
<!--                >-->
                <b-btn
                  class="ms-2"
                  variant="danger"
                  :disabled="isEmpty(currentData)"
                  @click="deleteData(currentData._id)"
                  >삭제</b-btn
                >
              </template>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-col class="text-center">
        <b-button @click="rankingCheck" v-if="is_checking">순위 체크</b-button>
        <b-button v-else>순위 체크중 ...</b-button>
<!--        <div style="padding-top: 5px; font-size: 25px;">관리 매출 : {{salesTotal.toLocaleString()}}</div>-->
<!--        <div style="padding-top: 5px; font-size: 20px;">당월 매출 : {{confirmSalesTotal.toLocaleString()}}</div>-->
      </b-col>
    </div>

    <TabsPlaceRank
      :placeRankItems="placeRankItems"
      @onRowSelectedBlog="handleRowSelectedBlog"
    />
  </div>
</template>

<script>
import TabsPlaceRank from "@/components/TabsPlaceRank.vue";
export default {
  name: "Place",
  components: { TabsPlaceRank },
  data() {
    return {
      is_checking: true,
      salesTotal: 0,
      confirmSalesTotal: 0,
      placeRankInfo: {
        keyword: '',
        manager: '',
        placeNumber: '',
        registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        company_name: '',
        type: 0,
        serviceCount: 25,
        sales: 0,
        work_detail: "",
        smart_link: "",
      },
      placeRankItems: null,
      currentData: {},
      updateTag: false,
      addTag: false,
      is_extend: false,
    };
  },
  methods: {
    async rankingCheck() {
      this.is_checking = false;
      await this.$axios.get(`${process.env.API_URL}/blog/placeRankingCheck`);
      this.is_checking = true;
      window.location.reload();
    },
    async extend() {
      const extendCheck = confirm("연장 하시겠습니까?");
      if (extendCheck) {
        await this.$axios.post(`${process.env.API_URL}/blog/extendBlogRankData`,
          this.currentData[0]
        );
        await this.getData();
        alert('연장이 완료되었습니다.');
      }
    },
    async remove() {
      const removeCheck = confirm("삭제 하시겠습니까?");
      if (removeCheck) {
        await this.$axios.post(`${process.env.API_URL}/blog/removePlaceRankData`,
          this.currentData[0]
        );
        await this.getData();
        alert('삭제가 완료되었습니다.');
      }
    },
    addNew() {
      console.log('new');
      this.addTag = true;
      this.currentData = {};
    },
    decreaseValue() {
      if (this.currentData.length !== 1) {
        if (this.placeRankInfo.serviceCount > 0) {
          this.placeRankInfo.serviceCount--;
        }
      } else {
        if (this.currentData[0].serviceCount > 0) {
          this.currentData[0].serviceCount--;
        }
      }
    },
    increaseValue() {
      if (this.currentData.length !== 1) {
        this.placeRankInfo.serviceCount++;
      } else {
        this.currentData[0].serviceCount++;
      }
    },
    async formatChargedPrice() {
      if (!this.placeRankInfo.sales) return; // 입력값이 없을 경우 빠른 리턴

      const priceValue = parseFloat(this.placeRankInfo.sales.replace(/,/g, ''));
      if (!isNaN(priceValue)) {
        this.placeRankInfo.sales = priceValue.toLocaleString();
      }
    },
    // 신규등록 완료
    async addData() {
      await this.$axios.post(`${process.env.API_URL}/blog/placeRankData`,
          this.placeRankInfo
      );
      await this.getData();
      // window.location.reload();
    },
    // 신규등록 취소
    addCancel() {
      this.addTag = false;
    },
    // 수정 완료
    async updateData() {
      this.updateTag = false;
      console.log(this.currentData[0]);
      await this.$axios.post(`${process.env.API_URL}/blog/updatePlaceRankData`,
          this.currentData[0]
      );
      window.alert("수정 성공");
      await this.getData();
    },
    // 수정 취소
    updateCancel() {
      this.currentData = Object.assign({}, this.cachedData);
      this.currentData.cardData = Object.assign({}, this.cachedData.cardData);

      this.updateTag = false;
    },
    handleRowSelectedBlog(items) {
      this.is_extend = items[0].count >= items[0].serviceCount;
      if (items.length > 0) {
        this.addTag = false;
        this.updateTag = true;
        this.currentData = items;
      } else {
        this.addTag = false;
        this.updateTag = true;
        this.currentData = items;
      }
    },
    async logout() {
      localStorage.removeItem('token');
      await this.$router.push('/');
    },
    async pageLoad() {
      // 저장된 토큰을 가져오는 함수
      let token = localStorage.getItem('token');
      if (!token) {
        await this.$router.push('/');
      }
      token = token.replaceAll('"', '');
      // eslint-disable-next-line no-unused-vars
      const data = await this.$axios.post(
        `${process.env.API_URL}/api/verify-token`, null, {
          headers: {
              Authorization: `Bearer ${token}`,
            }
          }
      );
      if (data.data.isValid === false) {
        await this.$router.push('/');
      }
    },
    async getData() {
      const data = await this.$axios.get(
        `${process.env.API_URL}/blog/getPlaceRankData`
      );
      this.onList(data);
    },

    onList(data) {
      this.salesTotal = 0;
      this.confirmSalesTotal = 0;
      // data.data.places.forEach((item) => {
      //   this.salesTotal += item.sales;
      //   if (item.checkDeposit === 1) {
      //     this.confirmSalesTotal += item.sales;
      //   }
      //   const filterData = data.data.place_ranks.filter((e) => item.id === e.placeNumber);
      //   filterData.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      //   item.updatedAt = filterData[0]?.updatedAt;
      //   item.gap = filterData[0]?.gap;
      // })
      const datas = data.data.places;
      this.placeRankItems = datas;
      this.placeRankItems.forEach((item, idx) => {
        item.index = idx + 1;
      })
      // data.data.blog_ranks.forEach(item => {
      //   const dateStr = item.updatedAt.split(" ")[0];
      //   const targetIndex = this.placeRankItems?.findIndex(e => e.id === item.blog_id);
      //   this.placeRankItems[targetIndex][dateStr] = item.rank;
      // })
    },
  },
  mounted() {
    document.title = '지도 분석'
    this.getData();
  },
  computed: {},
};
</script>

<style></style>
