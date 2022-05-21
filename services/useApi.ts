import { $fetch, FetchContext, FetchOptions, FetchResponse } from 'ohmyfetch';
import { ApiResponse } from '@/types/api';
import { HttpMethodType, httpMethodList } from '@/enum/http-method';

type FetchMethod = <T>(url: string, body?: BodyInit | Record<string, any>) => Promise<ApiResponse<T>>;
type Fetcher = Record<HttpMethodType, FetchMethod>;

export default () => {
  const apiInstance = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    onRequest: requestHandler,
    onResponse: responseHandler,
    parseResponse: JSON.parse
  });

  const fetcher = {} as Fetcher

  httpMethodList.forEach(method => {
    fetcher[method] = <T>(url: string, body?: BodyInit | Record<string, any>) => apiInstance<ApiResponse<T>>(url, { body, method })
  })

  return fetcher
}


async function requestHandler(ctx: FetchContext): Promise<void> {
  console.log('之後處理token問題');
}

async function responseHandler<R>(ctx: FetchContext & {
  response: FetchResponse<R>;
}): Promise<void> {
  console.log('之後處理error問題');
}