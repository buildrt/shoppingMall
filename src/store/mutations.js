export default {
  FruitShowChange(state) {
    state.fruitShow = !state.fruitShow;
  },
  TitleStatusChange(state) {
    state.titleStatus = '水果销售app';
  },
  IsLoginChange(state) {
    state.isLogin = !state.isLogin;
  },
  // 敬请期待
  Please() {
    alert("敬请期待");
  }
}
