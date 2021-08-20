import { UserType } from '../types/type';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { usersAPI } from '../api/users-api';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'sn/users/FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }

    case 'sn/users/UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }

    case 'sn/users/SET_USERS':
      return { ...state, users: action.users }

    case 'sn/users/SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage }

    case 'sn/users/SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.count }

    case 'sn/users/TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    case 'sn/users/TOGGLE_FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state;
  }
}

export const actions = {
  followSuccess: (userId: number) => ({ type: 'sn/users/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'sn/users/UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'sn/users/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({
    type: 'sn/users/SET_CURRENT_PAGE',
    currentPage
  } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'sn/users/SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'sn/users/TOGGLE_IS_FETCHING',
    isFetching: isFetching
  } as const),
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
    type: 'sn/users/TOGGLE_FOLLOWING_IN_PROGRESS',
    isFetching: isFetching,
    userId
  } as const)
}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch) => {

    dispatch(actions.setCurrentPage(page));
    dispatch(actions.toggleIsFetching(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  }
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    let data = await usersAPI.follow(userId)
    if (data.resultCode === 0) {
      dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    let data = await usersAPI.unfollow(userId)
    if (data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
  }
}

export default usersReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;