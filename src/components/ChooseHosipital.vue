<!--  -->
<template>
<div class='choose-hospital'>
    <el-container>
        <el-header>医院选择</el-header>
        <el-main>
            <div class="block">
                <span class="demonstration">地址选择：</span>
                <el-cascader  id="selOpt"
                    v-model="selectedOptions"
                    :options="options"
                    @change="handleChange" clearable></el-cascader>
            </div>
            <div class="block" style="margin-bottom:30px">
                <span class="demonstration">医院选择：</span>
                <el-input
                        placeholder="请输入内容"
                        v-model="hospital"
                        clearable
                >
                </el-input>
            </div>
            <el-button type="primary" @click="jumpback(hospital)">确定</el-button>
            <el-button type="info" @click="jumpback()">返回</el-button>
        </el-main>
    </el-container>
</div>
</template>

<script>
import {regionData,CodeToText} from 'element-china-area-data'
export default {
name:'choose-hospital',
data() {
return {
    options: regionData,
    selectedOptions: [],
    addtions:{},
    hospital:'',
}
},
computed: {},
watch: {},
methods: {
 handleChange (value) {
      //我们选择地址后，selectedOptions 会保存对应的区域码，例如北京的区域码为'110000'
      //我们要取出区域码对应的汉字，就需要用CodeToText(区域码)进行输出
        this.addtions.selectedOptions = value
        var name = ''
        this.selectedOptions.map(item => name += CodeToText[item] + '/')
        this.addtions.names = name
        console.log(this.addtions.names)
        console.log(this.addtions)
        console.log(this.selectedOptions)
      },
 jumpback(){
       this.$router.push({
           path:'/loginInform',
           query:{
               name:this.hospital
           }
           })
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
  background-color: #2f45cc;
  color: #ffffff;
}
.block{
    float: left;
    margin: 10px auto;
}
.el-input{
    width: 217px;
}
</style>