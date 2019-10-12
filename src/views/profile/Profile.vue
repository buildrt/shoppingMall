<template>
  <div id="profile">
    <div id="title">
      <el-button id="back" circle icon="el-icon-arrow-left"></el-button>
      <p>{{$store.state.titleStatus}}</p>
      <i id="more" @click="logOut" class="el-icon-more"></i>
    </div>
    <div id="info">
      <el-avatar id="avatar" :size="58" :src="circleUrl"></el-avatar>
      <div id="text">
        <p id="nickname" v-if="$store.state.isLogin">昵称：{{$store.state.loginClientName}}</p>
        <p id="username" v-if="$store.state.isLogin">用户名：{{$store.state.loginName}}</p>
        <div id="role" v-if="$store.state.isLogin">{{role}}</div>

        <router-link v-if="!$store.state.isLogin" to="/login" id="login_register" style="color: white; margin-top: 10px">登录/注册</router-link>
        <div style="color: white; margin-top: 10px" v-if="!$store.state.isLogin">
          <i class="el-icon-mobile-phone" style="font-size: 12px"></i>
          <span style="font-size: 12px">暂无绑定手机号</span>
        </div>
      </div>
      <div id="set">
        <i class="el-icon-s-tools"></i>
        <span>账号管理</span>
      </div>
    </div>
    <div id="menu">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <i class="el-icon-bank-card"></i>
            <p>待付款</p>
          </td>
          <td>
            <i class="el-icon-truck"></i>
            <p>待收货</p>
          </td>
          <td>
            <i class="el-icon-money"></i>
            <p>退换/售后</p>
          </td>
          <td style="border-right: 0">
            <i class="el-icon-notebook-2"></i>
            <p>全部订单</p>
          </td>
        </tr>
      </table>
    </div>
    <div id="content1">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td width="10%"><i class="el-icon-chat-line-square" style="color:#1E90FF;"></i></td>
          <td width="90%" style="border-bottom: 1px solid #EEE9E9"><span>我的消息</span></td>
        </tr>
        <tr>
          <td><i class="el-icon-shopping-bag-2" style="color: #FF3030"></i></td>
          <td style="border-bottom: 1px solid #EEE9E9"><span>积分商城</span></td>
        </tr>
        <tr>
          <td><i class="el-icon-wallet" style="color: #EE9A00"></i></td>
          <td><span>会员卡</span></td>
        </tr>
      </table>
    </div>
    <div id="content2">
      <table cellspacing="0" cellpadding="0">
        <tr>
          <td width="10%"><i class="el-icon-shopping-cart-1" style="color:#1E90FF;"></i></td>
          <td width="90%" style="border-bottom: 1px solid #EEE9E9"><span>我的购物车</span></td>
        </tr>
        <tr>
          <td><i class="el-icon-coin" style="color: #EE9A00"></i></td>
          <td><span>我的资产</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        role: '管理员'
      }
    },
    methods: {
      Login_Register() {

      },
      logOut() {
        this.$store.state.isLogin = false;
        this.$store.state.titleStatus = '未登录app';
        this.$store.state.loginClientName = '';
        this.$store.state.loginName = '';
        this.$router.push('/logout');
      }
    }
  }
</script>

<style scoped>
  #profile {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #e6e6e6;
    overflow: hidden;
    z-index: -111;
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
  #title #back {
    position: relative;
    float: left;
    left: 6%;
    top: 23%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
  }
  #title p {
    position: relative;
    top: 40%;
    left: 25%;
    width: 160px;
  }
  #title #more {
    position: relative;
    float: right;
    right: 6%;
    font-size: 20px;
  }
  #info {
    position: relative;
    top: 0;
    width: 100%;
    height: 25%;
    background-color: #ff8198;
  }
  #avatar {
    position: relative;
    top: 25%;
    left: 5%;
    float: left;
  }
  #text {
    position: relative;
    float: left;
    left: 12%;
    top: 25%;
  }
  #nickname {
    font-size: 15px;
    margin-bottom: 10px;
    color: white;
  }
  #username {
    font-size: 13px;
    margin-bottom: 5px;
    color: #EEE9E9;
  }
  #role {
    font-size: 13px;
    width: 80px;
    height: 20px;
    border: solid 1px rgba(0,0,0,0);
    background-color: rgba(0,0,0,0.5);
    border-radius: 30px;
    text-align: center;
    padding-top: 3px;
    color: #ffd04b;
  }
  #set {
    position: absolute;
    right: 10px;
    top: 10px;
    width: auto;
    height: auto;
  }
  #set span {
    font-size: 12px;
    margin-left: 2px;
    color: #4F4F4F;
  }
  #set i {
    font-size: 13px;
    color: #4F4F4F;
  }
  #menu {
    position: relative;
    left: 0;
    width: 100%;
    background-color: white;
    height: 80px;
  }
  #menu table {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  #menu table td i {
    font-size: 23px;
    color: #EE9A00;
    margin-bottom: 10px;
  }
  #menu table td p {
    font-size: 12px;
  }
  #menu table td{
    width: 25%;
    border-right: 1px solid #EEE9E9;
  }
  #content1 {
    position: relative;
    margin-top: 3%;
    left: 0;
    width: 100%;
    background-color: white;
    height: 100px;
  }
  #content1 table {
     width: 100%;
     height: 100%;
     text-align: left;
   }
  #content1 table tr{
    height: 33%;
  }
  #content1 table td i, #content2 table td i{
    font-size: 20px;
    margin-left: 10px;
    margin-top: 3px;
  }
  #content1 table td span, #content2 table td span {
    font-size: 10px;
    margin-left: 6px;
  }
  #content2 {
    position: relative;
    margin-top: 3%;
    left: 0;
    width: 100%;
    background-color: white;
    height: 100%;
  }
  #content2 table {
    width: 100%;
    height: 11%;
    text-align: left;
  }
  #content2 table tr {
    height: 50%;
  }
</style>