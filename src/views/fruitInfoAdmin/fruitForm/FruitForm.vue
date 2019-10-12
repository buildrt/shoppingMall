<template>
  <div id="fruitForm">
    <el-form id="editForm">
      <el-form-item id="nameItem" :model="editForm" label="名称" prop="fruitName">
        <el-input name="fruitName" id="name" v-model.trim="editForm.fruitName"></el-input>
      </el-form-item>
      <el-form-item id="locaItem" label="产地" prop="locality">
        <el-input name="locality" id="local" v-model.trim="editForm.locality"></el-input>
      </el-form-item>
      <el-form-item id="priceItem" label="价格" prop="price">
        <el-col :span="16">
          <el-input name="price" id="price" v-model.trim="editForm.price"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item id="subItem">
        <el-button type="primary" id="search" @click="Confirm">确定</el-button>
        <el-button id="reset" @click="">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {edit} from "../../../network/fruit/edit";
  export default {
    name: "FruitForm",
    methods: {
      Confirm() {
        this.fruitName = document.getElementById('name').value;
        this.locality = document.getElementById('local').value;
        this.price = document.getElementById('price').value;
        console.log(this.fruitName, this.locality, this.price);
        edit(this.fruitName, this.locality, this.price).then(res => {
          if (res === 1) {
            console.log("修改成功");
            this.$router.replace('/fruitInfoAdmin');
          }else {
            console.log("修改失败");
          }
        })
      }
    },
    data() {
      return {
        editForm: {
          fruitName: '',
          locality: '',
          price: '',
        },
      }
    }
  }
</script>

<style scoped>
  #fruitForm {
    position: absolute;
    top: 15%;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #editForm {
    position: relative;
    top: 0;
    left: 10%;
    width: 100%;
    height: 100%;
  }
  .el-input {
    width: 180px;
  }
  #nameItem {
    position: absolute;
    top: 10%;
    width: 100%;
  }
  #locaItem {
    position: absolute;
    top: 25%;
    width: 100%;
  }
  #priceItem {
    position: absolute;
    top: 40%;
    width: 100%;
  }
  #dateItem {
    position: absolute;
    top: 40%;
    width: 100%;
  }
  #timeItem {
    position: absolute;
    top: 55%;
    width: 100%;
  }
  #subItem {
    position: absolute;
    top: 60%;
    right: 30%;
  }
</style>