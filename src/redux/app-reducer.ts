import { checkAuthorised } from './auth-reducer';
import { BaseThunkType, InferActionsTypes } from './redux-store';

const initialState = {
  initialized: false
};

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

export const initializeApp = (): ThunkType => async (dispatch) => {
  let promise = dispatch(checkAuthorised());

  Promise.all([promise])
    .then(() => {
      dispatch(actions.initializingSuccess());
    });
}

export default appReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;