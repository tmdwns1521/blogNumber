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
                <b-th>업체명</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input
                      v-model="blogRankInfo.company_name" :disabled="!addTag"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="currentData[0].company_name" :disabled="!updateTag"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>담당자</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input
                      v-model="blogRankInfo.manager" :disabled="!addTag"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="currentData[0].manager" :disabled="!updateTag"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>키워드</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input v-model="blogRankInfo.keyword" :disabled="!addTag"></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="currentData[0].keyword" :disabled="!updateTag"></b-form-input>
                  </template>
                </b-td>
                <b-th>서비스일자</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-input-group>
                      <b-button @click="decreaseValue" :disabled="!addTag">-</b-button>
                      <b-form-input v-model="blogRankInfo.serviceCount" style="text-align: center" :disabled="!addTag"></b-form-input>
                      <b-button @click="increaseValue" :disabled="!addTag">+</b-button>
                    </b-input-group>
                  </template>
                  <template v-else>
                    <b-input-group>
                      <b-button @click="decreaseValue" :disabled="!updateTag">-</b-button>
                      <b-form-input v-model="currentData[0].serviceCount" style="text-align: center" :disabled="!updateTag"></b-form-input>
                      <b-button @click="increaseValue" :disabled="!updateTag">+</b-button>
                    </b-input-group>
                  </template>
                </b-td>
                <b-th>매출</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-form-input v-model="blogRankInfo.sales" @input="formatChargedPrice" :disabled="!addTag"></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input v-model="currentData[0].sales" @input="formatChargedPrice" :disabled="!updateTag"></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>블로그URL</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="blogRankInfo.blog_url" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].blog_url" :disabled="!updateTag"></b-textarea>
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
                <b-th>스마트블록링크</b-th>
                <b-td>
                  <template v-if="currentData.length !== 1">
                    <b-textarea v-model="blogRankInfo.smart_link" :disabled="!addTag"></b-textarea>
                  </template>
                  <template v-else>
                    <b-textarea v-model="currentData[0].smart_link" :disabled="!updateTag"></b-textarea>
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
    </div>
    <!-- {{ currentData }}
    {{ newData }} -->
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
    };
  },
  methods: {
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
      this.onList(data);
    },

    onList(data) {
      data.data.blogs.forEach((item) => {
        const filterData = data.data.blog_ranks.filter((e) => item.id === e.blog_id);
        filterData.sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        item.updatedAt = filterData[0]?.updatedAt;
        item.gap = filterData[0]?.gap;
      })
      const datas = data.data.blogs;
      this.blogRankItems = datas;
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
