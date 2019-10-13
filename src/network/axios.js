import originAxios from 'axios'

export default function axios(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = originAxios.create({
      // baseURL: "http://127.0.0.1:7300/mock/5d95904072f59432c02dfbb3/mall",
      baseURL: "http://localhost:8080",
      timeout: 15000
    });

    // 配置请求和响应拦截
    instance.interceptors.request.use(config => {
      // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画

      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面

      return config
    }, err => {
      return err
    });

    instance.interceptors.response.use(response => {
      if (response.status === 200) { // 文件类型特殊处理
        return response.data;
      }
    }, err => {
      Message({
        message: '网络请求失败，请稍候再试',
        type: 'error'
      });
      return Promise.reject(err)
    });

    // 2.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    })
  })
}