import { AddSinglePostReq, AddSinglePostRes, GetSinglePostRes } from '@/types/reqRes/post'
import useApi from './useApi'

export const getManyPost = (url: string) => {
  return useApi().get<GetSinglePostRes[]>(url)
}

export const getUserPosts = (userId: string) => {
  return useApi().get<GetSinglePostRes[]>(`/posts/user/${userId}`)
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

export const addComment = (postId: string, body: AddSinglePostReq) => {
  return useApi().post<GetSinglePostRes>(`/posts/${postId}/comment`, body)
}

export const editComment = (commentId: string, body: AddSinglePostReq) => {
  return useApi().patch(`/posts/comment/${commentId}`, body)
}

export const deleteComment = (commentId: string) => {
  return useApi().delete(`/posts/comment/${commentId}`)
}
