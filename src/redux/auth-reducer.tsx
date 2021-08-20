import { ResultCodesEnum, ResultCodeForCaptchaEnum } from '../api/api';
import { FormAction, stopSubmit } from 'redux-form';
import { BaseThunkType, InferActionsTypes } from './redux-store';
import { authAPI } from '../api/auth-api';
import { securityAPI } from '../api/security-api';

const initialState = {
  id: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null as string | null
};

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'sn/auth/SET_AUTH_USER_DATA':
    case 'sn/auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const actions = {
  setAuthUserData: (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'sn/auth/SET_AUTH_USER_DATA', payload: { id, login, email, isAuth }
  } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'sn/auth/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl }
  } as const)
};

export const checkAuthorised = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();

  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe, captcha);

  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(checkAuthorised());
  } else {
    if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message = data.messages.length > 0 ? data.messages : 'Some error';
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
}

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;