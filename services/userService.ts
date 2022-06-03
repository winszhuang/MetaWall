import useApi from './useApi';

export const getUserInfo = () => {
  return useApi().get<GetSinglePostRes[]>('/users/me');
}