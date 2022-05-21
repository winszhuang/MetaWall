export enum HttpMethodEnum {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  options = 'OPTIONS'
}

export type HttpMethodType = keyof typeof HttpMethodEnum

export const httpMethodList = Object.keys(HttpMethodEnum) as HttpMethodType[]