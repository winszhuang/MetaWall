export const postImage = (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  return useApi().post<AddSingleImageRes>('/images', formData);
}