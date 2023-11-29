<template>
  <div class="sales-page">
    <!-- 매출관리 -->
    <b-row class="justify-content-between align-items-center mb-3">
      <b-btn variant="dark" class="ms-2" @click="logout()"
                  >로그아웃</b-btn
                >
    </b-row>
    <div style="max-width: 1850px">
      <!-- 블로그 URL 추가 -->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>영역</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-select v-model="blogRankInfo.type" :disabled="!addTag">
                      <b-form-select-option value=0>VIEW</b-form-select-option>
                      <b-form-select-option value=1>스마트블록</b-form-select-option>
                    </b-form-select>
                  </template>
                  <template v-else>
                    <b-form-select v-model="currentData[0].type" :disabled="!updateTag">
                      <b-form-select-option value=0>VIEW</b-form-select-option>
                      <b-form-select-option value=1>스마트블록</b-form-select-option>
                    </b-form-select>
                  </template>
                </b-td>
                <b-th>키워드</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input v-model="blogRankInfo.keyword" :disabled="!addTag"></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="currentData[0].keyword" :disabled="!updateTag"></b-form-input>
                  </template>
                </b-td>
                <b-th>블로그URL</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="blogRankInfo.blog_url" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].blog_url" :disabled="!updateTag"></b-textarea>
                  </template>
                </b-td>
                <b-th>스마트블록링크</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="blogRankInfo.smart_link" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].smartlink" :disabled="!updateTag"></b-textarea>
                  </template>
                </b-td>
                <b-th>작업내용</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="blogRankInfo.work_detail" :disabled="!addTag"></b-textarea>
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
        <b-button @click="rankingCheck">순위 체크</b-button>
<!--        <div style="padding-top: 5px; font-size: 25px;">관리 매출 : {{salesTotal.toLocaleString()}}</div>-->
<!--        <div style="padding-top: 5px; font-size: 20px;">당월 매출 : {{confirmSalesTotal.toLocaleString()}}</div>-->
      </b-col>
    </div>

    <TabsBlogRank
      :blogRankItems="blogRankItems"
      @onRowSelectedBlog="handleRowSelectedBlog"
    />
  </div>
</template>

<script>
import TabsBlogRank from "@/components/TabsBlogRank.vue";
export default {
  name: "Sales",
  components: { TabsBlogRank },
  data() {
    return {
      salesTotal: 0,
      confirmSalesTotal: 0,
      blogRankInfo: {
        blog_url: '',
        keyword: '',
        manager: '',
        registration_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        company_name: '',
        type: 0,
        serviceCount: 25,
        sales: 0,
        work_detail: "",
        smart_link: "",
      },
      blogRankItems: null,
      currentData: {},
      updateTag: false,
      addTag: false,
      is_extend: false,
    };
  },
  methods: {
    async rankingCheck() {
      await this.$axios.get(`${process.env.API_URL}/blog/rankingCheck`);
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
        await this.$axios.post(`${process.env.API_URL}/blog/removeBlogRankData`,
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
        if (this.blogRankInfo.serviceCount > 0) {
          this.blogRankInfo.serviceCount--;
        }
      } else {
        if (this.currentData[0].serviceCount > 0) {
          this.currentData[0].serviceCount--;
        }
      }
    },
    increaseValue() {
      if (this.currentData.length !== 1) {
        this.blogRankInfo.serviceCount++;
      } else {
        this.currentData[0].serviceCount++;
      }
    },
    async formatChargedPrice() {
      if (!this.blogRankInfo.sales) return; // 입력값이 없을 경우 빠른 리턴

      const priceValue = parseFloat(this.blogRankInfo.sales.replace(/,/g, ''));
      if (!isNaN(priceValue)) {
        this.blogRankInfo.sales = priceValue.toLocaleString();
      }
    },
    // 신규등록 완료
    async addData() {
      await this.$axios.post(`${process.env.API_URL}/blog/blogRankData`,
          this.blogRankInfo
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
      await this.$axios.post(`${process.env.API_URL}/blog/updateBlogRankData`,
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
        `${process.env.API_URL}/blog/getBlogRankData`
      );
      console.log(data);
      this.onList(data);
    },

    onList(data) {
      this.salesTotal = 0;
      this.confirmSalesTotal = 0;
      data.data.blogs.forEach((item) => {
        this.salesTotal += item.sales;
        if (item.checkDeposit === 1) {
          this.confirmSalesTotal += item.sales;
        }
        const filterData = data.data.blog_ranks.filter((e) => item.id === e.blog_id);
        filterData.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        item.updatedAt = filterData[0]?.updatedAt;
        item.gap = filterData[0]?.gap;
      })
      const datas = data.data.blogs;
      this.blogRankItems = datas;
      this.blogRankItems.forEach((item, idx) => {
        item.index = idx + 1;
      })
      data.data.blog_ranks.forEach(item => {
        const dateStr = item.updatedAt.split(" ")[0];
        const targetIndex = this.blogRankItems?.findIndex(e => e.id === item.blog_id);
        this.blogRankItems[targetIndex][dateStr] = item.rank;
      })
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
};
</script>

<style></style>
