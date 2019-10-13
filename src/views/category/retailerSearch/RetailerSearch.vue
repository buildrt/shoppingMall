<template>
  <div id="retailerSearch">
    <el-form :model="retailerForm" :rules="retailerRules" ref="retailerForm" label-position="left">
      <el-form-item label="姓名" prop="name">
        <el-input name="name" v-model.trim="retailerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phoneNumber">
        <el-input name="phoneNumber" v-model.trim="retailerForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input name="address" v-model.trim="retailerForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" id="search" @click="">搜索</el-button>
        <el-button id="reset" @click="resetForm('retailerForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" id="retailerData" @click="ToRetailerInfo">查看所有</el-button>
  </div>
</template>

<script>
  export default {
    name: "RetailerSearch",
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ToRetailerInfo() {
        this.$router.push('/retailerInfo');
      }
    },
    data() {
      return {
        retailerForm: {
          name: '',
          phoneNumber: '',
          address: '',
          state: ''
        },
        retailerRules: {
          name: [

          ],
          phoneNumber: [

          ],
          address: [

          ],
          state: [

          ]
        }
      }
    }
  }
</script>

<style scoped>
  #retailerSearch {
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
  #retailerData {
    position: absolute;
    width: auto;
    top: 40%;
    left: 8%;
  }
</style>