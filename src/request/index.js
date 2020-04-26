/* get,post方法的封装,项目接口的定义 */
import qs from 'qs'
import html from './http'

export function get (url, param = {}) {
  return new Promise((resolve, reject) => {
    html.get(url, { param }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, param = {}) {
  return new Promise((resolve, reject) => {
    html.post(url, qs.stringify(param), {
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export const login = () => post('/login')

export const register = () => post('/register')

export const user = () => get('/user')
