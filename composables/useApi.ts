import { $fetch, FetchContext, FetchOptions, FetchResponse } from 'ohmyfetch';
import { ApiResponse } from '@/types/api';

type MethodType = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';

type FetchMethod = <T>(url: string, body?: BodyInit | Record<string, any>) => Promise<ApiResponse<T>>;
type Fetcher = Record<MethodType, FetchMethod>;

export default () => {
  const apiInstance = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    onRequest: requestHandler,
    onResponse: responseHandler,
    parseResponse: JSON.parse
  });

  async function get<T>(url: string) {
    return apiInstance<ApiResponse<T>>(url);
  }

  async function post<T>(url: string, body: BodyInit | Record<string, any>) {
    return apiInstance<ApiResponse<T>>(url, { body, method: 'POST' });
  }

  async function put<T>(url: string, body: BodyInit | Record<string, any>) {
    return apiInstance<ApiResponse<T>>(url, { body, method: 'PUT' });
  }

  async function patch<T>(url: string, body: BodyInit | Record<string, any>) {
    return apiInstance<ApiResponse<T>>(url, { body, method: 'PATCH' });
  }
  
  return { get, post, put, patch } as Fetcher;
}


async function requestHandler(ctx: FetchContext): Promise<void> {
  console.log('之後處理token問題');
}

async function responseHandler<R>(ctx: FetchContext & {
  response: FetchResponse<R>;
}): Promise<void> {
  console.log('之後處理error問題');
}