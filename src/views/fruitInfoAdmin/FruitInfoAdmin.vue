<template>
  <div id="fruitInfoAdmin">
    <div id="title">
      <el-button id="back" @click="BackToSearch" circle icon="el-icon-arrow-left"></el-button>
      <p>水果管理</p>
      <i id="more" @click="addDrawer = true" class="el-icon-more"></i>
    </div>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="fruitData.slice((currpage-1)*pagesize,currpage*pagesize)"
      border
      id="fruitTable"
      width=""
      height="73%">
      <el-table-column
        fixed
        prop="fruitname"
        width="80"
        label="名称">
      </el-table-column>
      <el-table-column
        width="50"
        fixed
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        width="120"
        prop="locality"
        label="产地">
      </el-table-column>
      <el-table-column
        width="180"
        prop="createtime"
        label="创建日期">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="drawer = true">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      id="foot"
      @current-change="handleCurrentChange"
      :current-page="currpage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pagesize"
      layout="total, sizes, jumper"
      :total="fruitData.length">
    </el-pagination>
    <el-drawer
      title="请修改当前信息"
      :visible.sync="drawer"
      direction="btt"
      size="60%">
      <fruit-form></fruit-form>
    </el-drawer>
    <el-drawer
      title="请添加信息"
      :visible.sync="addDrawer"
      direction="btt"
      size="60%">
      <fruit-form></fruit-form>
    </el-drawer>
  </div>
</template>

<script>
  import axios from "../../network/axios";
  import FruitForm from "./fruitForm/FruitForm";
  import {deleteFruit} from "../../network/fruit/delete";

  export default {
    name: "FruitInfoAdmin",
    components: {
      FruitForm
    },
    created() {
      this.$store.commit('FruitShowChange');
    },
    mounted() {
      if (this.$store.state.fruitIsFull === true){
        setTimeout(()=> {
          this.getFullData();
        },1000);
        // this.getData();
      } else {
        setTimeout(() => {
          this.getPartData();
        },1000)
      }
    },
    methods: {
      getFullData() {
        axios({
          url: '/commodities/show'
        }).then(res => {
          console.log(res);
          console.log(res.length);
          let fruitData = res;
          let data = [];
          let len = fruitData.length;
          for (let i=0; i< len; i++){
            let obj = {};
            obj.fruitname = fruitData[i].fruitname;
            obj.price = fruitData[i].price;
            obj.locality = fruitData[i].locality;
            obj.createtime = fruitData[i].createtime;
            data[i] = obj;
          }
          this.fruitData = data;
          this.loading = false;
        }).catch(err => {
          console.log("数据获取失败");
        })
      },
      getPartData() {
        this.fruitData = this.$store.state.fruitSearchInfo;
        this.loading = false;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log("233"+index, row);
        console.log("000"+row.fruitname);
        deleteFruit(row.fruitname).then(res => {
          console.log(res);
          if (res === 1) {
            alert("删除成功");
            this.$router.go(0);
          } else {
            alert("删除失败");
          }
        }).catch(err => {
          console.log("错误", err);
        });
        this.fruitData.splice(index,1);
      },
      BackToSearch() {
        this.$router.push('/category/fruitSearch')
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize=val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currpage=val;
      },
    },
    data() {
      return {
        addDrawer: false, // 添加
        drawer: false,  // 修改
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
        fruitData: [],
        loading: true
      }
    },
  }
</script>

<style scoped>
  #fruitInfoAdmin {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  #title {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    height: 49px;
    text-align: left;
  }
  #title #back {
    position: relative;
    float: left;
    left: 6%;
    top: 23%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
  }
  #title p {
    position: relative;
    top: 40%;
    left: 25%;
    width: 160px;
  }
  #title #more {
    position: relative;
    float: right;
    right: 6%;
    font-size: 20px;
  }
  .el-table {
    position: absolute;
    top: 10%;
    font-size: 14px;
    text-align: center;
    overflow-x: auto;
  }
  #foot {
    position: absolute;
    top: 85%;
  }
</style>