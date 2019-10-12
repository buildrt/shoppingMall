<template>
  <div id="register">
    <div id="title">
      <el-button id="regBack" @click="BackToLogin" circle icon="el-icon-arrow-left"></el-button>
      <p>快速注册</p>
    </div>
    <el-form :model="regForm" status-icon :rules="regRules" ref="regForm" label-width="100px" label-position="left">
      <el-form-item label="用户名：" prop="clientName">
        <el-input v-model.trim="regForm.clientName"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passWord">
        <el-input v-model.trim="regForm.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPass">
        <el-input v-model.trim="regForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：" prop="name">
        <el-input v-model.trim="regForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码：" prop="phoneNumber">
        <el-input v-model.trim="regForm.phoneNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button round type="primary" @click="submitForm('regForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {register} from "../../network/register";

  export default {
    name: "Register",
    methods: {
      BackToLogin() {
        this.$router.replace('/login');
        console.log('BackToLogin');
      },
      submitForm(forName){
        this.$refs[forName].validate((valid) => {
          if (valid) {
            console.log(valid);
            this.clientName = valid.clientName;
            this.name = valid.name;
            this.passWord = valid.passWord;
            this.phoneNumber = valid.phoneNumber;
            register(this.clientName,this.name,this.passWord,this.phoneNumber).then(res => {
              if (res === 1) {
                alert("注册成功");
                this.$router.push('/login');
              }else {
                alert("注册失败");
              }
            }).catch(err => {
              console.log("数据库连接失败");
              console.log("注册失败");
            })
          }
        })
      }
    },
    data() {
      let validatePass = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 12) {
          callback(new Error('请输入6 - 12位的密码'));
        } else {
          if (this.regForm.checkPass !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regForm: {
          clientName: '',
          passWord: '',
          checkPass: '',
          name: '',
          phoneNumber: ''
        },
        regRules: {
          clientName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
            { pattern: /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z]{1,}).*$/, message: '密码弱', trigger: 'blur'}
          ],
          checkPass: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
          ],
          phoneNumber: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'}
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