import axios from 'axios'
import { getToken, removeToken } from '@/utils/storage'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as any,
  timeout: 6000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})

// http request 请求拦截器
service.interceptors.request.use(
  (config: any) => {
    if (getToken()) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

//  http response 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    if (!response.data.code) {
      return response
    }
    switch (response.data.code) {
      case 401: {
        if (getToken()) {
          removeToken()
        }
        break
      }
      case 403: {
        if (getToken()) {
          removeToken()
        }
        break
      }
      case 500: {
        // Message.error(response.data.msg)
        break
      }
      case 201: {
        return response
      }
      case 200: {
        return response
      }
      case 1: {
        return response
      }
      default: {
        // Message.error(response.data.msg)
      }
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
