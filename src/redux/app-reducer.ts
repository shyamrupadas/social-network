import { checkAuthorised } from './auth-reducer';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';

const INITIALIZING_SUCCESS = 'social-network/app/INITIALIZING_SUCCESS';

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case INITIALIZING_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

type ActionsTypes = InitializingSuccessActionType;

type InitializingSuccessActionType = {
  type: typeof INITIALIZING_SUCCESS
}
export const initializingSuccess = (): InitializingSuccessActionType => ({ type: INITIALIZING_SUCCESS });

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const initializeApp = (): ThunkType => {
  return async (dispatch) => {
    let promise = dispatch(checkAuthorised());

    Promise.all([promise])
      .then(() => {
        dispatch(initializingSuccess());
      });
  }
}

export default appReducer;