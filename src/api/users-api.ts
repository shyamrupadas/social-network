import { getItemsType, APIResponseType, instance } from './api';

export const userAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  followUser(userId: number) {
    return instance.post<APIResponseType>(`follow/${userId}`)
      .then(res => res.data);
  },
  unfollowUser(userId: number) {
    return instance.delete(`follow/${userId}`)
      .then(res => res.data) as Promise<APIResponseType>;
  }
};