// import Vue from 'vue'
import axios from 'axios'

axios.create({
  baseURL: '设置接口基地址',
  headers: '设置请求头',
  timeout: 10000
})

function post (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'POST',
      headers: '请求头{}',
      data
    })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function get (url, params) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      params,
      method: 'GET',
      headers: '请求头{}'
    })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

function filtersRequest (url, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      data,
      responseType: 'blob',
      headers: '请求头{}',
      method: 'POST'
    })
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

axios.interceptors.request.use(
  function (config) {
    // 请求拦截器
    // 发送之前做点什么
    console.log(config, '请求拦截')
    return config
  },
  function (error) {
    // 对错误如何处理

    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log(response, '响应拦截')

    return response
  },
  function (error) {
    // 对错误响应做点什么

    return Promise.reject(error)
  }
)

export default {
  post,
  get,
  filtersRequest
}
