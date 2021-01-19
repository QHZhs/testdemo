<!--  -->
<template>
<div class='login-inform'>
   <el-container>
        <el-header>信息填写</el-header>
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="所在医院" prop="hospitalName">
                    <el-input
                        placeholder="请选择"
                        v-model="ruleForm.hospitalName"
                        clearable readonly @click.native="jumpToChoose()">
                    </el-input>
                </el-form-item>
                <el-form-item label="所在科室" prop="department">
                    <el-select v-model="ruleForm.department" placeholder="请选择">
                        <el-option label="内分泌科" value="内分泌科"></el-option>
                        <el-option label="眼科" value="眼科"></el-option>
                    <el-option label="神经外科" value="神经外科"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="职位" prop="position">
                    <el-select v-model="ruleForm.position" placeholder="请选择">
                        <el-option label="科主任" value="科主任"></el-option>
                        <el-option label="科医生" value="科医生"></el-option>
                    </el-select>
                </el-form-item>
                 <el-form-item label="真实姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                 <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                 <el-form-item label="验证码" prop="testCode" v-if="yanzhenma">
                    <el-input v-model="ruleForm.testCode"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" id='sure'>提交</el-button><br><br><br>
                <el-tag>提交审核之后，会有工作人员与您联系。请保持手机畅通。</el-tag>
            </el-form>
        </el-main>
   </el-container> 
</div>
</template>

<script>

export default {
name:'login-inform',
data() {
return {
        yanzhenma:false,
        ruleForm: {
          hospitalName:'',
          name: '',
          department: '',
          phone:'',
          testCode:'',
          position:'',
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
          ],
          department: [
            { required: true, message: '请选择所属部门', trigger: 'change' }
          ],
          phone: [
            { required: true, min: 11, max: 11,message: '请输入手机号码', trigger: 'change' }
          ],
        }
      };
   },
    computed: {},
    watch: {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                var params2={
                        name:this.ruleForm.name,
                        hospital:this.ruleForm.hospitalName,
                        department:this.ruleForm.department,
                        position:this.ruleForm.position,
                        userId:"1231",
                        phone:this.ruleForm.phone,
                    }
                var params1 = JSON.stringify(params2)
            if (valid) {
                this.$http.post('http://192.168.1.56/services/RestServices/yundihealth/staffManage/saveWXStaffExamine',params1,{emulateJSON: true}).then((res)=>{
                      if(res.sybStatus=="000"){
                               console.log("提交成功！")
                      }
                });
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        aa() {
             this.ruleForm.hospitalName = this.$route.query.name;
        },
        jumpToChoose() {
            this.$router.push({
                path:'/ChooseHosipital'
            })
            console.log("laile")
        }
    },
    created() { 
    },
    mounted() {
        this.aa(); 
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
.el-main {
    margin: 20px 20px 10px 0px;
}
#sure{
    margin-left: 25px;
}
.el-tag{
        padding: 0 2px !important;
}
</style>