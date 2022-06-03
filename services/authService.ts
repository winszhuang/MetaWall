import useApi from './useApi'

export const signUp = (body: BodyInit | Record<string, any>) => {
  return useApi().post('/auth/signup', body)
}

export const signIn = (body: SignInReq) => {
  return useApi().post<SignInRes>('/auth/signin', body)
}
