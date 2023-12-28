<template>
  <div class="sales-page">
    <!-- 매출관리 -->
    <b-row class="justify-content-between align-items-center mb-3">
      <b-btn variant="dark" class="ms-2" @click="logout()"
                  >로그아웃</b-btn
                >
    </b-row>
    <div style="max-width: 1850px">
      <!--  매출정보 -->
      <b-row class="mb-4">
        <b-col>
          <div class="text-center h-100 bg-white border p-4" style="border-radius: 10px">
            <b-row class="justify-content-between align-items-center">
             <!-- <b-col class="text-18 border-end">
               <strong>전체 블로그</strong>
               <p class="opacity-50 m-0">
                 <span>{{ blogInfo.blogs }}</span>
               </p>
             </b-col> -->
             <b-col class="text-18 border-end">
               <strong>16년 이전 블로그 개수</strong>
               <p class="opacity-50 m-0">
                 <span>{{ blogInfo.checkBlogOnCount.toLocaleString() }} / {{ blogInfo.blogsCount.toLocaleString() }}</span>
               </p>
             </b-col>
             <b-col class="text-18 border-end">
               <strong>최적화 블로그 개수</strong>
               <p class="opacity-50 m-0">
                 <span>{{ blogInfo.checkOptimizationValidOnCount.toLocaleString() }} / {{ blogInfo.checkOptimizationValidCount.toLocaleString() }}</span>
               </p>
             </b-col>
              <b-col class="text-18 border-end">
                <strong>번호 추출 블로그 개수</strong>
                <p class="opacity-50 m-0">
                  <span>{{ blogInfo.checkCafeValidOnCount.toLocaleString() }} / {{ blogInfo.checkCafeValidCount.toLocaleString() }}</span>
                </p>
              </b-col>
              <b-col class="text-18 border-end">
                <strong>마케팅 가능 번호 개수</strong>
                <p class="opacity-50 m-0">
                  <span>{{ blogInfo.checkCafeNumberOn.length.toLocaleString() }}</span>
                </p>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
      <!-- <b-row class="mb-4">
        <b-col>
          <div class="text-center h-100 bg-white border p-4" style="border-radius: 10px">
            <b-row class="justify-content-between align-items-center">
              <b-col class="text-18 border-end" v-for="item in userInfos">
                <strong>{{item.naverId}}</strong>
                <p class="opacity-50 m-0">
                  <span>{{ item.is_block == 0 ? "정상" : "비정상"  }}</span>
                </p>
                <p class="opacity-50 m-0">
                  <span>{{ item.is_use == 0 ? "미사용" : "사용중" }}</span>
                </p>
                <b-button @click="userUpdate(item)">수정완료</b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row> -->
    </div>
    <!-- {{ currentData }}
    {{ newData }} -->
    <Tabs
      @onMonthsalesData="onMonthsalesData"
      @getCurrentMonthsalesData="getCurrentMonthsalesData"
      :blogsItems="blogsItems"
      :couponItems="couponItems"
    />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from 'axios';
export default {
  name: "Sales",
  components: { Tabs },
  data() {
    return {
      userInfos: {},
      blogInfo: {
        blogsCount: 0,
				checkBlogOnCount: 0,
				checkOptimizationValidCount: 0,
				checkOptimizationValidOnCount: 0,
				checkCafeValidCount: 0,
				checkCafeValidOnCount: 0,
				checkCafeNumberOn: []
      },
      chargePrice: 10000,
      blogsItems: null,
      couponItems: null,
      couponList: {},
      currentData: {},
      cachedData: {},
      couponDatas: '',
      couponData: {
        serialNum: null,
        serialPrice: null,
        serialPassword: null,
      },
      newData: {
        afId: null,
        afPw: null,
        platformId: null,
        platformPw: null,
        chargedPrice: null,
      },
      paymentType: "AB",
      addTag: false,
      updateTag: false,
      empty: "",
      totalPricePredicted: null,
      totalPriceConfirm: null,
      managerPricePredicted: null,
      managerPriceConfirm: null,
    };
  },
  methods: {
    async formatAfreecaPrice() {
      if (!this.couponData.serialPrice) return; // 입력값이 없을 경우 빠른 리턴

      this.couponData.serialPrice = Number(this.couponData.serialPrice).toLocaleString();
    },
    async formatChargedPrice() {
      if (!this.newData.chargedPrice) return; // 입력값이 없을 경우 빠른 리턴

      this.newData.chargedPrice = Number(this.newData.chargedPrice).toLocaleString();
    },
    // 삭제
    async deleteData(item) {
      this.$bvModal
        .msgBoxConfirm("기록을 삭제하시겠습니까?", {
          title: "처리기록 삭제",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "삭제",
          cancelTitle: "취소",
          footerClass: "p-2",
          centered: true,
          noCloseOnBackdrop: true,
          titleClass: "fw-900",
          footerBgVariant: "white",
        })
        .then((value) => {
          if (value) {
            // console.log(item);
            // const data =
            this.$axios
              .delete(`${process.env.API_URL}/api/salesData`, {
                data: { id: item, size: this.$store.state.role },
                headers: {},
              })
              .then((res) => {
                console.log(res);
                if (res.data.result === "fail") {
                  window.alert("삭제 권한 없음");
                } else {
                  window.alert("삭제 완료");
                  this.getSalesData();
                }
              });
            // console.log(data);
          }
        });
    },
    // 신규등록 완료
    async addData() {
      const couponDatas = this.couponDatas.split('\n');
      // eslint-disable-next-line no-unused-vars
      const result = await axios.post('http://49.247.38.210:3001/charge/serialRegist', {
        chargePrice: this.chargePrice,
        couponDatas,
      });
      window.location.reload();
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
      this.currentData = Object.assign({}, this.cachedData);
      this.currentData.cardData = Object.assign({}, this.cachedData.cardData);

      this.updateTag = false;
    },
    onRowSelected(items) {
      this.addTag = false;
      items = items[0];
      this.currentData = { ...items };

      this.cachedData = Object.assign({}, this.currentData);
      this.cachedData.cardData = Object.assign({}, this.currentData.cardData);

      if (
        !this.currentData.cardData ||
        this.currentData.cardData.creditCardNumber === ""
      ) {
        this.paymentType = "cash";
      } else {
        this.paymentType = "card";
      }

      this.managerPricePredicted = 0;
      this.managerPriceConfirm = 0;
      const managerDataList = [];
      const managerPList = [];
      const managerCList = [];

      this.salesItems.filter((el) => {
        if (el.manager === this.currentData.manager) {
          managerDataList.push(el);
        }
      });
      for (const i of managerDataList) {
        managerPList.push(i.AmountOfPayment);
        if (i.Approved === true) {
          managerCList.push(i.AmountOfPayment);
        }
      }

      this.managerPList = managerPList;
      this.managerCList = managerCList;

      this.managerPList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.managerPricePredicted += parseInt(item);
        }
      });
      this.managerCList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.managerPriceConfirm += parseInt(item);
        }
      });
    },
    async userUpdate(id) {
      await this.$axios.post(`${process.env.API_URL}/user/userState`, id);
      location.reload();
    },
    // eslint-disable-next-line vue/no-dupe-keys
    async userStatus() {
      const userStatus = await this.$axios.get(`${process.env.API_URL}/user/userStatus`);
      this.userInfos = userStatus.data;
    },
    async logout() {
      localStorage.removeItem('token');
      await this.$router.push('/');
    },
    async getBlogInfo() {
      try {
        const blogs = await this.$axios.get(`${process.env.API_URL}/blog/getBlogs`);
        this.blogInfo = blogs?.data;
        this.blogsItems = blogs?.data?.checkCafeNumberOn;
      } catch (e) {
        console.error("Error fetching blogs:", e);
      }
      // const NumberBlogs = await this.$axios.get(`${process.env.API_URL}/blog/getNumberBlogs`);
      // console.log(NumberBlogs);
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
    async getCurrentMonthsalesData() {
      const data = await this.$axios.get(
        `${process.env.API_URL}/blog/getNumberBlogs`
      );
      this.onList(data);
    },
    async mySize() {
      const isToken = localStorage.getItem("token");
      const tokenData = JSON.parse(isToken);

      const data = await this.$axios.post(
        `{process.env.API_URL}/api/MySize`,
        { userToken: tokenData }
      );
      // console.log("mySize: ", data.data.Size);
      this.$store.dispatch("setRole", data.data.Size);
    },

    onMonthsalesData(data) {
      console.log("onMonthsalesData", data);
      this.onList(data);
    },

    onList(data) {
      const datas = data.data.NumberBlogs;
      const dataList = [];

      this.totalPricePredicted = 0;
      this.totalPriceConfirm = 0;

      for (const i in datas) {
        datas[i].index = Number(i);
        dataList.push(datas[i]);
      }
      this.blogsItems = dataList;

    },
  },
  beforeDestroy() {
    // 컴포넌트가 파괴될 때 타이머 해제
    clearInterval(this.blogInfoTimer);
  },
  mounted() {
    this.getCurrentMonthsalesData();
    // this.mySize();
    this.getBlogInfo();
    this.userStatus();

    // 반복 타이머 시작
    // this.blogInfoTimer = setInterval(() => {
    //   console.log('abab');
    //   this.getBlogInfo();
    // }, 30000);
  },
  computed: {},
};
</script>

<style></style>
