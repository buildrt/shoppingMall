<template>
  <div id="register">
    <div id="title">
      <el-button id="regBack" @click="BackToLogin" circle icon="el-icon-arrow-left"></el-button>
      <p>快速注册</p>
    </div>
    <el-form :model="regForm" status-icon :rules="regRules" ref="regForm" label-width="100px" label-position="left">
      <el-form-item label="用户名：" prop="nickname">
        <el-input v-model.trim="regForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model.trim="regForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input v-model.trim="regForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="name">
        <el-input v-model.trim="regForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码：" prop="phone">
        <el-input v-model.trim="regForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button round type="primary" disabled>注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Register",
    methods: {
      BackToLogin() {
        this.$router.replace('/login');
        console.log('BackToLogin');
      },
    },
    data() {
      return {
        regForm: {
          nickname: '',
          password: '',
          checkPass: '',
          name: '',
          phone: ''
        },
        regRules: {
          nickname: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          checkPass: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
          ],
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
          ],
        }
      }
    }
  }
</script>

<style scoped>
  #register {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  #title {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 49px;
    text-align: left;
  }
  #title #regBack {
    position: relative;
    float: left;
    left: 6%;
    top: 35%;
    font-size: 20px;
    width: 40px;
    height: 40px;
    border: none;
  }
  #title p {
    position: relative;
    top: 60%;
    left: 30%;
    width: 200px;
  }
  .el-form {
    position: absolute;
    top: 20%;
    left: 10%;
    right: 10%;
  }
  .el-button {
    position: absolute;
    width: 200px;
    height: 40px;
    right: 20px;
    font-size: 15px;
    text-align: center;
  }
</style>