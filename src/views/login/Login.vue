<template>
  <div id="login">
    <div id="title">
      <el-button id="loginBack" @click="Back" circle icon="el-icon-arrow-left"></el-button>
      <p>快速登录</p>
    </div>

    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="80px" label-position="left">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model.trim="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model.trim="loginForm.password" show-password autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button round type="primary" disabled @click="LoginSub">登录</el-button>
      </el-form-item>
    </el-form>
    <router-link id="regLink" to="/register">快速注册</router-link>

    <div id="more">
      <p id="other">其他登录方式</p>
      <i class="el-icon-position" style="font-size: 35px; color: aqua"></i>
      <p id="agree">相遇即是有缘</p>
    </div>
  </div>

</template>

<script>

  export default {
    name: "Login",
    methods: {
      LoginSub() {

      },
      Back() {
        this.$router.replace('/profile');
        console.log('back');
      }
    },
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          uname: 'Amazon',
          pwd: '123456'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  #login {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
  }
  #regLink {
    position: absolute;
    top: 48%;
    right: 10%;
    font-size: 14px;
    color: #bfbfbf;
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
  #title #loginBack {
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
  #more {
    position: absolute;
    top: 65%;
    width: 100%;
    height: 30%;
    text-align: center;
  }
  #other {
    position: relative;
    font-size: 12px;
    color: #bfbfbf;
  }
  #agree {
    position: relative;
    top: 70%;
    font-size: 14px;
    color: #bfbfbf;
  }
  i {
    position: absolute;
    top: 35%;
    left: 43%;
  }
</style>