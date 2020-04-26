/* 域名地址 */
// 判断当前环境是否是生产环境
const isProd = process.env.NODE_ENV === 'production'

// 判断当前环境是否是生产环境，假如是开发环境则设置代理，假如是生产环境则设置为空
export const BASE_URL = isProd ? '' : '/api'

// 接口请求成功的code值
export const SUCCESS_CODE = 1

//接口请求失败的code值
export const FAILURE_CODE = -1

// 导出默认模块
export default {
  baseURL: BASE_URL
}
