<template>
  <div class="order-page">
    <!-- 주문관리 -->
    <b-row class="justify-content-between align-items-center mb-3">
      <b-col>
        <h1 class="text-25 m-0">주문관리</h1>
      </b-col>
    </b-row>
    <div style="max-width: 1500px" class="mb-4">
      <b-row>
        <!-- 승인 설정 -->
        <b-col>
          <b-table
            small
            head-variant="dark"
            bordered
            selectable
            select-mode="single"
            :sticky-header="true"
            :items="orderItems"
            :fields="orderFields"
            @row-selected="onOrderSelected"
            selected-variant="white"
            class="dataTable orderTable mb-3"
            ref="orderTable"
            show-empty
            emptyText="데이터 정보가 없습니다."
          >
            <template #cell(selected)="{ rowSelected }">
              <div class="text-center">
                <font-awesome-icon
                  v-if="rowSelected"
                  class="text-primary"
                  icon="fa-solid fa-check"
                />
              </div>
            </template>
            <template #cell(ContractNumber)="row">
              {{ dateFormat1(row.item.ContractNumber) }}
            </template>

            <template #cell(Design)="row">
              <div class="text-center">
                <b-form-checkbox
                  switch
                  v-model="selectData.Design"
                ></b-form-checkbox>
              </div>
            </template>

            <template #cell(Traffic)="row">
              <b-form-group class="text-center">
                <b-form-checkbox
                  switch
                  v-model="selectData.Traffic"
                ></b-form-checkbox>
              </b-form-group>
            </template>

            <template #cell(EtcProduct)="row">
              <b-form-group class="text-center">
                <b-form-checkbox
                  switch
                  v-model="selectData.EtcProduct"
                ></b-form-checkbox>
              </b-form-group>
            </template>
          </b-table>
          <b-row class="justify-content-between align-items-center">
            <b-col class="text-end">
              <b-btn variant="dark" @click="approvedData()">승인</b-btn>
            </b-col>
          </b-row>
              <!-- {{selectData}} -->
        </b-col>
        <!-- 데이터 수정 -->
        <b-col>
          <b-table-simple small bordered fixed class="currentTable">
            <b-tbody>
              <b-tr>
                <b-th>계약번호</b-th>
                <b-th>담당자</b-th>
                <b-th>상호명</b-th>
                <b-th>대표자</b-th>
                <b-th>계약상품</b-th>
                <b-th>결제금액</b-th>
              </b-tr>
              <b-tr>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ dateFormat1(currentData.ContractNumber)}}
                  </template>
                </b-td>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ dateFormat1(currentData.manager)}}
                  </template>
                </b-td>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ dateFormat1(currentData.businessName)}}
                  </template>
                </b-td>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ dateFormat1(currentData.owner)}}
                  </template>
                </b-td>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ dateFormat1(currentData.contractProduct)}}
                  </template>
                </b-td>
                <b-td>
                  <template v-if="isEmpty(currentData)">
                    {{empty}}
                  </template>
                  <template v-else>
                    {{ numberToString(currentData.AmountOfPayment)}}
                  </template>
                </b-td>
                
              </b-tr>
                <!-- <b-td>
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
                </b-td> -->
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
    </div>
    <Tabs @onRowSelected="onRowSelected" :orderItems="orderItems" :salesItems="salesItems"/>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
export default {
  name: "Order",
  components: {Tabs},
  data() {
    return {
      orderFields: [
        {
          key: "selected",
          label: "선택",
          thClass: "table-secondary",
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
          key: "owner",
          label: "대표자",
          thClass: "table-secondary",
        },
        {
          key: "contractProduct",
          label: "계약상품",
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
          key: "EtcProduct",
          label: "기타상품",
          thClass: "table-secondary",
        },
      ],
      salesItems: null,
      orderItems: null,
      currentData: {},
      selectData: {},
      updateTag: false,
      empty: "-"
    };
  },
  methods: {
    // 승인 완료
    async approvedData() {
      let form = {
        Design: this.selectData.Design,
        Traffic: this.selectData.Traffic,
        EtcProduct: this.selectData.EtcProduct,
        id: this.selectData._id,
        Term: this.selectData.Term,
        contractProduct: this.selectData.contractProduct,
        blogId: this.selectData.blogId
      }
      const data = await this.$axios.post("http://49.247.32.231:5000/api/saleAproveData", form);
      console.log(data);
      // window.alert("승인 성공");
      this.getSalesData();
    },
    selectAllRows() {
      this.$refs.orderTable.selectAllRows();
    },
    clearSelected() {
      this.$refs.orderTable.clearSelected();
    },
    onRowSelected(items) {
      items = items[0];
      this.currentData = { ...items };
    },
    onOrderSelected(items) {
      items = items[0];
      this.selectData = { ...items };
    },
    async getSalesData() {
      const data = await this.$axios.get("http://49.247.32.231:5000/api/salesData");
      console.log(data.data);

      const datas = data.data;
      const dataList = [];
      const orderList = [];
      for (const i of datas) {
        if (i.Approved === false) {
          orderList.push(i);
        } else {
          dataList.push(i);
        }
      }
      this.salesItems = dataList.reverse();
      this.orderItems = orderList.reverse();

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
