import axios from "axios"

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  // axios拦截器
  // 1.请求拦截
  // instance.interceptors.request.use(config => {
  //   // console.log(config);
  //   return config
  // }, err => {
  //   // console.log(err);
  // })
  // 2.响应拦截
  instance.interceptors.response.use(config => {
    return config
  }, err => {

  })
  // 3.发送真正的网络请求
  return instance(config)
}
