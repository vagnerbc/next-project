import { axiosInstance } from 'services'

export const AuthService = {
  auth: (email: string, password: string) => {
    return axiosInstance.post('/auth/login', { email, password })
  },
  get: (email: string) => {
    return axiosInstance.get('/auth', { params: email })
  }
}
