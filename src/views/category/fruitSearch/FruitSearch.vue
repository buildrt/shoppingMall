<template>
  <div id="fruitSearch">
    <el-form id="elform" :model="form" :rules="rules" ref="form" label-position="left">
      <el-form-item label="名称" prop="name">
        <el-input name="fruitName" id="fruitName" v-model.trim="form.fruitName"></el-input>
      </el-form-item>
      <el-form-item label="产地" prop="locality">
        <el-input name="locality" id="locality" v-model.trim="form.locality"></el-input>
      </el-form-item>
      <el-form-item label="最低价" prop="minPrice">
        <el-col :span="16">
          <el-input name="minPrice" id="minPrice" v-model.trim="form.minPrice" style="width: 100%;"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="最高价" prop="maxPrice">
        <el-col :span="16">
          <el-input name="maxPrice" id="maxPrice" v-model.trim="form.maxPrice" style="width: 100%;"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="起始日" prop="startTime">
        <el-col :span="16">
          <el-date-picker type="date" name="startTime" id="start" placeholder="开始日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束日" prop="endTime">
        <el-col :span="16">
          <el-date-picker type="date" name="endTime" id="end" placeholder="结束日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" id="search" @click="submitForm()">搜索</el-button>
        <el-button id="reset" @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" id="fruitData" @click="ToFruitInfoAdmin">查看所有</el-button>
  </div>
</template>

<script>
  export default {
    name: "FruitSearch",
    methods: {
      submitForm() {
        this.fruitName = document.getElementById('fruitName').value;
        this.locality = document.getElementById('locality').value;
        this.minPrice = document.getElementById('minPrice').value;
        this.maxPrice = document.getElementById('maxPrice').value;
        this.startTime = document.getElementById('start').value;
        this.endTime = document.getElementById('end').value;
        console.log(this.fruitName, this.locality, this.minPrice, this.maxPrice, this.startTime,this.endTime);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      ToFruitInfoAdmin() {
        this.$router.push('/fruitInfoAdmin');
      }
    },
    data() {
      let checkTime = (rule, value, callback) => {
        let st = document.getElementById('start').value;
        if (value === '') {
          return
        }
        let et = value.getFullYear() + '-' + (value.getMonth()+1 < 10 ? '0'+(value.getMonth()+1) : value.getMonth()+1) + '-' +  (value.getDate()<10?'0'+(value.getDate()):value.getDate());
        console.log(st + "--" + et);
        if (st === '') {
          callback(new Error('请输入开始时间'))
        }else if (st >= et){
          callback(new Error('开始时间需小于结束时间'));
        }else {
          callback();
        }
      };
      let checkPrice2 = (rule, value, callback) => {
        if (value <= this.form.minPrice) {
          callback(new Error('最高价需大于最低价'));
        }else {
          callback();
        }
      };
      return {
        isShow: true,
        form: {
          fruitName: '',
          locality: '',
          minPrice: '',
          maxPrice: '',
          startTime: '',
          endTime: ''
        },
        rules: {
          name: [

          ],
          locality: [

          ],
          minPrice: [

          ],
          maxPrice: [
            {required: false, trigger: 'blur' },
            {validator: checkPrice2, trigger: 'blur'}
          ],
          startTime: [

          ],
          endTime: [
            {validator: checkTime, trigger: 'blur'}
          ]
        }
      }
    },
  }
</script>

<style scoped>
  #fruitSearch {
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
  #fruitData {
    position: absolute;
    bottom: 25%;
    width: auto;
    left: 16%;
  }
</style>