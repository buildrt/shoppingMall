<template>
  <div id="contractForm">
    <el-form :model="insertForm">
      <el-form-item id="barcodeItem" label="合同号" prop="barcode">
        <el-input name="barcode" id="barcode" v-model.trim="insertForm.barcode"></el-input>
      </el-form-item>
      <el-form-item id="typeItem" label="运输类型" prop="type">
        <el-input name="type" id="type" v-model.trim="insertForm.type"></el-input>
      </el-form-item>
      <el-form-item id="retaileridItem" label="零售商ID" prop="retailerid">
        <el-input name="retailerid" id="retailerid" v-model.trim="insertForm.retailerid"></el-input>
      </el-form-item>
      <el-form-item id="createtimeItem" label="创建时间" prop="createtime">
        <el-input name="createtime" id="createtime" v-model.trim="insertForm.createtime"></el-input>
      </el-form-item>
      <el-form-item id="subItem">
        <el-button type="primary" id="search" @click="Confirm">确定</el-button>
        <el-button id="reset" @click="">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {insert} from "../../../network/contract/insert";

  export default {
    name: "ContractForm",
    methods: {
      Confirm() {
        this.barcode = document.getElementById('barcode').value;
        this.type = document.getElementById('type').value;
        this.retailerid = document.getElementById('retailerid').value;
        this.createtime = document.getElementById('createtime').value;
        console.log(this.barcode, this.type, this.retailerid, this.createtime);
        insert(this.barcode, this.type, this.retailerid, this.createtime).then(res => {
          if (res === 1) {
            alert("修改成功");
            this.$router.go(0);
          }else {
            alert("修改失败");
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    data() {
      return {
        insertForm: {
          barcode: '',
          type: '',
          retailerid: '',
          createtime: '',
        }
      }
    }
  }
</script>

<style scoped>
  #contractForm {
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
    right: 20%;
  }
</style>