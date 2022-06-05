import { AddSinglePostReq, AddSinglePostRes, GetSinglePostRes } from '@/types/reqRes/post'
import useApi from './useApi'

export const getManyPost = (url: string) => {
  return useApi().get<GetSinglePostRes[]>(url)
}

export const addPost = (body: AddSinglePostReq) => {
  return useApi().post<AddSinglePostRes>('/posts', body)
}

export const deletePost = (postId: string) => {
  return useApi().delete(`/posts/${postId}`)
}

export const addLike = (postId: string) => {
  return useApi().patch(`/posts/${postId}/like`)
}

export const unLike = (postId: string) => {
  return useApi().patch(`/posts/${postId}/unlike`)
}

export const getLikePost = () => {
  return useApi().get<GetSinglePostRes[]>('/posts/like')
}
