import { UserType } from '../types/type';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { usersAPI } from '../api/users-api';

const initialState = {
  myFriends: [] as Array<UserType>,
};

const sidebarReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'sn/sidebar/SET_FRIENDS':
      return {
        ...state,
        myFriends: action.users
      }
    default:
      return state;
  }

}

export const actions = {
  setFriends: (users: Array<UserType>) => ({type: 'sn/sidebar/SET_FRIENDS', users} as const)
}

export const requestFriends = (): ThunkType => {
  return async (dispatch) => {

    let data = await usersAPI.getFriends();
    dispatch(actions.setFriends(data.items));
  }
}

export default sidebarReducer;

type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;