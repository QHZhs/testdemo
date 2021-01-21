<template>
  <div class="hello">
    <el-container>
      <el-header>患者列表</el-header>
      <el-main>
       <el-row>
         <el-col id="col-1">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col>
              <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-button type="primary" style="margin-left:5px;" @click="checkBoxShow()" v-if="!isShow">多选</el-button>        
          <el-button type="primary" style="margin-left:5px;" @click="goTo()" v-if="isShow">处理</el-button>    
          <el-button type="primary" style="margin-left:5px;" @click="isShow=false" v-if="isShow">取消</el-button>  
       </el-row><br>     
       <el-input
          placeholder="搜索患者姓名、昵称、手机号"
          prefix-icon="el-icon-search"
          v-model="input2">
       </el-input>
        <table  v-for="item in list" :key="item.phone" @click="selfData()">
          <tr>
             <td rowspan="2" v-show="isShow"  @click.stop="selfData2()"  style=' width: 10%;'>
               <input type="checkbox">
            </td>
            <td id="firstTd">
               {{item.name}}
            </td>
             <td v-text="item.gender==='1'?'男':item.gender==='0'?'女':'不详'">
            </td>
             <td>
              {{item.phone}}
            </td>
             <td>
               type
            </td>
          </tr>
          <tr>
              <td style="text-align:left;text-align: center;">
                最新血糖：{{item.measureTime}}
              </td>
              <td>
                time
              </td>
              <td>
                {{item.value}} mmol/L
              </td>
              <td>
                type
              </td>
          </tr>
        </table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      code:'',
      list:[],
      isShow:false,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        input2: '',
         tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  created(){
    this.bbb();
    this.getData();
  },
  methods:{
    selfData(){
      this.$router.push('/selfDetailInformation');
    },
     selfData2(){
    },
    checkBoxShow(){
      this.isShow=true;
    },
    aaaa(name){
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
       var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
       console.log(r);
       if (r != null) return unescape(r[2]); return null; // 返回参数值
    },
    bbb(){
      var code = this.aaaa("code");
      this.code = code;
      console.log(code);
    },
      getData(){
              //请求数据 
              var api='/api/services/RestServices/yundihealth/userManage/getUserByCondition?studioId=000500380001000100010001'; 
             this.$axios.get(api).then((response)=>{
                    console.log(response);
                    //注意this指向
                    this.list=response.data.sybData; 
              },function(err){
                    console.log(err);
              })
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
  height: 40px !important;
  padding: 10px;
  background-color: #2f45cc;
  color: #ffffff;
}
 .el-row {
    display: inline-flex;
  }
  .el-col {
    border-radius: 4px;
  }
  #nameInfo{
     background-color: #1381ea;
     color: #ffffff;
  }
  #selectPosi{
    display: inline-flex
  }
  table{
    background-color: #e2f5ff;
    margin-bottom: 10px;
  }
  #firstTd{
    background-color: #1381ea ;
    color: #ffffff;
  }
  table tr{
    height: 50px;
  }
  table tr td{
    padding: 5px;
    width: 25%;
    font-size: 12px;
  }
  .el-input{
    margin: 10px 0px 10px 0px;
  }
  #col-1{
    margin-right: 5px;
  }
  .el-main{
    padding: 5px !important;
  }
</style>
