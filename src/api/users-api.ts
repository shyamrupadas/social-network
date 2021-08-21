import { getItemsType, APIResponseType, instance } from './api';

export const usersAPI = {

  getUsers(currentPage = 1, pageSize = 10, term: string = '') {
    return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
      .then(res => res.data);
  },
  follow(userId: number) {
    return instance.post<APIResponseType>(`follow/${userId}`)
      .then(res => res.data);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`)
      .then(res => res.data) as Promise<APIResponseType>;
  },

  getFriends(currentPage = 1, pageSize = 6) {
    return instance.get<getItemsType>(`users?page=${currentPage}&count=${pageSize}&friend=true`)
      .then(res => res.data);
  }
};