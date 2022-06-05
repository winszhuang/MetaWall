import { $fetch, FetchContext, FetchResponse } from 'ohmyfetch'
import { ApiResponse } from '@/types/api'
import { HttpMethodType, HttpMethodEnum, httpMethodList } from '@/enum/http-method'

type FetchMethod = <T>(url: string, body?: BodyInit | Record<string, any>) => Promise<ApiResponse<T>>;
type Fetcher = Record<HttpMethodType, FetchMethod>;

export default () => {
  const apiInstance = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    onRequest: requestHandler,
    onResponse: responseHandler,
    parseResponse: JSON.parse
  })

  const fetcher = {} as Fetcher

  httpMethodList.forEach(method => {
    fetcher[method] = <T>(url: string, body?: BodyInit | Record<string, any>) => apiInstance<ApiResponse<T>>(url, { body, method: HttpMethodEnum[method] })
  })

  return fetcher
}

async function requestHandler (ctx: FetchContext): Promise<void> {
  const token = useLocalStorage().getToken()
  if (token) {
    ctx.options.headers = {
      Authorization: `Bearer ${token}`
    }
  }
}

async function responseHandler<R> (ctx: FetchContext & {
  response: FetchResponse<R>;
}): Promise<void> {
  if (!ctx.response.ok) {
    const errorMessage = ctx.response._data.message
    console.error(errorMessage)
  }
}
