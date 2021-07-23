import { instance } from './api';

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
};