/* 处理上传数据，返回数据 */
import axios from 'axios'
import router from '@router/index'
import { isJSON } from '@utils/utils'
import { getToken } from '@utils/auth'
import config, { FAILURE_CODE } from './config'

// 创建axios实例,设置接口请求地址
const instance = axios.create({
  baseURL: config.baseURL
})

// 接口请求前的处理
instance.defaults.transformRequest = [
  function (data) {
    return data
  }
]

// 接口请求后的处理
instance.defaults.transformResponse = [
  function (data) {
    if (isJSON(data)) {
      return JSON.parse(data)
    } else {
      return data
    }
  }
]

// 请求拦截器
instance.interceptors.request.use(
  config => {
    Object.assign(config.headers, {
      token: getToken()
    })
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 请求响应器
instance.interceptors.response.use(
  res => {
    if (res.status === 200) {
      if (res.data && res.data.result === FAILURE_CODE) {
        console.log(res.data.message)
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })
      }
      return Promise.resolve(res)
    }
    return Promise.reject(res)
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
