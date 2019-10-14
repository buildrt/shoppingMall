<template>
  <div id="retailerSearch">
    <el-form :model="retailerForm" :rules="retailerRules" ref="retailerForm" label-position="left">
      <el-form-item label="姓名" prop="name">
        <el-input name="name" id="name" v-model.trim="retailerForm.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" id="search" @click="searchForm('retailerForm')">搜索</el-button>
        <el-button id="reset" @click="resetForm('retailerForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" id="retailerData" @click="ToRetailerInfo">查看所有</el-button>
  </div>
</template>

<script>
  import {retailerSearch} from '../../../network/retailer/search'
  export default {
    name: "RetailerSearch",
    methods: {
      searchForm(forName) {
        this.$refs[forName].validate(valid => {
          if (valid) {
            this.name = document.getElementById('name').value;
            retailerSearch(this.name).then(res => {
              console.log(res);
              let retailerData = res;
              console.log(this.retailerData);
              let data = [];
              let len = retailerData.length;
              for (let i=0; i< len; i++){
                let obj = {};
                obj.name = retailerData[i].name;
                obj.phonenumber = retailerData[i].phonenumber;
                obj.address = retailerData[i].address;
                if (retailerData[i].state === 1){
                  obj.state = "启用";
                } else {
                  obj.state = "未启用";
                }
                obj.createtime = retailerData[i].createtime;
                data[i] = obj;
              }
              this.$store.state.retailerSearchInfo = [];
              this.$store.state.retailerSearchInfo = data;
              this.$store.state.retailerIsFull = false;
              this.$router.push('/retailerInfo');
            })
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ToRetailerInfo() {
        this.$store.state.retailerIsFull = true;
        this.$router.push('/retailerInfo');
      }
    },
    data() {
      return {
        retailerForm: {
          name: '',
        },
        retailerRules: {
          name: [

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