import { getSingleUserRes } from '@/types/reqRes/user'
import useApi from './useApi'

export const follow = (userId: string) => {
  return useApi().patch<boolean>(`/users/${userId}/follow`)
}

export const unFollow = (userId: string) => {
  return useApi().patch<boolean>(`/users/${userId}/unfollow`)
}

export const getFollowing = () => {
  return useApi().get<getSingleUserRes[]>('/users/following')
}

export const getFollowers = () => {
  return useApi().get<getSingleUserRes[]>('/users/followers')
}
