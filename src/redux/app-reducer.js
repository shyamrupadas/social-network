import {checkAuthorised} from "./auth-reducer";

const INITIALIZING_SUCCESS = 'INITIALIZING_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
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

export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(checkAuthorised());

  Promise.all([promise])
    .then(() => {
      dispatch(initializingSuccess());
    });
}

export default appReducer;