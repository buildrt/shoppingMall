<template>
  <div id="homepage">
    <div id="title">
      <el-button id="back" circle icon="el-icon-arrow-left"></el-button>
      <p>水果生鲜</p>
      <i id="more" class="el-icon-more"></i>
    </div>
    <div id="info">
      <el-button id="content" icon="el-icon-s-operation"></el-button>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <el-carousel :interval="2000" loop height="100%">
      <el-carousel-item v-for="item in titleImg" :key="item">
        <el-image :src="item.img"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div id="menu">
      <table cellpadding="0" cellspacing="0" border="1">
        <tr>
          <td width="25%"></td>
          <td width="25%"></td>
          <td width="25%"></td>
          <td width="25%"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import img1 from '../../assets/img/category/carousel/carouselImg01.png'
  import img2 from '../../assets/img/category/carousel/carouselImg02.png'
  export default {
    name: "Home",
    data() {
      return {
        titleImg: [
          {img: img1},
          {img: img2},
          {img: img1},
          {img: img2}
        ]
      }
    }
  }
</script>

<style scoped>
  #homepage {
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
    height: 30%;
    background-color: #fff;
    border-top: solid 1px #e6e6e6;
  }
  #content {
    position: relative;
    font-size: 20px;
    top: 12%;
    border: none;
    left: 2%;
  }
  #info .el-input {
    position: relative;
    top: 10%;
    width: 70%;
    left: 5%;
  }
  .el-carousel {
    position: absolute;
    top: 20%;
    width: 100%;
    left: 0;
    right: 0;
    height: 23%;
  }
  #menu {
    position: absolute;
    top: 42%;
    height: 50%;
    width: 100%;
    background-color: #fff;
  }
  #menu table {
    position: relative;
    top: 4%;
    left: 0;
    width: 100%;
    height: 60%;
  }
  #menu table tr {
    height: 50%;
  }
</style>