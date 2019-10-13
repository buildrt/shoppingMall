<template>
  <div id="retailerForm">
    <el-form :model="addForm">
      <el-form-item label="姓名" prop="name">
        <el-input name="name" id="name" v-model.trim="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input name="address" id="address" v-model.trim="addForm.address"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="phonenumber">
        <el-input name="phonenumber" id="phonenumber" v-model.trim="addForm.phonenumber"></el-input>
      </el-form-item>
      <el-form-item id="subItem">
        <el-button type="primary" id="search" @click="Confirm">确定</el-button>
        <el-button id="reset" @click="">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {add} from "../../../network/retailer/add";

  export default {
    name: "RetailerForm",
    methods: {
      Confirm() {
        this.name = document.getElementById('name').value;
        this.address = document.getElementById('address').value;
        this.phonenumber = document.getElementById('phonenumber').value;
        console.log(this.name, this.address, this.phonenumber);
        add(this.name,this.phonenumber,this.address).then(res => {
          if (res === 1) {
            console.log("添加成功");
          }else {
            console.log("添加失败");
          }
        })
      }
    },
    data() {
      return{
        addForm: {
          name: '',
          address: '',
          phonenumber: '',
          state: ''
        }
      }
    }
  }
</script>

<style scoped>
  #retailerForm {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .el-form {
    position: relative;
    top: 0;
    left: 10%;
    width: 100%;
    height: 100%;
  }
  .el-input {
    width: 180px;
  }
  #subItem {
    position: absolute;
    top: 60%;
    right: 30%;
  }
</style>