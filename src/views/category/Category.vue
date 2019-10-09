<template>
  <div id="category">
    <div id="title">
      <el-button id="back" @click="BackToHome" circle icon="el-icon-arrow-left"></el-button>
      <p>水果生鲜</p>
      <i id="more" class="el-icon-more"></i>
    </div>
    <div id="menu">
      <category-bar></category-bar>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import CategoryBar from '../../components/content/categoryBar/CategoryBar'
  export default {
    name: "Category",
    components: {
      CategoryBar
    },
    methods: {
      BackToHome() {
        this.$router.replace('/home');
      }
    }
  }
</script>

<style scoped>
  #category {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow-y: hidden;
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
  #menu {
    position: relative;
    top: 0;
    height: 100%;
    width: 25%;
    background-color: #fff;
  }
  #content {
    position: absolute;
    top: 49px;
    left: 25%;
    height: 100%;
    width: 75%;
  }
</style>