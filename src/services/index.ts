import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `http://localhost:3333`
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export { axiosInstance }
