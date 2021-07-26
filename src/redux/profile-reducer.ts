import { FormAction, stopSubmit } from 'redux-form';
import { PhotosType, PostType, ProfileType } from '../types/type';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { profileAPI } from '../api/profile-api';

const initialState = {
  posts: [
    { id: 1, message: 'Привет, мир!', likesCount: 5 },
    { id: 2, message: 'Ом намо бхагавате васудевайа!', likesCount: 108 },
    { id: 3, message: 'Какой-нибудь еще пост', likesCount: 1108 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
};

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'sn/profile/ADD-POST':
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case 'sn/profile/SET_STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'sn/profile/SET_USER_PROFILE':
      return { ...state, profile: action.profile }

    case 'sn/profile/DELETE_POST':
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }

    case 'sn/profile/SAVE_PHOTO_SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

    default:
      return state;
  }
}

export const actions = {
  addPostCreator: (newPostText: string) => ({ type: 'sn/profile/ADD-POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'sn/profile/SET_USER_PROFILE', profile } as const),
  setStatus: (status: string) => ({ type: 'sn/profile/SET_STATUS', status } as const),
  deletePost: (postId: number) => ({ type: 'sn/profile/DELETE_POST', postId } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'sn/profile/SAVE_PHOTO_SUCCESS', photos } as const)
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getUserProfile(userId);
  dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
    alert(`Произошла ошибка:\n
        ${error}`)
  }

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch) => {
  const data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(profile.userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
}

export default profileReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;