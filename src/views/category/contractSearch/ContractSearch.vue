<template>
  <div id="contractSearch">
    <el-form label-position="left">
      <el-form-item label="合同号" prop="name">
        <el-input name="name" ></el-input>
      </el-form-item>
      <el-form-item label="运输" prop="phoneNumber">
        <el-input name="phoneNumber" ></el-input>
      </el-form-item>
      <el-form-item label="零售商" prop="address">
        <el-input name="address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" id="search" @click="">搜索</el-button>
        <el-button id="reset" @click="">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" id="contractData" @click="ToContractInfo">查看所有</el-button>
  </div>
</template>

<script>
  export default {
    name: "ContractSearch",
    methods: {
      ToContractInfo() {
        this.$router.push('/contractInfo');
      }
    }
  }
</script>

<style scoped>
  #contractSearch {
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 1px solid #efefef;
  }
  .el-form {
    position: absolute;
    top: 5%;
    left: 10%;
    right: 10%;
  }
  .el-input {
    width: 70%;
  }
  .el-button {
    width: 60px;
    text-align: center;
  }
  #search {
    position: absolute;
    left: 10%;
  }
  #reset {
    position: absolute;
    right: 10%;
  }
  #contractData {
    position: absolute;
    bottom: 50%;
    width: auto;
    left: 10%;
  }
</style>