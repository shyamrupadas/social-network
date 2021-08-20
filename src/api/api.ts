import axios from "axios";
import { UserType } from '../types/type';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
  }
});

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type getItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

