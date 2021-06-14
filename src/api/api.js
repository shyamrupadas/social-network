import * as axios from "axios";

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
      .then(response => {
        return response.data;
      });
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {

  me() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  }
}

export const profileAPI = {

  getUserProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => {
        return response.data;
      });
  }
}