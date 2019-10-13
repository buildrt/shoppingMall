<template>
  <div id="homepage" @click="$store.commit('Please')">
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
      <table cellpadding="0" cellspacing="0" border="0">
        <tr style="height: 30%">
          <td width="23%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url1"></el-avatar>
          </td>
          <td width="23%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url2"></el-avatar>
          </td>
          <td width="23%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url3"></el-avatar>
          </td>
          <td width="23%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url4"></el-avatar>
          </td>
        </tr>
        <tr style="height: 20%">
          <td style="padding-bottom: 5px"><span>热带水果</span></td>
          <td style="padding-bottom: 5px"><span>苹果梨桃</span></td>
          <td style="padding-bottom: 5px"><span>橙橘柑柚</span></td>
          <td style="padding-bottom: 5px"><span>石榴</span></td>
        </tr>
        <tr style="height: 30%">
          <td width="25%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url5"></el-avatar>
          </td>
          <td width="25%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url7"></el-avatar>
          </td>
          <td width="25%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url8"></el-avatar>
          </td>
          <td width="25%" style="padding-top: 10px">
            <el-avatar shape="circle" size="50" fit="fill" :src="menuImg.url6"></el-avatar>
          </td>
        </tr>
        <tr style="height: 20%">
          <td style="padding-bottom: 5px"><span>柚子</span></td>
          <td style="padding-bottom: 5px"><span>浆果类</span></td>
          <td style="padding-bottom: 5px"><span>水果礼盒</span></td>
          <td style="padding-bottom: 5px"><span>更多水果</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import img1 from '../../assets/img/home/carousel/carouselImg01.png'
  import img2 from '../../assets/img/home/carousel/carouselImg02.png'
  import menu1 from '../../assets/img/home/menu/menu1.png'
  import menu2 from '../../assets/img/home/menu/menu2.png'
  import menu3 from '../../assets/img/home/menu/menu3.png'
  import menu4 from '../../assets/img/home/menu/menu4.png'
  import menu5 from '../../assets/img/home/menu/menu5.png'
  import menu6 from '../../assets/img/home/menu/menu6.png'
  import menu7 from '../../assets/img/home/menu/menu7.png'
  import menu8 from '../../assets/img/home/menu/menu8.png'
  export default {
    name: "Home",
    data() {
      return {
        titleImg: [
          {img: img1},
          {img: img2},
          {img: img1},
          {img: img2}
        ],
        menuImg: {
          url1: menu1,
          url2: menu2,
          url3: menu3,
          url4: menu4,
          url5: menu5,
          url6: menu6,
          url7: menu7,
          url8: menu8,
        }
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
    margin-left: 4%;
    width: 92%;
    height: 60%;
  }
  #menu table td {
    text-align: center;
  }
  #menu table td span {
    font-size: 12px;
    color: black;
  }
</style>