<template>
    <section class="number-page">
        <div class="tbox1">
            <table class="NumTable1">
                <thead>
                    <tr>
                        <th class="thRadiusL">ID</th>
                        <th class="thRadiusR">PWD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text" style="width: 150px;"></td>
                        <td><input type="text" style="width: 174px;"></td>
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
            <div class="PMbtnBox">
                <input type="button" value="+"><br>
                <input type="button" value="-">
            </div>
        </div>
    <!-- <input type="button" value="+">
    <input type="button" value="-"> -->

    <div class="tbox2">
        <input type="button" value="파일 저장">
        <table class="NumTable2">
            <thead>
                <tr>
                    <th colspan="2" class="thRadiusL lookup">조회완료</th>
                    <th class="thRadiusR phoneNum">5</th>
                </tr>
                <tr> 
                    <th>번호</th>
                    <th>ID</th>
                    <th>전화번호</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>KingJeb</td>
                    <td>010-1234-5678</td>
                </tr>
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
        <table class="NumTable3">
            <input type="text">
            <input type="button" value="저장">
            <thead>
                <tr>
                    <th class="thRadiusL">조회예정</th>
                    <th class="thRadiusR">1,000</th>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>10</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>KingJeb</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>KingJeb</td>
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
