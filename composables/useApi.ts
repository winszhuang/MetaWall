import { $fetch, FetchContext, FetchOptions, FetchResponse } from 'ohmyfetch';
import { ApiResponse } from '@/types/api';

type FetchMethod = <T>(url: string, options?: FetchOptions<"json">) => Promise<ApiResponse<T>>;
type Fetcher = Record<string, FetchMethod>;

export default () => {
  const apiInstance = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    onRequest: requestHandler,
    onResponse: responseHandler,
    parseResponse: JSON.parse
  });

  async function defaultMethod<T>(url: string, options: FetchOptions<"json">) {
    return apiInstance<ApiResponse<T>>(url, options);
  }
  
  return {
    get: <T>(url: string) => apiInstance<ApiResponse<T>>(url),
    post: defaultMethod,
    put: defaultMethod,
    patch: defaultMethod
  } as Fetcher;
}


async function requestHandler(ctx: FetchContext): Promise<void> {
  console.log('之後處理token問題');
}

async function responseHandler<R>(ctx: FetchContext & {
  response: FetchResponse<R>;
}): Promise<void> {
  console.log('之後處理error問題');
}