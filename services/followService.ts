import useApi from './useApi'
import { getOneFollowingUserRes } from '@/types/reqRes/follow'

export const follow = (userId: string) => {
  return useApi().patch<boolean>(`/users/${userId}/follow`)
}

export const unFollow = (userId: string) => {
  return useApi().patch<boolean>(`/users/${userId}/unfollow`)
}

export const getFollowing = () => {
  return useApi().get<getOneFollowingUserRes[]>('/users/following')
}

export const getFollowers = () => {
  return useApi().get<getOneFollowingUserRes[]>('/users/followers')
}
