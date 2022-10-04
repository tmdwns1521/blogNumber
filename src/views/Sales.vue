<template>
  <div class="sales-page">
    <!-- 매출관리 -->
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
                <b-card-title class="opacity-50" v-if="!currentData.manager">
                  오늘의 픽
                </b-card-title>
                <b-card-title class="fw-900" v-else>
                  {{ currentData.manager }}
                </b-card-title>
              </b-col>
              <b-col class="text-18 border-end">
                <strong class="">예상 총매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <template v-if="!currentData.manager">{{
                    numberToString(totalPricePredicted)
                  }}</template>
                  <template v-else
                    >{{ numberToString(managerPricePredicted) }}
                  </template>
                </p>
              </b-col>
              <b-col class="text-18">
                <strong>확정 매출</strong>
                <p class="opacity-50 m-0">
                  <span>\</span>
                  <template v-if="!currentData.manager">{{
                    numberToString(totalPriceConfirm)
                  }}</template>
                  <template v-else
                    >{{ numberToString(managerPriceConfirm) }}
                  </template>
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
      <!-- 확인/수정/등록 데이터정보 -->
      <b-row class="mb-4">
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th
                  >담당자<font-awesome-icon
                    class="ms-1 fa-xs text-danger"
                    icon="fa-solid fa-star-of-life"
                /></b-th>
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
                <b-th
                  >대표자<font-awesome-icon
                    class="ms-1 fa-xs text-danger"
                    icon="fa-solid fa-star-of-life"
                /></b-th>
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
                    <template v-else>
                      <a
                        :href="'https://blog.naver.com/' + currentData.blogId"
                        target="_blank"
                      >
                        https://blog.naver.com/{{ currentData.blogId }}
                      </a></template
                    >
                  </template>
                  <template v-else>
                    https://blog.naver.com/{{ newData.blogId }}
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
                    <template v-else>
                      {{ currentData.blogId }}@naver.com
                    </template>
                  </template>
                  <template v-else> {{ newData.blogId }}@naver.com </template>
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
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-select
                      v-else
                      v-model="paymentType"
                      :disabled="!updateTag"
                    >
                      <b-form-select-option value="card"
                        >카드결제</b-form-select-option
                      >
                      <b-form-select-option value="cash"
                        >계좌이체</b-form-select-option
                      >
                    </b-form-select>
                  </template>
                  <template v-else>
                    <b-form-select v-model="paymentType"
                      ><b-form-select-option value="card"
                        >카드결제</b-form-select-option
                      >
                      <b-form-select-option value="cash"
                        >계좌이체</b-form-select-option
                      ></b-form-select
                    >
                  </template>
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
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else-if="currentData.cardData"
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.cardData.creditCardCompany"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
                      v-model="newData.creditCardCompany"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>카드소유자</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else-if="currentData.cardData"
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.cardData.cardholder"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
                      v-model="newData.cardholder"
                    ></b-form-input>
                  </template>
                </b-td>
                <b-th>카드번호</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else-if="currentData.cardData"
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.cardData.creditCardNumber"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
                      v-model="newData.creditCardNumber"
                    ></b-form-input>
                  </template>
                </b-td>
              </b-tr>
              <b-tr>
                <b-th>카드유효기간</b-th>
                <b-td>
                  <template v-if="!addTag">
                    <b-form-input
                      v-if="isEmpty(currentData)"
                      disabled
                      :value="empty"
                    ></b-form-input>
                    <b-form-input
                      v-else-if="currentData.cardData"
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.cardData.CardValidityPeriod"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
                      v-model="newData.CardValidityPeriod"
                    ></b-form-input>
                  </template>
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
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.ApprovalNumber"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
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
                      :disabled="!updateTag || paymentType == 'cash'"
                      v-model="currentData.installmentMonth"
                    ></b-form-input>
                  </template>
                  <template v-else>
                    <b-form-input
                      :disabled="paymentType == 'cash'"
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
                <b-btn class="ms-2" variant="danger" @click="addCancel()"
                  >취소</b-btn
                >
              </template>
              <!-- 수정일 때 -->
              <template v-else-if="updateTag == true">
                <b-btn variant="dark" class="ms-2" @click="updateData()"
                  >수정완료</b-btn
                >
                <b-btn class="ms-2" variant="danger" @click="updateCancel()"
                  >취소</b-btn
                >
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
    <Tabs @onRowSelected="onRowSelected" :salesItems="salesItems" />
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  name: "Sales",
  components: { Tabs },
  data() {
    return {
      salesItems: null,
      currentData: {},
      cachedData: {},
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
      paymentType: "card",
      addTag: false,
      updateTag: false,
      empty: "-",
      totalPricePredicted: null,
      totalPriceConfirm: null,
      managerPricePredicted: null,
      managerPriceConfirm: null,
    };
  },
  methods: {
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
            console.log(item);
            const data = this.$axios
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
            console.log(data);
          }
        });
    },
    // 신규등록 완료
    async addData() {
      await this.$axios
        .post("http://49.247.32.231:5000/api/saleData", this.newData)
        .then((res) => {
          console.log(res);
          window.alert("신규등록 성공");
          this.addTag = false;
          this.getSalesData();
        })
        .catch((error) => {
          if (error.response.status == "500") {
            window.alert("필수 값들을 모두 입력해주세요.", {
              title: "필수 값 미입력",
            });
          }
        });
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
    async getSalesData() {
      const data = await this.$axios.get(
        "http://49.247.32.231:5000/api/salesData"
      );
      // console.log(data.data);

      const datas = data.data;
      const dataList = [];

      const totalPList = [];
      const totalCList = [];

      this.totalPricePredicted = 0;
      this.totalPriceConfirm = 0;

      for (const i of datas) {
        dataList.push(i);
        totalPList.push(i.AmountOfPayment);
        if (i.Approved === true) {
          totalCList.push(i.AmountOfPayment);
        }
      }
      this.salesItems = dataList.reverse();
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
    async mySize() {
      const isToken = localStorage.getItem("token");
      const tokenData = JSON.parse(isToken);

      const data = await this.$axios.post(
        "http://49.247.32.231:5000/api/MySize",
        { userToken: tokenData }
      );
      console.log("mySize: ", data.data.Size);
      this.$store.dispatch("setRole", data.data.Size);
    },
  },
  mounted() {
    this.getSalesData();
    this.mySize();
  },
  computed: {},
};
</script>

<style></style>
