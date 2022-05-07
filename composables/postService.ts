export const addPost = (body: AddSinglePostReq) => {
  return useApi().post<AddSinglePostRes>('/posts', body);
}