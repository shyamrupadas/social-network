import { checkAuthorised } from './auth-reducer';

const INITIALIZING_SUCCESS = 'social-network/app/INITIALIZING_SUCCESS';

export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
  initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializingSuccessActionType = {
  type: typeof INITIALIZING_SUCCESS
}

export const initializingSuccess = (): InitializingSuccessActionType => ({ type: INITIALIZING_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(checkAuthorised());

  Promise.all([promise])
    .then(() => {
      dispatch(initializingSuccess());
    });
}

export default appReducer;