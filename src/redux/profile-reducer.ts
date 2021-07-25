import { stopSubmit } from 'redux-form';
import { PhotosType, PostType, ProfileType } from '../types/type';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { profileAPI } from '../api/profile-api';

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-network/profile/SET_STATUS';
const DELETE_POST = 'social-network/profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'social-network/profile/SAVE_PHOTO_SUCCESS';


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

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
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
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }

    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }

    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }

    default:
      return state;
  }
}

type ActionsTypes = AddPostCreatorActionType | SetUserProfileActionType | SetStatusActionType | DeletePostActionType |
  SavePhotoSuccessActionType

type AddPostCreatorActionType = {
  type: typeof ADD_POST,
  newPostText: string
}
export const addPostCreator = (newPostText: string): AddPostCreatorActionType => ({ type: ADD_POST, newPostText })
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status })
type DeletePostActionType = {
  type: typeof DELETE_POST,
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    alert(`Произошла ошибка:\n
        ${error}`)
  }

}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch) => {
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfile(profile.userId));
  } else {
    // @ts-ignore
    dispatch(stopSubmit('edit-profile', { _error: data.messages[0] }));
    return Promise.reject(data.messages[0]);
  }
}

export default profileReducer;