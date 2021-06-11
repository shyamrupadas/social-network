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

  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
      .then(response => {
        return response.data;
      });
  },

  followUser(id) {
    return instance.post(`follow/${id}`)
      .then(response => {
        return response.data;
      });
  },

  isAuthorised() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      });
  }
}