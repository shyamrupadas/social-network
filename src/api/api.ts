import axios from "axios";
import { ProfileType } from '../types/type';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
  }
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  unfollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
  },
  followUser(userId: number) {
    return instance.post(`follow/${userId}`)
  }
}

export const profileAPI = {

  getUserProfile(userId: number) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status })
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile)

    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profileData: ProfileType) {
    return instance.put('/profile', profileData)
  }

}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
};

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
};

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCodeEnum
  messages: Array<string>
};

type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum | ResultCodeForCaptcha
  messages: Array<string>
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`)
      .then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}
