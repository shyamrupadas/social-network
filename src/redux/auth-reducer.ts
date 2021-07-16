import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType2 = {
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  isFetching: boolean,
  captchaUrl: string | null
}

export type InitialStateType = typeof initialState;

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

type setAuthUserDataActionPayloadType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

type setAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA
  payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA, payload:
    { id, login, email, isAuth }
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
});

export const checkAuthorised = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(checkAuthorised());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;