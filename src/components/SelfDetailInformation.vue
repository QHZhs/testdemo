<template>
<div class='self-detail'>
     <el-container>
      <el-header><i class="el-icon-arrow-left" @click="leave()"></i>微信昵称（真实姓名）血糖数据</el-header>
      <el-main>
          <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="血糖数据" name="first">
                <table>
                  <tr>
                    <th >
                      日期
                    </th>
                    <th>
                        时间
                    </th>
                    <th>
                      时段
                    </th>
                    <th>
                      血糖值（mmol/L）
                    </th>
                  </tr>
                  <tr  v-for="item in tableData" :key="item.date">
                      <td  v-text="item.date">                
                      </td>
                      <td  v-text="item.time">               
                      </td>
                      <td v-text="item.shiduan">             
                      </td>
                      <td  v-text="item.value">
                      </td>
                  </tr>
              </table>
              </el-tab-pane>
              <el-tab-pane label="血糖图谱" name="second">血糖图谱</el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="jumpback()">注册</el-button>
      </el-main>
    </el-container>
</div>
</template>

<script>

export default {
name:'self-detail',
data() {
return {
 activeName: 'first',
 tableData: [{
            date: '2016-05-02',
            time: '10:05',
            shiduan:'午餐前',
            value: '20.0'
          }, {
            date: '2016-05-04',
            time: '11:05',
           shiduan:'午餐前',
            value: '25.0'
          }, {
            date: '2016-05-01',
            time: '15:05',
            shiduan:'午餐前',
            value: '12.5'
          }, {
            date: '2016-05-03',
            time: '5:05',
            shiduan:'午餐前',
            value: '32.0'
          }]
}
},
computed: {},
watch: {},
methods: {
      leave(){
        this.$router.push("/");
      },
       handleClick(tab, event) {
        console.log(tab, event);
      },
      jumpback(){
        this.$router.push({path:'/loginInform'})
      }
},
created() {

},
mounted() {

},
}
</script>
<style scoped>
.el-header{
  height: 40px !important;
  padding: 10px;
  background-color: #485fea;
  color: #ffffff;
}
 .el-icon-arrow-left{
        float: left;
  }
  table{
      font-size: 14px;
      width:100%;
  }
  table tr th{
      background-color: #485fea;
       color: #ffffff;
  }
  table tr td{
      text-align: center;
  }
  .el-main{
      padding: 0px;
  }
</style>