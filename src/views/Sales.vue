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
              <b-col class="text-18 border-end" v-for="(key, value) in couponList">
                <strong>{{ Number(value).toLocaleString() }}원</strong>
                <p class="opacity-50 m-0">
                  <span>{{ key }}EA</span>
                </p>
              </b-col>
              <!-- <b-col class="text-18 border-end">
                <strong>취소 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                  
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>합계</strong>
                <p class="opacity-50 m-0">
                  <span>\</span> 0
                 
                </p>
              </b-col> -->
            </b-row>
          </div>
        </b-col>
      </b-row>
      <b-row class="mb-4">
        <b-col>
          <b-form-select v-model="chargePrice" class="mb-3"
            ><b-form-select-option value="10000"
              >10,000</b-form-select-option
            >
            <b-form-select-option value="30000"
              >30,000</b-form-select-option
            ><b-form-select-option value="50000"
              >50,000</b-form-select-option
            ><b-form-select-option value="100000"
              >100,000</b-form-select-option
            ></b-form-select
          >
          <b-form-textarea class="mb-3" v-model="couponDatas" placeholder="BABABABABA123456(비번)000000
BABABABABA123456(비번)000000
BABABABABA123456(비번)000000
BABABABABA123456(비번)000000"></b-form-textarea>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <b-btn variant="dark" class="ms-2" @click="addData()">
                등록완료
              </b-btn>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- 확인/수정/등록 데이터정보 -->
<!--      <b-row class="mb-4">-->
<!--        <b-col>-->
<!--          <b-table-simple small bordered fixed class="currentTable">-->
<!--            <b-tbody>-->
<!--              <b-tr>-->
<!--                <b-th>시리얼 넘버</b-th>-->
<!--                <b-td>-->
<!--                  <template v-if="!addTag">-->
<!--                    <b-form-input-->
<!--                      v-if="isEmpty(currentData)"-->
<!--                      disabled-->
<!--                      :value="empty"-->
<!--                    ></b-form-input>-->
<!--                    <b-form-input-->
<!--                      v-else-->
<!--                      :disabled="!updateTag"-->
<!--                      v-model="couponData.serialNum"-->
<!--                    ></b-form-input>-->
<!--                  </template>-->
<!--                  <template v-else>-->
<!--                    <b-form-input-->
<!--                      v-model="couponData.serialNum"-->
<!--                    ></b-form-input> </template-->
<!--                ></b-td>-->
<!--                <b-th>가격</b-th>-->
<!--                <b-td>-->
<!--                  <template v-if="!addTag">-->
<!--                    <b-form-input-->
<!--                      v-if="isEmpty(currentData)"-->
<!--                      disabled-->
<!--                      :value="empty"-->
<!--                    ></b-form-input>-->
<!--                    <b-form-input-->
<!--                      v-else-->
<!--                      :disabled="!updateTag"-->
<!--                      v-model="couponData.serialPrice"-->
<!--                      @change="formatAfreecaPrice"-->
<!--                    ></b-form-input>-->
<!--                  </template>-->
<!--                  <template v-else>-->
<!--                    <b-form-input-->
<!--                      v-model="couponData.serialPrice"-->
<!--                      @change="formatAfreecaPrice"-->
<!--                    ></b-form-input> </template-->
<!--                ></b-td>-->
<!--                <b-th>비밀번호</b-th>-->
<!--                <b-td>-->
<!--                  <template v-if="!addTag">-->
<!--                    <b-form-input-->
<!--                      v-if="isEmpty(currentData)"-->
<!--                      disabled-->
<!--                      :value="empty"-->
<!--                    ></b-form-input>-->
<!--                    <b-form-input-->
<!--                      v-else-->
<!--                      :disabled="!updateTag"-->
<!--                      v-model="couponData.serialPassword"-->
<!--                    ></b-form-input>-->
<!--                  </template>-->
<!--                  <template v-else>-->
<!--                    <b-form-input-->
<!--                      v-model="couponData.serialPassword"-->
<!--                    ></b-form-input> </template-->
<!--                ></b-td>-->
<!--              </b-tr>-->
<!--            </b-tbody>-->
<!--          </b-table-simple>-->
<!--          <b-row class="justify-content-between align-items-center">-->
<!--            <b-col class="text-end">-->
<!--              &lt;!&ndash; 신규등록일 때 &ndash;&gt;-->
<!--              <template v-if="addTag == true">-->
<!--                <b-btn variant="dark" class="ms-2" @click="addData()"-->
<!--                  >등록완료</b-btn-->
<!--                >-->
<!--                <b-btn class="ms-2" variant="danger" @click="addCancel()"-->
<!--                  >취소</b-btn-->
<!--                >-->
<!--              </template>-->
<!--              &lt;!&ndash; 수정일 때 &ndash;&gt;-->
<!--              <template v-else-if="updateTag == true">-->
<!--                <b-btn variant="dark" class="ms-2" @click="updateData()"-->
<!--                  >수정완료</b-btn-->
<!--                >-->
<!--                <b-btn class="ms-2" variant="danger" @click="updateCancel()"-->
<!--                  >취소</b-btn-->
<!--                >-->
<!--              </template>-->
<!--              &lt;!&ndash; 기본 &ndash;&gt;-->
<!--              <template v-else>-->
<!--                <b-btn variant="dark" class="ms-2" @click="addTag = true"-->
<!--                  >신규등록</b-btn-->
<!--                >-->
<!--                <b-btn-->
<!--                  class="ms-2"-->
<!--                  @click="updateTag = true"-->
<!--                  :disabled="isEmpty(currentData)"-->
<!--                  >수정</b-btn-->
<!--                >-->
<!--                <b-btn-->
<!--                  class="ms-2"-->
<!--                  variant="danger"-->
<!--                  :disabled="isEmpty(currentData)"-->
<!--                  @click="deleteData(currentData._id)"-->
<!--                  >삭제</b-btn-->
<!--                >-->
<!--              </template>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--        </b-col>-->
<!--      </b-row>-->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>PlatForm</b-th>
                <b-td>
                    <b-form-select v-model="paymentType"
                      ><b-form-select-option value="AB"
                        >아프리카</b-form-select-option
                      >
                      <b-form-select-option value="CL"
                        >컬쳐랜드</b-form-select-option
                      ><b-form-select-option value="BL"
                        >북앤라이프</b-form-select-option
                      ><b-form-select-option value="HM"
                        >해피머니</b-form-select-option
                      ></b-form-select
                    >
                </b-td>
                <b-th>AF ID</b-th>
                <b-td>
                    <b-form-input
                      v-model="newData.afId"
                    ></b-form-input>
                </b-td>
                <b-th>AF PW</b-th>
                <b-td>
                    <b-form-input
                      v-model="newData.afPw"
                    ></b-form-input>
                </b-td>
              </b-tr>
                <b-tr>
                  <b-th>ID</b-th>
                  <b-td>
                    <template v-if="paymentType === 'AB'">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="newData.platformId"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.platformId"
                    ></b-form-input> </template
                    >
                  </b-td>
                  <b-th>PW</b-th>
                  <b-td>
                    <template v-if="paymentType === 'AB'">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else
                      :disabled="!updateTag"
                      v-model="newData.platformPw"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      v-model="newData.platformPw"
                    ></b-form-input> </template
                >
                  </b-td>
                  <b-th>PRICE</b-th>
                  <b-td>
                    <b-form-input
                      v-model="newData.chargedPrice"
                      @change="formatChargedPrice"
                    ></b-form-input>
                  </b-td>
                </b-tr>
              <!-- 계좌이체 -->
            </b-tbody>
          </b-table-simple>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <b-btn variant="dark" class="ms-2" @click="chaging()"
                >충전하기</b-btn
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <!-- {{ currentData }}
    {{ newData }} -->
    <Tabs
      @onRowSelected="onRowSelected"
      @onMonthsalesData="onMonthsalesData"
      @getCurrentMonthsalesData="getCurrentMonthsalesData"
      @getSalesData="getSalesData"
      :salesItems="salesItems"
      :couponItems="couponItems"
    />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import axios from 'axios';
import async from "async";
export default {
  name: "Sales",
  components: { Tabs },
  data() {
    return {
      chargePrice: 10000,
      salesItems: null,
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
              .delete("http://49.247.32.231:5000/api/salesData", {
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
    chaging() {
      this.$axios.post('http://49.247.38.210:3001/charge/AfreecaCharge', {
        card: this.paymentType,
        afId: this.newData.afId,
        afPw: this.newData.afPw,
        Id: this.newData.platformId,
        Pw: this.newData.platformPw,
        price: this.newData.chargedPrice,
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
        "http://49.247.38.210:3001/api/verify-token", null, {
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
        "http://49.247.38.210:3001/charge/chargeOnAir"
      );
      const couponData = await this.$axios.get(
          "http://49.247.38.210:3001/charge/couponList"
      );
      this.onList(data, couponData);
    },
    async getSalesData() {
      const data = await this.$axios.get(
        "http://49.247.38.210:3001/charge/chargeOnAir"
      );


      const couponData = await this.$axios.get(
          "http://49.247.38.210:3001/charge/couponList"
      );

      this.onList(data, couponData);
    },
    async mySize() {
      const isToken = localStorage.getItem("token");
      const tokenData = JSON.parse(isToken);

      const data = await this.$axios.post(
        "http://49.247.32.231:5000/api/MySize",
        { userToken: tokenData }
      );
      // console.log("mySize: ", data.data.Size);
      this.$store.dispatch("setRole", data.data.Size);
    },

    onMonthsalesData(data) {
      console.log("onMonthsalesData", data);
      this.onList(data);
    },

    onList(data, couponData) {
      const couponItems = couponData.data;
      const datas = data.data;
      const dataList = [];
      const couponLists = [];

      const totalPList = [];
      const totalCList = [];

      this.totalPricePredicted = 0;
      this.totalPriceConfirm = 0;

      for (const i of couponItems) {
        couponLists.push(i);
      }

      for (const i of datas) {
        dataList.push(i);
      }
      this.couponItems = couponLists.reverse();
      this.couponItems.forEach((e) => {
        if (e.normal === 0 && e.used === 0) {
          if (this.couponList[e.price]) {
            this.couponList[e.price] += 1
          } else {
            this.couponList[e.price] = 1
          }
        }
        if (e.normal === 0) {
          e.normal = '정상';
        } else {
          e.normal = '비정상';
        }
        if (e.used === 0) {
          e.used = '미사용';
        } else {
          e.used = '사용';
        }
        e.price = Number(e.price).toLocaleString();
      });
      this.salesItems = dataList.reverse();
      this.salesItems.forEach((e) => {
        if (e.platform === 'AB') {
          e.platform = '아프리카';
        } else if (e.platform === 'CL') {
          e.platform = '컬쳐랜드';
        } else if (e.platform === 'BL') {
          e.platform = '도서문화상품권';
        } else if (e.platform === 'HM') {
          e.platform = '해피머니';
        }
        if (e.success === 0) {
          e.success = '결제 실패'
        } else if (e.success === 1) {
          e.success = '결제 완료'
        } else if (e.success === 2) {
          e.success = '결제 진행중'
        }
        e.chared_price = Number(e.chared_price).toLocaleString();
        e.complete_chared_price = Number(e.complete_chared_price).toLocaleString();
        e.failed_price = Number(e.failed_price).toLocaleString();
      })
      this.totalPList = totalPList;
      this.totalCList = totalCList;

      this.salesItems.forEach((el, index) => {
        this.$set(el, "index", index);
      });
      this.totalPList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.totalPricePredicted += parseInt(item);
        }
      });
      this.totalCList.forEach((item) => {
        item = parseInt(item);
        if (isNaN(item) === false) {
          this.totalPriceConfirm += parseInt(item);
        }
      });
    },
  },
  mounted() {
    this.getCurrentMonthsalesData();
    // this.mySize();
    this.pageLoad();
  },
  computed: {},
};
</script>

<style></style>
