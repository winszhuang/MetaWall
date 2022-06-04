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
