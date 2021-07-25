import { checkAuthorised } from './auth-reducer';
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './redux-store';

const INITIALIZING_SUCCESS = 'sn/app/INITIALIZING_SUCCESS';

const initialState = {
  initialized: false
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'sn/app/INITIALIZING_SUCCESS':
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const actions = {
  initializingSuccess: () => ({ type: 'sn/app/INITIALIZING_SUCCESS' } as const)
}

export const initializeApp = () => async (dispatch: any) => {
  let promise = dispatch(checkAuthorised());

  Promise.all([promise])
    .then(() => {
      dispatch(actions.initializingSuccess());
    });
}

export default appReducer;