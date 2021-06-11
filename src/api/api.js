import * as axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      {
        withCredentials: true,
      })
      .then(response => {
        return response.data;
      });
}

export const unfollowUser = (id) => {
  return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
    withCredentials: true,
    headers: {
      'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
    }
  })
    .then(response => {
    return response.data;
  });
}

export const followUser = (id) => {
  return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      'API-KEY': '91cc1011-293a-4a6f-955d-371d85cc4175'
    }
  })
    .then(response => {
      return response.data;
    });
}

export const isAuthorised = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true
  })
    .then(response => {
      return response.data;
    });
}

