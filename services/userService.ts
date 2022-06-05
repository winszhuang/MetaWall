import useApi from './useApi'
import {
  getUserProfileRes,
  updateUserProfileReq,
  updatePasswordReq
} from '@/types/reqRes/user'

export const getUserProfile = () => {
  return useApi().get<getUserProfileRes>('/users/profile')
}

export const updateUserProfile = (body: updateUserProfileReq) => {
  return useApi().patch('/users/profile', body)
}

export const updatePassword = (body: updatePasswordReq) => {
  return useApi().patch('/users/updatePassword', body)
}
