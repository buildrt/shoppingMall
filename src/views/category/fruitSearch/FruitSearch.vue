<template>
  <div id="fruitSearch">
    <el-form :model="form" :rules="rules" label-position="left">
      <el-form-item label="名称" prop="name">
        <el-input v-model.trim="form.name"></el-input>
      </el-form-item>
      <el-form-item label="产地" prop="locality">
        <el-input v-model.trim="form.locality"></el-input>
      </el-form-item>
      <el-form-item label="最低价" prop="minPrice">
        <el-col :span="16">
          <el-input v-model.trim="form.minPrice" style="width: 100%;"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="最高价" prop="maxPrice">
        <el-col :span="16">
          <el-input v-model.trim="form.maxPrice" style="width: 100%;"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="起始日" prop="startTime">
        <el-col :span="16">
          <el-date-picker type="date" id="start" placeholder="开始日期" v-model="form.startTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="结束日" prop="endTime">
        <el-col :span="16">
          <el-date-picker type="date" id="end" placeholder="结束日期" v-model="form.endTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "FruitSearch",
    methods: {
      onSubmit() {

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
      return {
        form: {
          name: '',
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

          ],
          startTime: [

          ],
          endTime: [
            {validator: checkTime, trigger: 'blur'}
          ]
        }
      }
    }
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
  }
</style>