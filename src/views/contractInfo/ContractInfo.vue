<template>
  <div id="contractInfo">
    <div id="title">
      <el-button id="back" @click="BackToContractSearch" circle icon="el-icon-arrow-left"></el-button>
      <p>采购合同管理</p>
      <i id="more" @click="" class="el-icon-more"></i>
    </div>
    <el-table
      :data="contractData.slice((currpage-1)*pagesize,currpage*pagesize)"
      border
      id="contractTable"
      width=""
      height="73%">
      <el-table-column
        fixed
        prop=""
        width="70"
        label="合同号">
      </el-table-column>
      <el-table-column
        width="80"
        fixed
        prop=""
        label="运输类型">
      </el-table-column>
      <el-table-column
        width="120"
        prop=""
        label="零售商">
      </el-table-column>
      <el-table-column
        width="80"
        prop=""
        label="商品">
      </el-table-column>
      <el-table-column
        width="180"
        prop="createTime"
        label="创建日期">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      :total="contractData.length">
    </el-pagination>
    <!--<el-drawer-->
            <!--title="请修改当前信息"-->
            <!--:visible.sync="editdrawer"-->
            <!--direction="btt"-->
            <!--size="60%">-->
    <!--</el-drawer>-->
    <!--<el-drawer-->
            <!--title="请添加信息"-->
            <!--:visible.sync="retailerAddDrawer"-->
            <!--direction="btt"-->
            <!--size="60%">-->
      <!--<retailer-form></retailer-form>-->
    <!--</el-drawer>-->
  </div>
</template>

<script>
  export default {
    name: "ContractInfo",
    methods: {
      BackToContractSearch() {
        this.$router.push('/category/contractSearch');
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
        contractData: [],
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
      }
    }
  }
</script>

<style scoped>
  #contractInfo {
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
</style>