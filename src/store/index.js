import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import loginStore from "./modules/loginStore";

Vue.use(Vuex);

const state = {
  fruitShow: false, //判断是否展示货物页面
  titleStatus: "未登录app", //登录后我的标题
  isLogin: false, //登录后我的界面显示
  loginClientName: '',  //登录昵称
  loginName: '',  //登录姓名
  // loginRole: '',  //登录角色
  fruitSearchInfo: [], //水果模糊查询数据
  fruitIsFull: true,
  retailerSearchInfo: [],
  retailerIsFull: true,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    loginStore: loginStore
  }
});

export default store