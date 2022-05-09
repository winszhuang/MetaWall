import { HttpCodeEnum } from '@/enum/http';

export interface ApiResponse<
  D extends Record<string, any> | boolean | string | Array<any>,
> {
  data: D;
  code?: HttpCodeEnum;
  message?: string;
  status: string
}