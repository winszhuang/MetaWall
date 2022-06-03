import { ResponseStatusEnum } from '@/enum/responseStatusEnum'

export interface ApiResponse<
  D extends Record<string, any> | boolean | string | Array<any>,
> {
  data: D;
  message?: string
  status: ResponseStatusEnum
}
