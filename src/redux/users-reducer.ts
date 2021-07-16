import { userAPI } from '../api/api';
import { UserType } from '../types/type';

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

const usersReducer = (state = initialState, action: any): InitialStateType => {
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

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })
type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId })
type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
})
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: isFetching
})
type ToggleFollowingInProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: isFetching,
  userId
})

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {

    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));

    let response = await userAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsersCount(response.data.totalCount));
  }
}

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));

    let response = await userAPI.followUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
  }
}

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));

    let response = await userAPI.unfollowUser(userId)
    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId));
  }
}


export default usersReducer;