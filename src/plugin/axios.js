import authService from './authService'
import axios from 'axios'
import { useAuthStore } from '@/store/auth'

const baseURL = import.meta.env.VITE_BASE_URL

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const auth = useAuthStore()
      const accessToken = auth.getAccessToken
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    } catch (error) {
      // Handle error
      console.error('Error getting access token:', error)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      try {
        await authService.refreshToken()
        const accessToken = localStorage.getItem('accessToken')
        originalRequest.headers.Authorization = `Bearer ${accessToken}`
        return axiosInstance(originalRequest)
      } catch (refreshError) {
        authService.logout()
        throw refreshError
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
