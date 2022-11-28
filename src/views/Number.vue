<template>
    <section class="number-page">
        <div class="tbox1">
            <table class="NumTable1">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>PWD</th>
                    </tr>
                    <tr>
                        <td><input type="text"></td>
                        <td><input type="text"></td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <td>KingJeb</td>
                        <td>123123</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    <!-- <input type="button" value="+">
    <input type="button" value="-"> -->


    <div class="tbox2">
        <input type="button" value="파일 저장">
        <table class="NumTable2">
            <thead>
                <tr>
                    <th colspan="2">조회완료</th>
                    <th colspan="2">5</th>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>ID</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
            </tbody>
        </table>
    </div>


    <div class="tbox3">    
        <input type="text">
        <button>저장</button>
        <table class="NumTable3">
            <tbody>
                <tr>
                    <th>조회예정</th>
                    <th>1,000</th>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>ID</th>
                </tr>
                <tr>
                    <td>5</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>KingJeb</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
export default {
  name: "Number",
  components: { Tabs },
}
</script>
