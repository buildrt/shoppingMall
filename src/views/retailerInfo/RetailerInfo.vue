<template>
  <div id="retailerInfo">
    <div id="title">
      <el-button id="back" @click="BackToRetailerSearch" circle icon="el-icon-arrow-left"></el-button>
      <p>供应商管理</p>
      <i id="more" @click="retailerAddDrawer = true" class="el-icon-more"></i>
    </div>
    <el-table
      :data="retailerData"
      border
      id="retailerTable"
      width=""
      height="63%">
      <el-table-column
        fixed
        prop="name"
        width="70"
        label="姓名">
      </el-table-column>
      <el-table-column
        width="120"
        fixed
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        width="120"
        prop="phonenumber"
        label="手机号">
      </el-table-column>
      <el-table-column
        width="80"
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        width="120"
        prop="createtime"
        label="创建日期">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editdrawer = true">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <input id="foot" type="text" placeholder="请输入跳转的页数" style="width: auto"/>
    <el-button type="primary" @click="PageChange" id="confirm">确认</el-button>
    <el-drawer
      title="请修改当前信息"
      :visible.sync="editdrawer"
      direction="btt"
      size="60%">
    </el-drawer>
    <el-drawer
      title="请添加信息"
      :visible.sync="retailerAddDrawer"
      direction="btt"
      size="60%">
      <retailer-form></retailer-form>
    </el-drawer>
  </div>
</template>

<script>
  import axios from "../../network/axios";
  import RetailerForm from './retailerForm/RetailerForm'
  import {deleteRetailer} from "../../network/retailer/delete";
  import {retailerOnload} from "../../network/retailer/retailerOnload";

  export default {
    name: "RetailerInfo",
    components: {
      RetailerForm
    },
    mounted() {
      if (this.$store.state.retailerIsFull === true) {
        this.getRetailerFullData();
      }else {
        this.getRetailerPartData();
      }
    },
    data() {
      return {
        retailerData: [],
        editdrawer: false,
        retailerAddDrawer: false,
        currentpage: 1
      }
    },
    methods: {
      getRetailerFullData() {
        retailerOnload(this.currentpage,1).then(res => {
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
          this.retailerData = data;
        }).catch(err => {
          console.log("数据库连接失败");
        })
      },
      getRetailerPartData() {
        this.retailerData = this.$store.state.retailerSearchInfo;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        deleteRetailer(row.name).then(res => {
          console.log(res);
          if (res === 1) {
            alert("删除成功");
            this.$router.go(0);
          } else {
            alert("删除失败");
          }
        }).catch(err => {
          console.log("错误");
        });
        this.retailerData.splice(index,1);
      },
      BackToRetailerSearch() {
        this.$router.push('/category/retailerSearch')
      },
      PageChange() {
        let page = document.getElementById('foot').value;
        console.log(page);
        console.log(isNaN(page));
        if (!isNaN(page) && page > 0) {
          console.log("yes");
          this.currentpage = page;
          retailerOnload(this.currentpage,1).then(res => {
            console.log(res);
            let retailerData = res;
            this.retailerData = [];
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
            this.retailerData = data;
            console.log(this.retailerData);
          }).catch(err => {
            console.log("数据库连接失败");
          })
        } else {
          alert("请输入正确的页码");
        }
      }
    }
  }
</script>

<style scoped>
  #retailerInfo {
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
    top: 75%;
    font-size: 14px;
    height: 30px;
    margin-left: 30%;
    padding-left: 10px;
  }
  #confirm {
    position: absolute;
    top: 82%;
    right: 10%;
  }
</style>