<template>
  <div class="login">
    <div class="container">
      <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      class="login-form"
      >
        <el-form-item prop='userName'>
          <el-input v-model.trim="loginForm.userName" placeholder="账号" clearable ></el-input>
        </el-form-item>
        <el-form-item prop='password'>
          <el-input v-model.trim="loginForm.password" placeholder="密码" clearable ></el-input>
        </el-form-item>
        <el-form-item props="userType">
          <el-radio-group v-model="loginForm.userType">
            <el-radio label="registrar">教务员</el-radio>
            <el-radio label="teacher">老师</el-radio>
            <el-radio label="student">学生</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return{
      loginForm:{
        userName:'',
        password:'',
        userType:'registrar'
      },
      rules:{
        userName:[
          {required:true,message:'请输入账号',trigger:'blur'},
        ],
        password:[
          {required:true,message:'请输入账号',trigger:'blur'},
        ]
      }
    }
  },
  methods:{
    submitForm(formName){
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        console.log('111111*********')
        if (valid) {
          alert('submit!')
        } else {
          alert('error!')
        }
      });
    }
  }
}
</script>
<style scoped>
.login{
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom right,#fe9,#369);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  width: 350px;
}
.login-btn{
  width: 100%;
  border-color: #3075BC;
  background: #3075BC;
}
</style>