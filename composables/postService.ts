export const getManyPost = (url: string) => {
  return useApi().get<GetSinglePostRes[]>(url);
}

export const addPost = (body: AddSinglePostReq) => {
  return useApi().post<AddSinglePostRes>('/posts', body);
}