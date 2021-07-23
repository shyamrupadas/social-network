import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
  }
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}