import request from '@/utils/request'

export interface LoginData {
  username: string
  password: string
}

export const login = (data: LoginData) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

export const getUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}
