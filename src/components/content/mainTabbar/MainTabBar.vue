<template>
  <el-menu
    :default-active="this.$route.path"
    class="mainTabBar"
    text-color="#999999"
    active-text-color="#ffd04b"
    router
    mode="horizontal">
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <p>首页</p>
    </el-menu-item>
    <el-menu-item @click="JumpToCategory">
      <i class="el-icon-menu"></i>
      <p>分类</p>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-shopping-cart-1"></i>
      <p>购物车</p>
    </el-menu-item>
    <el-menu-item index="/profile">
      <i class="el-icon-s-custom"></i>
      <p>我的</p>
    </el-menu-item>
  </el-menu>
</template>

<script>

  export default {
    name: "MainTabBar",
    methods: {
      JumpToCategory() {
        if (this.$store.state.isLogin === false) {
          this.$router.push('/category');
        }else {
          alert("请登录后再查看");
          this.$router.push('/login');
        }
      }
    }
  }
</script>

<style scoped>
  .el-menu {
    background-color: #fff;
    color: #333;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
    height: 49px;
    box-shadow: 0 -5px 3px rgba(150,150,150,.2);
    overflow: hidden;
  }
  .el-menu-item {
    position: relative;
    float: left;
    width: 25%;
  }
  i {
    position: relative;
    top: -15px;
  }
  p {
    position: relative;
    top: -53px;
    font-size: 14px;
  }
</style>