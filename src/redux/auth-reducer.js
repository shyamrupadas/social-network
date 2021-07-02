import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'social-network/auth/SET_AUTH_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({
  type: SET_AUTH_USER_DATA, payload:
    {id, login, email, isAuth}
});

export const checkAuthorised = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let {id, login, email} = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(checkAuthorised());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages : 'Some error';
    dispatch(stopSubmit('login', {_error: message}));
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;