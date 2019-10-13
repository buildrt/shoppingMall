<template>
  <el-menu
    background-color="#fff"
    :default-active="this.$route.path"
    router
    active-text-color="#FF3030">
    <el-menu-item index="1">
      <div>
        <span>推荐分类</span>
      </div>
    </el-menu-item>
    <el-menu-item index="/category/fruitSearch">
      <div>
        <span>货物管理</span>
      </div>
    </el-menu-item>
    <el-menu-item index="/category/retailerSearch">
      <div>
        <span>商家管理</span>
      </div>
    </el-menu-item>
    <el-menu-item index="/category/contractSearch">
      <div>
        <span>购销合同</span>
      </div>
    </el-menu-item>
    <el-menu-item index="5">
      <div>
        <span>价格区间</span>
      </div>
    </el-menu-item>
    <el-menu-item index="6">
      <div>
        <span>推荐分类</span>
      </div>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "CategoryBar"
  }
</script>

<style scoped>
  .el-menu {
    position: relative;
    top: 0;
    height: 100%;
  }
  .el-menu .el-menu-item {
    position: relative;
    height: 8%;
    width: 100%;
    background-color: #fff;
    border: 1px #efefef solid;
  }
  .el-menu .el-menu-item div{
    position: absolute;
    font-size: 15px;
    text-align: center;
    width: 100%;
    height: 100%;
    left: 0;
  }
  .el-menu .el-menu-item div span {
    position: relative;
    bottom: 10%;
  }
</style>