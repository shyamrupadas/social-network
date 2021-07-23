import { UserType } from '../types/type';
import { AppStateType, InferActionsTypes } from './redux-store';
import { ThunkAction } from 'redux-thunk';
import { userAPI } from '../api/users-api';

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [] as Array<UserType>, //array of users ids
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      }

    case SET_USERS:
      return { ...state, users: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_FOLLOWING_IN_PROGRESS:
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  followSuccess: (userId: number) => ({ type: FOLLOW, userId } as const),
  unfollowSuccess: (userId: number) => ({ type: UNFOLLOW, userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: SET_USERS, users } as const),
  setCurrentPage: (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
  } as const),
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  } as const),
  toggleIsFetching: (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  } as const),
  toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching: isFetching,
    userId
  } as const)
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {

    dispatch(actions.setCurrentPage(page));
    dispatch(actions.toggleIsFetching(true));

    let response = await userAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.data.items));
    dispatch(actions.setTotalUsersCount(response.data.totalCount));
  }
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    let response = await userAPI.followUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(actions.followSuccess(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingInProgress(true, userId));

    let response = await userAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(actions.unfollowSuccess(userId))
    }
    dispatch(actions.toggleFollowingInProgress(false, userId));
  }
}

export default usersReducer;