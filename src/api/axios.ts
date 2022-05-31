import axios from 'axios'
import router from '../router'

let toastObj: any = null
let time: any = null
const queue = new Set()
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
//   retry: 3, // 请求次数
//   retryInterval: 1000,
  timeout: 6000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config: any) => {
      config.retry = 3;
      config.retryInterval = 1000;
    // 请求显示loading效果
    if (!queue.has(config.url)) {
      queue.add(config.url)
    }
    if (!time) {
      time = setTimeout(() => {
          console.log('加载中')
      }, 800)
    }
    if (config.method === 'post') {
      config.params = {}
    } else if (config.method === 'get') {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
    return config
  },
  (error) => {
    console.log('拦截器', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    queue.delete(response.config.url)
    if (!queue.size) {
      clearTimeout(time)
      time = null
      if (toastObj) {
          console.log('关闭加载')
      }
    }
    const res = response.data
    if (parseInt(res.code) === 0) {
      return res
    } else if (parseInt(res.code) === 100) {
      router.push({ path: '/login', query: { redirect: window.history.state.current } })
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    // 服务器连接出错处理
    const { config, code, message } = error
    // 连接超时处理
    if (code === 'ECONNABORTED' || message === 'Network Error') {
      const errorConfig = config
      // 如果配置不存在或重试属性未设置，抛出promise错误
      if (!errorConfig || !errorConfig.retry) return Promise.reject(error)
      // 设置一个变量记录重新请求的次数
      errorConfig.retryCount = errorConfig.retryCount || 0
      // 检查重新请求的次数是否超过我们设定的请求次数
      if (errorConfig.retryCount >= errorConfig.retry) {
        clearTimeout(time)
        if (toastObj) {
          time = null
          toastObj.clear()
          toastObj = null
        }
        // Toast({ message: '服务器连接异常', icon: 'cross' })
        return Promise.reject(error)
      }
      // 重新请求的次数自增
      errorConfig.retryCount += 1
      // 创建新的Promise来处理重新请求的间隙
      const back = new Promise(function (resolve) {
        setTimeout(function () {
          resolve(true)
        }, errorConfig.retryInterval || 1000)
      })
      // 返回axios的实体，重试请求
      return back.then(function () {
        const request = { ...config }
        request.url = request.url.replace(request.baseURL, '')
        return service(request)
      })
    } else {
      console.log('axios：108error')
      clearTimeout(time)
      if (toastObj) {
        time = null
        toastObj.clear()
        toastObj = null
      }
      // Toast({ message: '服务器连接异常', icon: 'cross' })
      return Promise.reject(error)
    }
  }
)

export default service
